import { Request, Response } from 'express';
import { UpdateStudiedStatus } from '../model/useCases/updateStudiedStatus';

export class UpdateStudiedStatusController {
    async handle(req: Request, res: Response): Promise<Response> {

        const updateStudiedStatusCaseUse = new UpdateStudiedStatus();

        const technology = await updateStudiedStatusCaseUse.execute(req);

        return res.status(200).json(technology);
    }
}