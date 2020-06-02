import Fastify from 'fastify'

const fastify = Fastify({ logger: true })
const PORT = process.env.PORT || 3000


fastify
  .get('/', (req, reply) => reply.send({ test: 'ok' }))
  .listen(PORT, (err, address) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })
