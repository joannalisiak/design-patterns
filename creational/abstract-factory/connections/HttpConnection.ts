import { Connection } from "./Connection"

// Concrete Product A1: HTTP Connection

export class HttpConnection implements Connection {
	connect(): void {
		console.log("Established HTTP connection")
	}

	sendData(data: string): void {
		console.log(`Sending HTTP data: ${data}`)
	}

	disconnect(): void {
		console.log("Closed HTTP connection")
	}
}