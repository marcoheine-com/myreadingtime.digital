const fastify = require('fastify')({
  logger: true
})

const fastifyEnv = require('fastify-env')

const schema = {
  type: 'object',
  required: [ 'PORT' ],
  properties: {
    PORT: {
      type: 'string',
      default: 3000
    }
  }
}

const options = {
  confKey: 'config',
  schema: schema,
  dotenv: true
}

fastify
    .register(fastifyEnv, options)
    .ready((err) => {
        if (err) console.error(err)

        console.log(fastify.config)
    })

fastify.register(require('./src/db-connector'))
fastify.register(require('./src/services/wantToRead'))

const start = async () => {
  try {
    await fastify.listen(8080)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()




