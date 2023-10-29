import type user from '../repositories/userDTO';

declare global {
    namespace Express {
        export interface Request {
            user: user;
        }
    }
}
