import {Express} from "express";
import config from "../config/config";


export function listen(app: Express) {
  app.listen(config.apiMainPort, () => {
    console.debug('Server started on port: ', config.apiMainPort);
  })
}