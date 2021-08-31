import {Request, Response} from "express";
import { AauthenticationUserSerive } from "../service/AuthenticateUserService";


class AuthenticateUserController{

    async handle(request:Request, response:Response){
        const {email, password} = request.body;

        const authenticateUserService = new AauthenticationUserSerive();

        const token = await authenticateUserService.execute({
            email,
            password,
        });

        return response.json(token);
    }
}

export {AuthenticateUserController}