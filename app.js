import Fastify from 'fastify'

const fastify = Fastify({
   logger: true
})
const PORT = process.env.PORT || 3000


fastify
   .get('/', getHome)
   .listen(PORT, '0.0.0.0', (err, address) => {
      if (err) {
         fastify.log.error(err)
         process.exit(1)
      }
      fastify.log.info(`server listening on ${address}`)
   })


function getHome(req, reply) {
   // код тут :)
   reply.send({
      test: 'test - ok'
   })
}
