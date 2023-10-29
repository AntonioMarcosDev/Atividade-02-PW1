import { Request } from 'express';
import { prisma } from '../../repositories/userRepository';

export class DeleteTechnologyByUser {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async execute(req: Request) {
        const { id } = req.params;
        const { idUser } = req.user;

        const Technology = await prisma.technology.delete({
            where: {
                id,
                userId: idUser
            }
        });

        return Technology;
    }
}
