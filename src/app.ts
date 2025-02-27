 
import express from "express";
import cookieParser from "cookie-parser";
import { initMock } from "./handlers/initMockHandler";

 
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

  app.post("/initMock", initMock);

  return app;
};
