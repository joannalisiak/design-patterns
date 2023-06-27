import { Connection } from "../products/Connection";
import { TcpConnection } from "../products/TcpConnection";
import { ConnectionCreator } from "./Creator";

export class TcpCreator extends ConnectionCreator {
    createConnection(): Connection {
        return new TcpConnection()
    }
}