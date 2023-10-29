import { Request, Response } from 'express';
import { FindAllTechnologiesByUser } from '../model/useCases/findAllTechnologiesByUser';

export class FindAllTechnologiesByUserController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAllTechnologiesByUserCaseUse = new FindAllTechnologiesByUser();

        const technologies = await findAllTechnologiesByUserCaseUse.execute(req);

        return res.status(200).json(technologies);
    }
}