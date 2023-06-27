import { CommunicationFactory } from "../factories/CommunicationFactory"
import { FtpFactory } from "../factories/FtpFactory"
import { HttpFactory } from "../factories/HttpFactory"

const createNetworkCommunication = (factory: CommunicationFactory) => {
	const connection = factory.createConnection()
	const request = factory.createRequest()

	connection.connect()
	request.sendRequest()
	request.processResponse(connection)
	connection.sendData("Sample data")
	connection.disconnect()
}

// HTTP case
const httpFactory: CommunicationFactory = new HttpFactory()
createNetworkCommunication(httpFactory)

// FTP case
const ftpFactory: CommunicationFactory = new FtpFactory()
createNetworkCommunication(ftpFactory)