import Express from "express";
import {initRouters} from "./routers/root";


export function createApp(): Express.Express {
  const app = Express.call({})

  initRouters(app)

  return app
}