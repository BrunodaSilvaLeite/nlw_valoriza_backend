import {Request, Response } from "express";
import { ListUserService } from "../service/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response){

        const listUserService = new ListUserService();

        const users = await listUserService.execute();

        return response.json(users)
    }
}

export { ListUserController}