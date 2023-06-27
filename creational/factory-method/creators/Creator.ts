import { Connection } from "../products/Connection";

export abstract class ConnectionCreator {
   abstract createConnection(): Connection
}