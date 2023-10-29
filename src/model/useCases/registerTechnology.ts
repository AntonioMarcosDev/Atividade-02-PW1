import { Request } from 'express';
import { prisma } from '../../repositories/userRepository';

export class RegisterTechnology {
    async execute(req: Request){
        const { id } = req.user;
        const { title, deadline } = req.body;

        const newTechnology = await prisma.technology.create({
            data: {
                title: title,
                studied: false,
                deadline: new Date(deadline),
                User: {
                    connect: { id }
                }
            }
        });

        return newTechnology;
    }
}
