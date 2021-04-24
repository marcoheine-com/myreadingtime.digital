const fastifyPlugin = require('fastify-plugin')

async function dbConnector (fastify) {
  fastify.register(require('fastify-mongodb'), {
    url: process.env.MONGODB_CONNECTION
  })
}

module.exports = fastifyPlugin(dbConnector)