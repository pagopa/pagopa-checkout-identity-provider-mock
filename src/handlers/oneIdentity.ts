import { InitMock } from "../models/InitMock";
import { generatesignedAuthJWT } from "../utils/jwt";



export const initMock = (
    requestBody: InitMock
  ) =>{
    if (requestBody.forceFailure) {
        throw new Error("Forced failure");
    }
    return generatesignedAuthJWT(requestBody.use_nonce);
  };
  