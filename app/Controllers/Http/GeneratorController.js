'use strict'

class GeneratorController {
    async generate({ request, response }) {
        const trainingConfig = request.body
        const result = this.generateTrainingList(trainingConfig)
        response.send(result)
    }

    generateTrainingList(trainingConfig) {
        const { wordList } = trainingConfig

        const result = [];
        let strFunc = '';
        let strJoin = [];

        for (let i = 0; i < wordList.length; i++) {
            strJoin.push('word' + i)
        }

        for (let i = wordList.length - 1; i >= 0; i--) {
            if (i == wordList.length - 1) {
                strFunc = 'for (const word' + i + ' of wordList[' + i + ']) {\n result.push({ input: (' + strJoin.join(' + " " + ') + ').trim(), entities:[] }) \n}'
            } else {
                strFunc = 'for (const word' + i + ' of wordList[' + i + ']) {\n' + strFunc + '\n}'
            }
        }

        eval(strFunc)

        return result
    }

    completeTrainingList() {

    }
}

module.exports = GeneratorController
