import startServer from "./src"
import { connectMongoose } from "./src/config/mongoConfig"

connectMongoose()
startServer()