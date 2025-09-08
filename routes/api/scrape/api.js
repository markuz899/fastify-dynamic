const path = require("path");
const logger = require(path.resolve("lib/Logger/"));
const { services } = require(path.resolve("lib/Services/"));
const Scrape = require("./index");
const scrapeQueue = require(path.resolve("lib/Jobs/queue"));
const { jobs } = require(path.resolve("lib/Jobs/names"));
const { Job } = require("bullmq");

async function routes(fastify, options) {
  // POST LOGIN + FETCH DATA
  fastify.post("/", async (request, reply) => {
    logger.debug(`Parallel scrape services`);

    try {
      const body = request.body;

      // Istanza della classe Scrape
      const scraper = new Scrape(services);

      // Eseguo la logica centralizzata
      const results = await scraper.fetchData(body);

      return reply.send({ success: true, results });
    } catch (err) {
      logger.error(`Error scrape - \n${err}`);
      return reply.code(err.statusCode || 500).send({
        success: false,
        message: "Errore durante la fetch",
        details: err.message || err,
      });
    }
  });

  fastify.post("/job", async (request, reply) => {
    try {
      const job = await scrapeQueue.add(jobs.scrapeTask, request.body, {
        // removeOnComplete: true,
        removeOnFail: false,
        attempts: 3, // retry automatici in caso di errore
      });

      return { jobId: job.id };
    } catch (err) {
      fastify.log.error(err);
      return reply
        .status(500)
        .send({ error: "Errore nella creazione del job" });
    }
  });

  fastify.get("/status/:id", async (request, reply) => {
    try {
      const job = await Job.fromId(scrapeQueue, request.params.id);
      if (!job) return reply.status(404).send({ error: "Job non trovato" });

      const state = await job.getState();
      const result = job.returnvalue;

      return { jobId: job.id, state, result };
    } catch (err) {
      fastify.log.error(err);
      return reply
        .status(500)
        .send({ error: "Errore nel recupero dello stato" });
    }
  });
}

module.exports = routes;
