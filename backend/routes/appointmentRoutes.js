import express from 'express';
import { bookAppointment, getAppointments, updateAppointment } from '../controller/appointmentController.js';

const router = express.Router();

router.post('/book', bookAppointment);
router.get('/', getAppointments);
router.put('/:id', updateAppointment);


export default router