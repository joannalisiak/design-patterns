import { ConnectionCreator } from "../creators/Creator";
import { HttpCreator } from "../creators/HttpCreator";
import { TcpCreator } from "../creators/TcpCreator";

const createConnection = (creator: ConnectionCreator) => {
    console.log("I am not aware of the protocol but I still know which connection to create")
}

console.log("App launched with HTTP Connection")
createConnection(new HttpCreator())

console.log("App launched with TCP Connection")
createConnection(new TcpCreator())
