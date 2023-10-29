import { Request, Response } from 'express';
import { DeleteTechnologyByUser } from '../model/useCases/deleteTechnologyByUser';

export class DeleteTechnologyByUserController {
    async handle(req: Request, res: Response): Promise<Response> {

        const deleteTechnologiesByUserCaseUse = new DeleteTechnologyByUser();

        const technology = await deleteTechnologiesByUserCaseUse.execute(req);

        return res.status(200).json(technology);
    }
}