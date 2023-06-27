import { Connection } from "../connections/Connection"
import { HttpConnection } from "../connections/HttpConnection"
import { HttpRequest } from "../requests/HttpRequest"
import { CommunicationFactory } from "../factories/CommunicationFactory"
import { Request } from "../requests/Request"

// Concrete Factory 2: HTTP Factory

export class HttpFactory implements CommunicationFactory {
	createConnection(): Connection {
		return new HttpConnection()
	}
	createRequest(): Request {
		return new HttpRequest()
	}
}