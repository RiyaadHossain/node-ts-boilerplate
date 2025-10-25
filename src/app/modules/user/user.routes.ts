import auth from '@middlewares/auth.js';
import { UserController } from '@modules/user/user.controllers.js';
import { Router } from 'express';

import { USER_ROLES } from '@/enums/user.js';

const router = Router();
router.get('/', auth(USER_ROLES.ADMIN), UserController.getAllUsers);

export const UserRoutes = router;
