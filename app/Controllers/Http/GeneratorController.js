'use strict'

/*
    type TrainingConfig {
        projectId: string;
        traitList: string[]; // e.g "traitEntity.pos"
        wordList : string[][];      // e.g [["aku", "saya", "kamu", "bagus"], ["noob", "cupu"]]
        defaultLabelList: string[]; // e.g ["entity.person", "entity.status"]
        wordLabel?: {[word: string]: string}; // This will override defaultTagList, e.g {"bagus": "entity.specific-person"}
    }
    type TrainingList = Training[]

    type Training {
        input: string,
        entities: TrainingEntity[]
    }

    type TrainingEntity {
        id : string | number;
        entity : string;
        label? : string;
        start : number;
        end : number;
        value : string;
        belongsTo? : {entity : string, id : string};
    }
*/

class GeneratorController {
    async generate({ request, response }) {
        const trainingConfig = request.body
        const result = this.completeTrainingList(trainingConfig, this.generateTrainingList(trainingConfig));
        response.send(result)
    }

    getSentenceTokenList(wordList, sentenceTokenList = [[null]]) {
        if (wordList.length === 0) {
            return sentenceTokenList;
        }
        const newSentenceTokenList = [];
        const currentWordVariations = wordList[0];
        const newWordList = wordList.slice(1);
        sentenceTokenList.forEach((sentenceToken) => {
            currentWordVariations.forEach((word) => {
                const newSentenceToken = sentenceToken[0] === null ? [] : sentenceToken.slice();
                newSentenceToken.push(word);
                newSentenceTokenList.push(newSentenceToken);
            });
        });
        return this.getSentenceTokenList(newWordList, newSentenceTokenList);
    }

    generateTrainingList(trainingConfig) {
        trainingConfig = Object.assign({
            wordLabel: {},
            traitList: [],
        }, trainingConfig);
        const { wordList } = trainingConfig;
        const sentenceTokenList = this.getSentenceTokenList(wordList);
        const trainingList = sentenceTokenList.map((sentenceToken) => {
            return { tokens: sentenceToken}
        });
        return trainingList;
    }

    completeTrainingList(trainingConfig, trainingList) {
        return trainingList.map((training) => {
            // split sentence into tokens
            const { tokens } = training;
            const { defaultLabelList } = trainingConfig;
            const input = tokens.filter((token) => token != "").join(" ");
            // set label for each token based on wordLabel or defaultLabelList
            const entities = [];
            tokens.forEach((token, tokenIndex) => {
                if (token == "") {
                    return null;
                }
                const start = input.indexOf(token);
                const end = start + token.length;
                const value = token;
                const id = tokenIndex;
                // get entity and label for token
                let entity, label;
                // if the token is special (exist in wordLabel) than use entity & label from trainingConfig.wordLabel.
                if (token in trainingConfig.wordLabel) {
                    [entity, label] = trainingConfig.wordLabel[token].split(".");
                    return entities.push({ id, entity, label, start, end, value });
                } 
                // otherwise, if defaultLabelList[tokenIndex] exists, use it instead
                if (defaultLabelList[tokenIndex]) {
                    [entity, label] = trainingConfig.defaultLabelList[tokenIndex].split(".");
                    return entities.push({ id, entity, label, start, end, value });
                }
            });
            // add entities based on trait
            trainingConfig.traitList.forEach((trait) => {
                const start = 0;
                const end = input.length;
                const id = entities.length;
                const [entity, label] = trait.split(".")
                const value = label;
                entities.push({ id, entity, label, start, end, value });
            });
            return { input, entities};
        });
    }
}

module.exports = GeneratorController
