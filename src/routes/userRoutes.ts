import { Router } from 'express';

// controller
import { RegisterUserController } from '../controllers/registerUserController';
import { FindAllUsersController } from '../controllers/findAllUsersController';

const router = Router();

const registerUserController = new RegisterUserController();
router.post('/', registerUserController.handle);

const findAllUsersController = new FindAllUsersController();
router.get('/', findAllUsersController.handle);

export default router;
