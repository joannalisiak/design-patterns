import { CommunicationFactory } from "./CommunicationFactory"
import { Connection } from "../connections/Connection"
import { FtpConnection } from "../connections/FtpConnection"
import { FtpRequest } from "../requests/FtpRequest"
import { Request } from "../requests/Request"

// Concrete Factory 1: FTP Factory

export class FtpFactory implements CommunicationFactory {
	createConnection(): Connection {
		return new FtpConnection()
	}

	createRequest(): Request {
		return new FtpRequest()
	}
}