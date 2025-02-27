import { RequestHandler } from "express";
import { logger } from "../logger";
import { getInMemoryState } from "../utils/inMemoryState";

export const postOidcToken: RequestHandler = async (req, res) => {
    const code  = req.body.code;
    logger.info(`[POST oidc/token] new request for code [${code}]`);
    const jwtToken = getInMemoryState(code);
    res.json({
        id_token: jwtToken,
        token_type: code,
        expires_in: 3600,
    });
  };
  