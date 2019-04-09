'use strict'

const rp = require("request-promise");
const env = use('Env');

class UserController {
    async login({ request, response }) {
        const { username, password } = request.body

        const options = {
            method: 'POST',
            uri: env.get('ZAUN_URI') + '/login',
            body: {
                username, password
            },
            json: true
        };

        await rp(options)
            .then(function (parsedBody) {
                response.send(parsedBody)
            })
            .catch(function (err) {
                response.send(err)
            });
    }
}

module.exports = UserController
