import Appointment from '../schemas/appointmentSchema';

export const bookAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json({ success: true, message: 'Appointment booked successfully!' });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Error booking appointment', error: error.message });
    }
}
export const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json({ success: true, data: appointments });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Error fetching appointments', error: error.message });
    }
}

export{bookAppointment, getAppointments}