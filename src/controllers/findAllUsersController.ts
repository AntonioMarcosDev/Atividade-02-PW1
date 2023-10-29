import { Request, Response } from 'express';
import { FindAllUsers } from '../model/useCases/findAllUsers';

export class FindAllUsersController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAllUserCaseUse = new FindAllUsers();

        const users = await findAllUserCaseUse.execute();

        return res.status(200).json(users);
    }
}