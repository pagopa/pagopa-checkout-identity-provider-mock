 
import express from "express";
import cookieParser from "cookie-parser";
import { initMock } from "./handlers/oneIdentity";
import { InitMock } from "./models/InitMock";

 
export const newExpressApp: () => Promise<Express.Application> = async () => {
  const app = express();
  const router = express.Router();

  app.use(express.json());
  app.use(cookieParser());

  app.use((req, res, next) => {
    setTimeout(next, 1000);
  });


  app.get("/helloworld", (req, res) => {
    res.send("Hello World");
  });

  // Add the new APIPOST /initMock endpoint
  app.post("/initMock", (req, res) => {
    try {
      res.json(initMock(req.body as InitMock));
    } catch (error) {
      res.status(500).json({ error: "Forced API failure" });
    }
  });

  return app;
};
