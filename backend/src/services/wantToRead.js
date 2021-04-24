async function routes(fastify) {
  const collection = fastify.mongo.db.collection('wantToRead')
  const schemas = require('../schemas/wantToRead')

  fastify.register(require('fastify-auth0-verify'), {
    domain: process.env.AUTH0_DOMAIN,
    secret: process.env.AUTH_CLIENT_SECRET,
  })

  fastify.addHook('onRequest', async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })

  fastify.get(
    '/api/want-to-read',
    { schema: schemas.findAll },
    async (request) => {
      return await collection.find({ userId: request.user.sub }).toArray()
    }
  )

  fastify.post(
    '/api/want-to-read/:id',
    { schema: schemas.replaceOne },
    async (request) => {
      return await collection.replaceOne(
        {
          id: request.params.id,
        },
        {
          ...request.body,
          userId: request.user.sub,
        },
        {
          upsert: true,
        }
      )
    }
  )

  fastify.delete(
    '/api/want-to-read/:id',
    { schema: schemas.deleteOne },
    async (request) => {
      await collection.deleteOne({ id: request.params.id })
      return await collection.find({ userId: request.user.sub }).toArray()
    }
  )
}

module.exports = routes
