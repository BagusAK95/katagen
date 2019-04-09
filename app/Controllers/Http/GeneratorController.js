'use strict'

/*
    type TrainingConfig {
        projectId: string;
        trait: string; // e.g "traitEntity.pos"
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

    getSentences(wordList, sentences = [""]) {
        if (wordList.length === 0) {
            return sentences.map((sentence) => sentence.trim());
        }
        const newSentences = [];
        const currentWordVariations = wordList[0];
        const newWordList = wordList.slice(1);
        sentences.forEach((sentence) => {
            currentWordVariations.forEach((word) => {
                newSentences.push(`${sentence} ${word}`);
            });
        });
        return this.getSentences(newWordList, newSentences);
    }

    generateTrainingList(trainingConfig) {
        trainingConfig = Object.assign({
            wordLabel : {},
        }, trainingConfig);
        const { wordList } = trainingConfig;
        const sentences = this.getSentences(wordList);
        const trainingList = sentences.map((sentence) => {
            return { input: sentence}
        });
        //console.log(trainingList);
        return trainingList;
    }

    completeTrainingList(trainingConfig, trainingList) {
        return trainingList.map((training) => {
            // split sentence into tokens
            const input = training.input;
            const tokens = input.split(" ");
            // set label for each token based on wordLabel or defaultLabelList
            const entities = [];
            tokens.forEach((token, tokenIndex) => {
                console.error({token, tokenIndex});
                const start = input.indexOf(token);
                const end = start + token.length;
                const value = token;
                const id = tokenIndex;
                // get entity and label for token
                let entity, label;
                // if the token is special (exist in wordLabel) than use entity & label from trainingConfig.wordLabel.
                // otherwise, use defaultLabelList instead
                if (token in trainingConfig.wordLabel) {
                    [entity, label] = trainingConfig.wordLabel[token].split(".");
                } else {
                    [entity, label] = trainingConfig.defaultLabelList[tokenIndex].split(".");
                }
                entities.push({ id, entity, label, start, end, value });
            });
            // add entities based on trait
            if (trainingConfig.trait) {
                const start = 0;
                const end = input.length;
                const id = entities.length;
                const [entity, label] = trainingConfig.trait.split(".")
                const value = label;
                entities.push({ id, entity, label, start, end, value });
            };
            return { input, entities};
        });
    }
}

module.exports = GeneratorController
