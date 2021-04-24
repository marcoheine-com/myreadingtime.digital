const fastify = require('fastify')({
  logger: true,
})
const path = require('path')
const fastifyEnv = require('fastify-env')
const { getOrigin } = require('./src/utils/getOrigin')
const origin = getOrigin()

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
  },
}

const options = {
  confKey: 'config',
  schema: schema,
  dotenv: true,
}

fastify.register(require('fastify-cors'), {
  origin,
  methods: ['GET', 'POST', 'DELETE'],
})
fastify.register(fastifyEnv, options).ready((err) => {
  if (err) console.error(err)

  console.log(fastify.config)
})

fastify.register(require('./src/db-connector'))
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../frontend', 'build'),
})

fastify.register(require('./src/services/wantToRead'))
fastify.register(require('./src/services/didRead'))

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 8080, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
