import { Request } from 'express';
import { prisma } from '../../repositories/userRepository';

export class UpdateStudiedStatus {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async execute(req: Request) {
        const { id } = req.params;
        const { idUser } = req.user;

        const Technology = await prisma.technology.update({
            where: {
                id,
                userId: idUser
            },
            data: {
                studied: true
            }
        });

        return Technology;
    }
}
