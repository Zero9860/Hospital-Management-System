import mongoose from 'mongoose';
import Appointment from '../schemas/appointmentSchema.js';

 const bookAppointment = async (req, res) => {
    try {
        console.log(req.body)
        await  Appointment.create({...req.body});
        res.status(201).json({ success: true, message: 'Appointment booked successfully!' });
    } catch (error) {

        res.status(400).json({ success: false, message: 'Error booking appointment', error: error.message });
    }
}
 const getAppointments = async (req, res) => {
    try {
        const {role, user} = req.query
        let match = {userId: user}
        if(role == 1){
            match = {docId: user}
        }
        const appointments = await Appointment.find(match);
        res.status(200).send({ appointments });
    } catch (error) {

        res.status(400).json({ success: false, message: 'Error fetching appointments', error: error.message });
    }
}
const updateAppointment = async(req,res)=>{
    try {
        console.log(req.params)
        await Appointment.findByIdAndUpdate(
            req.params.id,
            { status: true })
            res.status(200).json({ success: true, message: 'Appointment Approved' });
    } catch (error) {
        console.log(error)
        
    }

}

export {bookAppointment, getAppointments,updateAppointment}