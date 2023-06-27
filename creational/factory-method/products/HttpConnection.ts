import { Connection } from "./Connection";

export class HttpConnection implements Connection {
    connect(): void {
        console.log("HTTP connection established")
    }
}