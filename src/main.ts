import {createApp} from "./api/app";
import {listen} from "./api/listen";


const app = createApp()

listen(app)