import { Request } from "express";
import { prisma } from "../../repositories/userRepository";

export class RegisterUser {
    async execute(req: Request) {
        const { name, username } = req.body;

        const userExists = await prisma.user.findUnique({
            where: {
                username
            }
        })

        if (userExists !== null) {
            return { message: 'Usuário já existe' }
        }

        const newUser = await prisma.user.create({
            data: {
                username: username,
                name: name
            }
        });

        return newUser;
    }
}
