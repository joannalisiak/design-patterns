import { Connection } from "../connections/Connection"
import { Request } from "./Request"

// Concrete Product B2: FTP Request

export class FtpRequest implements Request {
	sendRequest(): void {
		console.log("Sending FTP request")
	}

	processResponse(connection: Connection): void {
		console.log("Processing FTP response using FTP connection")
	}
}
	