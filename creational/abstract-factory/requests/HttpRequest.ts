import { Connection } from "../connections/Connection"
import { Request } from "./Request"

// Concrete Product B1: HTTP Request

export class HttpRequest implements Request {
	sendRequest(): void {
		console.log("Sending HTTP request")
	}
	processResponse(connection: Connection): void {
		console.log("Processing HTTP response using HTTP connection")
	}
}