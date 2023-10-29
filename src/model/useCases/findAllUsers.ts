import { prisma } from '../../repositories/userRepository';

export class FindAllUsers {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async execute() {
        const Users = await prisma.user.findMany({
            include: {
                technologies: {
                    select: {
                        title: true,
                        id: true,
                        deadline: true,
                        createdAt: true
                    }
                }
            }
        });

        return Users;
    }
}
