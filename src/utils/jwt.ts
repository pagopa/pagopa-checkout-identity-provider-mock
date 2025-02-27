import jwt from "jsonwebtoken";
import { GetPrivateKey } from "./rsa";

export const generatesignedAuthJWT = (nonce: string) => {
  const payload = {
    claim: nonce,
  };

  const token = jwt.sign(payload, GetPrivateKey(), { algorithm: "RS256", expiresIn: "1h" });
  return token;
};