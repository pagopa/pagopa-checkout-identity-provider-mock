import { RequestHandler } from "express";
import { logger } from "../logger";

export const postOidcToken: RequestHandler = async (req, res) => {
    logger.info("[POST oidc/token] new request for code [%s]", req.body.code);
    const { code } = req.body.code;
    res.json({
        id_token: "example-id-token",
        token_type: code,
        expires_in: 3600,
    });
  };
  