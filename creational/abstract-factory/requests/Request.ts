import { Connection } from "../connections/Connection"

// Abstract Product B: Request

export interface Request {
	sendRequest(): void
	processResponse(connection: Connection): void
}