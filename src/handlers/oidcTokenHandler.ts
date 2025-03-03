import { RequestHandler } from "express";
import { logger } from "../logger";
import { getInMemoryState, setInMemoryState } from "../utils/inMemoryState";

export const postOidcToken: RequestHandler = async (req, res) => {
    const code  = req.body.code;
    logger.info(`[POST oidc/token] new request for code [${code}]`);

    const operationResult = getInMemoryState(code);

    // remove this information to avoid idempotency
    setInMemoryState(code, undefined);

    if(operationResult){
        res.json({
            id_token: operationResult,
            token_type: "bearer",
            expires_in: 3600,
        });
    }else{
        res.status(409).json({ error: "Each code can only be used once" });
    }
};
  
