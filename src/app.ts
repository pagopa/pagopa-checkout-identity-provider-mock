 
import express from "express";
import cookieParser from "cookie-parser";
import { postOidcToken } from "./handlers/oidcTokenHandler";
import { getOidcKeys } from "./handlers/oidcKeysHandler";
import { initMock } from "./handlers/initMockHandler";

export const newExpressApp: () => Promise<Express.Application> = async () => {
  
    const app = express();

    app.use(express.json());
    app.use(cookieParser());

    app.use((req, res, next) => {
        setTimeout(next, 1000);
    });

    app.post("/initMock", initMock);
    app.post("/oidc/token", postOidcToken);
    app.get("/oidc/keys", getOidcKeys);

  return app;
};
