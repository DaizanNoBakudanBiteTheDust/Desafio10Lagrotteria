import { messagesModel } from "./models/messages.models.js";


export default class Messages {
    constructor() {
        console.log("db trabajando")
    }

    getAll = async () => {

        const chat = await messagesModel.find().lean();
        return chat;
    }

    save = async (message) => {

        const result = await messagesModel.create(message);

        return result;
    }

}