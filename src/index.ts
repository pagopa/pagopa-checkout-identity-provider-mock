import * as http from "http";
import * as App from "./app";
import { logger } from "./logger";

App.newExpressApp()
  .then(app => {
    const listeningPorts = [
      process.env.PORT || 8090
    ];

    logger.info("Starting pagopa-checkout-identity-provider-mock...");

    for (const port of listeningPorts) {
      const server = http.createServer(app);
      server.listen(port);
    }
    logger.info("pagopa-checkout-identity-provider-mock started.");
  })
  .catch(error => {
    logger.error(`Error occurred starting server: ${error}`);
  });
