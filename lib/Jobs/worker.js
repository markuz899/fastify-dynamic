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

    return { success: true, notify: job.data?.notify, results };
  },
  { connection }
);

// Eventi di debug
worker.on("completed", (job, returnvalue) => {
  console.log(`✅ Job ${job.id} completato`, JSON.stringify(returnvalue));

  // Se ci sono email, invia notifica
  const emailTo = returnvalue?.notify;
  if (emailTo?.length) {
    // Costruisco l’HTML con tutte le quotazioni
    const htmlBody = `
      <h2>Quotazioni Disponibili</h2>
      ${returnvalue.results
        .map((r, i) => {
          if (!r.data || !r.data.result) {
            console.warn(
              `⚠️ Nessun dato per la quotazione #${i + 1} - ${r.service}`
            );
            return `<p><strong>${r.service}</strong>: dati non disponibili</p>`;
          }

          const { business } = r.data.result.informative_data;
          const { taxable, taxes, quotation_annual } =
            r.data.result.section_quotation;

          return `
            <h3>Quotazione #${i + 1} - ${r.service}</h3>
            <p><strong>${business}</strong></p>
            <ul>
              <li>Imponibile: € ${taxable}</li>
              <li>Tasse: € ${taxes}</li>
              <li>Totale annuo: € ${quotation_annual}</li>
            </ul>
          `;
        })
        .join("")}
    `;
    console.log(htmlBody);
  }
});

worker.on("failed", (job, err) => {
  console.log(`❌ Job ${job.id} fallito`, err);
});
