import { RequestHandler } from "express";
import { InitMock } from "../models/InitMock";
import { generatesignedAuthJWT } from "../utils/jwt";
import { logger } from "../logger";

export const initMock: RequestHandler = async (req, res) =>{
    logger.info("[POST InitMock]");
    const requestBody: InitMock = req.body;
    if (requestBody.forceFailure) {
        res.status(500).json({ error: "Forced API failure" });
    }
    res.json(generatesignedAuthJWT(requestBody.use_nonce));
}
