const { Worker } = require("bullmq");
const Redis = require("ioredis");
const path = require("path");
const { queue } = require("./names");
const logger = require(path.resolve("lib/Logger/"));
const Scrape = require(path.resolve("routes/api/scrape/"));

const connection = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT || 6379),
  maxRetriesPerRequest: null,
});

const worker = new Worker(
  queue.scrape,
  async (job) => {
    // if(job.name == 'scrape-task')
    logger.debug(`Worker: eseguo job ${job.id} con payload`, job.data);

    const scraper = new Scrape(job.data.services);

    // Qui usiamo la tua logica di login + fetch
    const results = await scraper.fetchData(job.data.data);

    return { success: true, results };
  },
  { connection }
);

// Eventi di debug
worker.on("completed", (job, returnvalue) => {
  logger.info(`✅ Job ${job.id} completato`, returnvalue);
});

worker.on("failed", (job, err) => {
  logger.error(`❌ Job ${job.id} fallito`, err);
});

logger.info("🚀 Worker avviato e in ascolto...");
