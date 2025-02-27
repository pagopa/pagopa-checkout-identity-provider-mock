import { RequestHandler } from "express";
import { logger } from "../logger";

export const getOidcKeys: RequestHandler = async (req, res) => {
    logger.info("[GET keys] oicd");
    res.json({
        "keys": [
            {
                "kty": "RSA",
                "kid": "b1a2d3e4-5678-90ab-cdef-1234567890ab",
                "use": "sig",
                "alg": "RS256",
                "n": "AKXidtlP_Z7XhdY1Y0zNyTnt6mo7chtLOro4YGqZrtEghNi6k_0giV98nN24FVDArZsfY2uSIj9qksiTGOcg2QTawyr_kLj3DIdQ6L8kuI4volMZxqkZLl0CeU72s8t58dNs2uqv4FpQv9_RPyYu3v18oUnuXV3oSAAaJj1WjoTxFib9vSlutYdsKiYm-j8xxXhu_UXb10sX8ruGziRdVGcr9fTJyv7jWG0DwLEFKyc0_52Dhs8_y8Ft7Ew94bJELoh5HqSCU_RJgp1IhwbMcuyi1V77u7s_zS9HWI-E8Sst7K4rEc3e2EhJdeZs93QJ8qOlflIYkLlWQiM5KhOnsoU=",
                "e": "AQAB"
            }
        ]
    });
  };
  