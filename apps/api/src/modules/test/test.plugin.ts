import type {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyPluginOptions,
} from 'fastify'

const testPlugin: FastifyPluginCallback = (
  fastify: FastifyInstance,
  _options: FastifyPluginOptions,
  next: (err?: Error) => void
) => {
  fastify.addHook('preHandler', (request, reply, next) => {
    if (!request.isAuthenticated()) {
      return reply.status(401).send({ message: 'Not authenticated' })
    }
    next()
  })

  fastify.get('/', async (req, reply) => {
    reply.code(200).header('Content-Type', 'application/json').send(req.session)
  })
  next()
}

export default testPlugin
