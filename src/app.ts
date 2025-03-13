import express from "express";
import cookieParser from "cookie-parser";
import { postOidcToken } from "./handlers/oidcTokenHandler";
import { getOidcKeys } from "./handlers/oidcKeysHandler";
import { initMock } from "./handlers/initMockHandler";
import { liveness, readiness } from "./handlers/healthHandler";

export const newExpressApp: () => Promise<Express.Application> = async () => {
  
    const app = express();

    // Middleware to parse JSON bodies
    app.use(express.json());

    // Middleware to parse URL-encoded form data (required for the OIDC token endpoint)
    app.use(express.urlencoded({ extended: true }));

    // Middleware to parse cookies
    app.use(cookieParser());

    // Simulating a delay of 1 second before processing the request
    app.use((req, res, next) => {
        setTimeout(next, 1000);
    });

    // Route handlers
    app.post("/initMock", initMock);
    app.post("/oidc/token", postOidcToken);
    app.get("/oidc/keys", getOidcKeys);
    app.get("/health/liveness", liveness);
    app.get("/health/readiness", readiness);
    return app;
};


