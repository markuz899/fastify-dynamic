// Auth.js
async function authMiddleware(request, reply) {
  const auth = request.headers?.authorization;
  if (auth === process.env.BASIC_AUTH_PASSWORD) {
    return;
  } else {
    reply.code(401).send({ error: true, msg: "Access forbidden" });
    return;
  }
}

module.exports = authMiddleware;
