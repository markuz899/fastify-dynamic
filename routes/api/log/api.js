const path = require("path");
const logger = require(path.resolve("lib/Logger/"));
const Log = require("./index");
const { sendApiError, API_ERROR } = require("../../../lib/Common/handler");

async function routes(fastify, options) {
  // GET LOGS
  fastify.get("/", async (request, reply) => {
    logger.debug("logs list api route");
    try {
      let log = await Log.list(request.query);
      return log;
    } catch (err) {
      logger.error(`Error log -  \n${err}`);
      reply.code(500).send({ error: "Unable to fetch logs" });
    }
  });

  // CREATE LOG
  fastify.post("/", async (request, reply) => {
    logger.debug("log create api route");
    try {
      const { body } = request;
      let exist = await Log.getQuery({ event: body.event });
      if (exist)
        return sendApiError(reply, { code: API_ERROR.DOCUMENT_ALREDY_EXIST });
      let log = await Log.create(body);
      return log;
    } catch (err) {
      logger.error(`Error log -  \n${err}`);
      reply.code(err.statusCode || 500).send(err);
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
      reply.code(500).send({ error: "Unable to fetch log" });
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
      reply.code(500).send({ error: "Unable to update log" });
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
      reply.code(500).send({ error: "Unable to delete log" });
    }
  });
}

module.exports = routes;
