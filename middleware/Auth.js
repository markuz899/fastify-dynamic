// Auth.js
async function fastifyMiddleware(fastify, options) {
  fastify.addHook("preHandler", async (request, reply) => {
    const auth = request.headers?.authorization;

    if (auth === process.env.BASIC_AUTH_PASSWORD_PORTAL) {
      return;
    } else {
      reply.code(401).send({ error: true, msg: "Access forbidden" });
      return;
    }
  });
}

module.exports = fastifyMiddleware;
