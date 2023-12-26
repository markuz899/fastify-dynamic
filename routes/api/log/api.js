const path = require("path");
const Logger = require(path.resolve("lib/Logger/"));
const Log = require("./index");

let logger = new Logger(process.env.LOG_ACTIVE, process.env.LOG_LEVEL);

async function routes(fastify, options) {
  // GET LOGS
  fastify.get("/", async (request, reply) => {
    logger.debug("logs list api route");
    try {
      let log = await Log.list(request.query);
      return log;
    } catch (err) {
      logger.error(`Error log -  \n${err}`);
      reply.code(err.statusCode).send(err);
    }
  });

  // CREATE LOG
  fastify.post("/", async (request, reply) => {
    logger.debug("log create api route");
    try {
      const { body } = request;
      let log = await Log.create(body);
      return log;
    } catch (err) {
      logger.error(`Error log -  \n${err}`);
      reply.code(err.statusCode).send(err);
    }
  });

  // GET ONE LOG
  fastify.get("/:id", async (request, reply) => {
    try {
      const { id } = request.params;
      let log = await Log.getOne(id);
      return log;
    } catch (err) {
      logger.error(`Error log -  \n${err}`);
      reply.code(err.statusCode).send(err);
    }
  });

  // EDIT ONE LOG
  fastify.put("/:id", async (request, reply) => {
    try {
      const { id } = request.params;
      const { body } = request;
      let log = await Log.updateOne(id, body);
      return log;
    } catch (err) {
      logger.error(`Error log -  \n${err}`);
      reply.code(err.statusCode).send(err);
    }
  });

  // REMOVE ONE LOG
  fastify.delete("/:id", async (request, reply) => {
    try {
      const { id } = request.params;
      let log = await Log.remove(id);
      return log;
    } catch (err) {
      logger.error(`Error log -  \n${err}`);
      reply.code(err.statusCode).send(err);
    }
  });
}

module.exports = routes;
