import { Request } from 'express';
import { prisma } from '../../repositories/userRepository';

export class FindAllTechnologiesByUser {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async execute(req: Request) {
        const { id } = req.user;

        const Technologies = await prisma.technology.findMany({
            where: {
                userId: id
            }
        });

        return Technologies;
    }
}
