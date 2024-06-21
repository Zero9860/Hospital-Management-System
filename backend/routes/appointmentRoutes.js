import express from 'express';
import { bookAppointment, getAppointments } from '../controller/appointmentController';

const router = express.Router();

router.post('/book', bookAppointment);
router.get('/', getAppointments);

export default router