const fastifyPlugin = require('fastify-plugin')

async function dbConnector(fastify) {
  fastify.register(require('fastify-mongodb'), {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.MONGODB_CONNECTION
        : process.env.LOCAL_MONGODB_CONNECTION,
  })
}

module.exports = fastifyPlugin(dbConnector)
