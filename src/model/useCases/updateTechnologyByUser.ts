import { Request } from 'express';
import { prisma } from '../../repositories/userRepository';

export class UpdateTechnologiesByUser {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async execute(req: Request) {
        const { id } = req.params;
        const { idUser } = req.user;
        const { title, deadline } = req.body;

        const Technology = await prisma.technology.update({
            where: {
                id,
                userId: idUser
            },
            data: {
                title,
                deadline: new Date(deadline)
            }
        });

        return Technology;
    }
}
