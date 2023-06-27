import { Connection } from "../products/Connection";
import { HttpConnection } from "../products/HttpConnection";
import { ConnectionCreator } from "./Creator";

export class HttpCreator extends ConnectionCreator {
    createConnection(): Connection {
        return new HttpConnection()
    }
}