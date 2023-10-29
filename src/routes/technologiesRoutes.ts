import { Router } from 'express';

// middlewares
import checkExistsUserAccount from '../middlewares/checkExistsUserAccount';

// controllers
import { RegisterTechnologyController } from '../controllers/registerTechnologyController';
import { FindAllTechnologiesByUserController } from '../controllers/findAllTechnologiesByUserController';
import { UpdateTechnologiesByUserController } from '../controllers/updateTechnologiesByUserController';
import { UpdateStudiedStatusController } from '../controllers/updateStudiedStatusController';
import { DeleteTechnologyByUserController } from '../controllers/deleteTechnologyByUserController';

const router = Router();

const registerTechnologyController = new RegisterTechnologyController();
router.post('/', checkExistsUserAccount, registerTechnologyController.handle);

const findAllTechnologiesByUserController = new FindAllTechnologiesByUserController();
router.get('/', checkExistsUserAccount, findAllTechnologiesByUserController.handle);

const updateTechnologiesByUserController = new UpdateTechnologiesByUserController();
router.put('/:id', checkExistsUserAccount, updateTechnologiesByUserController.handle);

const updateStudiedStatusController = new UpdateStudiedStatusController();
router.patch('/:id/studied', checkExistsUserAccount, updateStudiedStatusController.handle);

const deleteTechnologyByUserController = new DeleteTechnologyByUserController();
router.delete('/:id', checkExistsUserAccount, deleteTechnologyByUserController.handle);

export default router;
