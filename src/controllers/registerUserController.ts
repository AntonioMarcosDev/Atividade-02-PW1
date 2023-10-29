import { Request, Response } from 'express';
import { RegisterUser } from '../model/useCases/registerUser';

export class RegisterUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const registerUserCaseUse = new RegisterUser();
        const result = await registerUserCaseUse.execute(req);

        return res.status(200).json(result);
    }
}