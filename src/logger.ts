/**
 * Define a custom Logger using winston
 */

import * as winston from "winston";

export const logger = winston.createLogger({
  level: "debug",
  transports: [new winston.transports.Console()]
});

export const disableConsoleLog: () => void = () => {
  logger.remove(winston.transports.Console);
};
