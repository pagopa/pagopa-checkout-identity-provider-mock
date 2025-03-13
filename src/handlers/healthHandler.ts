import { RequestHandler } from "express";

export const liveness: RequestHandler = async (_, res) => {
    res.status(200).send("Liveness check OK");
};
  
export const readiness: RequestHandler = async (_, res) => {
    res.status(200).send("Readiness check OK");
};
