const axios = require("axios");
const path = require("path");
const logger = require(path.resolve("lib/Logger/"));
const http = require("http");
const https = require("https");

class Scrape {
  constructor(services) {
    this.services = services;
    this.http = axios.create({
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });
  }

  async fetchData(body) {
    try {
      // 1. Login paralleli
      const loginPromises = this.services.map((service) =>
        this.http.post(service.loginUrl, service.credentials)
      );

      const loginResponses = await Promise.allSettled(loginPromises);

      // Estraggo i token per ogni servizio
      const tokens = loginResponses.map((response, index) => {
        if (response.status === "fulfilled") {
          return response.value.data.token;
        } else {
          logger.error(
            `Login fallita per ${this.services[index].name}: ${response.reason}`
          );
          return null;
        }
      });

      // 2. Preparo e invio i payload personalizzati
      const dataPromises = this.services.map((service, index) => {
        if (!tokens[index]) {
          // Se la login è fallita, ritorno errore per questo servizio
          return Promise.resolve({
            error: `Login fallita per ${service.name}`,
          });
        }

        const payload = service.buildPayload(body);

        return this.http
          .post(service.dataUrl, payload, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokens[index]}`,
            },
          })
          .then((res) => res.data);
      });

      // 3. Recupero tutte le risposte
      const dataResponses = await Promise.allSettled(dataPromises);

      // 4. Aggrego i risultati finali
      return this.services.map((service, index) => {
        const response = dataResponses[index];
        return {
          service: service.name,
          success: response.value?.error
            ? false
            : response.status === "fulfilled",
          data: response.status === "fulfilled" ? response.value : null,
          error:
            response.status === "rejected" ? response.reason.message : null,
        };
      });
    } catch (err) {
      logger.error(`Errore generale nel fetch: ${err.message}`);
      throw err;
    }
  }
}

module.exports = Scrape;
