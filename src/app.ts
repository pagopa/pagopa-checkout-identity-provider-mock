 
import express from "express";
import cookieParser from "cookie-parser";
import { postOidcToken } from "./handlers/oidc-token-handler";
import { get } from "http";
import { getOidcKeys } from "./handlers/oidc-keys-handler";

 
export const newExpressApp: () => Promise<Express.Application> = async () => {
  
    const app = express();

    app.use(express.json());
    app.use(cookieParser());

    app.use((req, res, next) => {
        setTimeout(next, 1000);
    });

    app.post("/oidc/token", postOidcToken);
    app.get("/oidc/keys", getOidcKeys);

    return app;
};
