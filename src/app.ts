/* eslint-disable sort-keys */
import * as express from "express";
import * as cookieParser from "cookie-parser";

// eslint-disable-next-line max-lines-per-function
export const newExpressApp: () => Promise<Express.Application> = async () => {
  const app = express();
  const router = express.Router();

  app.use(express.json());
  app.use(cookieParser());

  app.use((req, res, next) => {
    setTimeout(next, 1000);
  });


  app.get("/test", ()=>{
    return {}
  });

  return app;
};
