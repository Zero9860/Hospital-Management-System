import express from 'express';
import { login, signUp, depBack, contact} from '../controller/userController.js';
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/depback', depBack);
router.post('/contact', contact);




export default router
