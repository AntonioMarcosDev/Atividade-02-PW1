import { Request, Response } from 'express';
import { UpdateTechnologiesByUser } from '../model/useCases/updateTechnologyByUser';

export class UpdateTechnologiesByUserController {
    async handle(req: Request, res: Response): Promise<Response> {

        const updateTechnologiesByUserCaseUse = new UpdateTechnologiesByUser();

        const technology = await updateTechnologiesByUserCaseUse.execute(req);

        return res.status(200).json(technology);
    }
}