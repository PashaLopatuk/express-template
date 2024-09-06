import 'dotenv/config'
import {IConfig} from "./types";


export default ({
  apiMainPort: parseInt(process.env.API_MAIN_PORT!),
}) satisfies IConfig