import {Request, Response, NextFunction} from "express"
import {verify} from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticate(request: Request,response: Response,next: NextFunction,){

    //Receber o token
    const authtoken = request.headers.authorization;
   
    //Validar se token estra preenchido
    if(!authtoken){
        return response.status(401).end();
    }

   const [,token] = authtoken.split(" ")
    //Validar se token é válido para
   try{
    const {sub} = verify(token, process.env.JWT_TOKEN) as IPayload;
    
    request.user_id = sub;

    return next();

   }catch(err){
    return response.status(401).end();
   }
    

    //Recuperar informações do usuario

}