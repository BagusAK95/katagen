'use strict'

const rp = require("request-promise");
const env = use('Env')

class ProjectController {
    async list({ request, response }) {
        const { page, limit } = request.get
        const token = request.header('Authorization')

        const options = {
            method: 'GET',
            uri: env.get('ZAUN_URI') + '/projects?limit=' + limit + '&page=' + page,
            headers: {
                Authorization: token
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

module.exports = ProjectController
