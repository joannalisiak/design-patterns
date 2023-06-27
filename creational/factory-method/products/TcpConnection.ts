import { Connection } from "./Connection";

export class TcpConnection implements Connection {
    connect(): void {
        console.log("TCP connection established")
    }
}