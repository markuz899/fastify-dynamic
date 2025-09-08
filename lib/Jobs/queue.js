const { Queue } = require("bullmq");
const Redis = require("ioredis");
const { queue } = require("./names");

const connection = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT || 6379),
  maxRetriesPerRequest: null,
});

const scrapeQueue = new Queue(queue.scrape, { connection });

module.exports = scrapeQueue;
