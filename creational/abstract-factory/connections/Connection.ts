// Abstract Product A: Connection

export interface Connection {
	connect(): void
	sendData(data: string): void
	disconnect(): void
}