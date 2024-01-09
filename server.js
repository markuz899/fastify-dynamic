"use strict";
require("dotenv").config();
const Server = require("./lib/Server/");

async function startServer() {
  try {
    await Server.init();
    Server.start(process.env.PORT);
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}

startServer();
