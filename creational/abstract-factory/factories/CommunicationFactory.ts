import { Connection } from "../connections/Connection"
import { Request } from "../requests/Request"

// Abstract Factory

export interface CommunicationFactory {
	createConnection(): Connection
	createRequest(): Request
}
