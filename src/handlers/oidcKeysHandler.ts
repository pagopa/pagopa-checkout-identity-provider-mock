import { RequestHandler } from "express";
import { logger } from "../logger";
import { getJwkPayload } from "../utils/rsa";

export const getOidcKeys: RequestHandler = async (req, res) => {
    logger.info("[GET keys] oicd");
    res.json(await getJwkPayload());
  };
  