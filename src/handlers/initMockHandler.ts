import { RequestHandler } from "express";
import { InitMock } from "../models/InitMock";
import { logger } from "../logger";
import { signJwtToken } from "../utils/rsa";
import { setInMemoryState } from "../utils/inMemoryState";

const generateAuthCode = (length = 16) =>
    Array.from({ length }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 52))).join('');
  
export const initMock: RequestHandler = async (req, res) =>{
    logger.info("[POST InitMock]");
    const requestBody: InitMock = req.body;
    if (requestBody.forceFailure) {
        res.status(500).json({ error: "Forced API failure" });
    }

    // get signed jwt
    let jwt = await signJwtToken(requestBody.use_nonce);

    // get random auth code
    let randomAuthCode = generateAuthCode();

    // memorize result for later use
    setInMemoryState(randomAuthCode, jwt);
    
    res.json({"authCode": randomAuthCode});
}
