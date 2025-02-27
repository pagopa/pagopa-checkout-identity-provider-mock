import { RequestHandler } from "express";
import { logger } from "../logger";
import { getInMemoryState } from "../utils/inMemoryState";

export const postOidcToken: RequestHandler = async (req, res) => {
    const code  = req.body.code;
    logger.info(`[POST oidc/token] new request for code [${code}]`);
    res.json({
        id_token: getInMemoryState(code),
        token_type: "bearer",
        expires_in: 3600,
    });
};
  