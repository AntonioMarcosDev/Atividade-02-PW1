import { Request, Response } from 'express';
import { RegisterTechnology } from '../model/useCases/registerTechnology';

export class RegisterTechnologyController {
    async handle(req: Request, res: Response): Promise<Response> {
        const registerTechnologyCaseUse = new RegisterTechnology();
        const technology = await registerTechnologyCaseUse.execute(req);

        return res.status(201).json(technology);
    }
}