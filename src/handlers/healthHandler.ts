import { RequestHandler } from "express";

export const liveness: RequestHandler = (_, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({"Liveness": "OK"});
};
  
export const readiness: RequestHandler = (_, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({"Readiness": "OK"});
};

