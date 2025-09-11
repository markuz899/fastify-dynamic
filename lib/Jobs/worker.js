const { Worker } = require("bullmq");
const Redis = require("ioredis");
const path = require("path");
const { queue } = require("./names");
const Scrape = require(path.resolve("routes/api/scrape/"));
const { services } = require(path.resolve("lib/Services/"));

console.log("🚀 Worker avviato e in ascolto...");

const connection = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT || 6379),
  maxRetriesPerRequest: null,
});

const worker = new Worker(
  queue.scrape,
  async (job) => {
    // if(job.name == 'scrape-task')
    console.log(`Worker: eseguo job ${job.id} con payload`, job.data);

    const filteredServices = services.filter((service) =>
      job.data?.services.includes(service.name)
    );

    const scraper = new Scrape(filteredServices);

    // Qui usiamo la tua logica di login + fetch
    const results = await scraper.fetchData(job.data.data);

    return { success: true, results };
  },
  { connection }
);

// Eventi di debug
worker.on("completed", (job, returnvalue) => {
  console.log(`✅ Job ${job.id} completato`, JSON.stringify(returnvalue));
});

worker.on("failed", (job, err) => {
  console.log(`❌ Job ${job.id} fallito`, err);
});
