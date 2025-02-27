import { GetPrivateKey } from "./rsa";
import { setInMemoryState } from "./inMemoryState";

const jwt = require("jsonwebtoken");
export const generatesignedAuthJWT = (nonce: string) => {
  const payload = {
    claim: nonce,
  };

  const token = jwt.sign(payload, GetPrivateKey(), { algorithm: "RS256", expiresIn: "1h" });

  // store for later reuse
  setInMemoryState(nonce, token);

  return token;
};