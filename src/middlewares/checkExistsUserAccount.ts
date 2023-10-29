import { type Request, type Response, type NextFunction } from 'express';
import { prisma } from '../repositories/userRepository';

const checkExistsUserAccount = async (
    req: Request,
    res: Response,
    next: NextFunction
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
    const { username } = req.headers as { username: string };

    const userExists = await prisma.user.findUnique({
        where: {
            username
        }
    });

    if (userExists == null) {
        return res.status(400).json({ message: 'Error: user not exists' });
    }

    req.user = userExists;
    next();
};

export default checkExistsUserAccount;
