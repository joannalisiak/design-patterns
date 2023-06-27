import { Connection } from "./Connection"

// Concrete Product A2: FTP Connection

export class FtpConnection implements Connection {
	connect(): void {
		console.log("Established FTP connection")
	}

	sendData(data: string): void {
		console.log(`Sending FTP data: ${data}`)
	}

	disconnect(): void {
		console.log("Closed FTP connection")
	}
}