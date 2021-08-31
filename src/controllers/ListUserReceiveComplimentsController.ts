import {Request, Response } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";

class ListUserReceiverComplimentsController {
    async handle(request: Request, response: Response){
        const {user_id} = request;

        const ListUserReceiverComplimentsController = new ListUserSendComplimentsService();

        const compliments = await ListUserReceiverComplimentsController.execute(user_id);

        return response.json(compliments)
    }
}

export { ListUserReceiverComplimentsController}