import {Express, Router} from "express";

export function initRouters(app: Express) {
  const rootRouter = Router();

  app.use('/', rootRouter)
}