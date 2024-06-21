import mongoose from 'mongoose'

const appointSchema=mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    docId: mongoose.Schema.Types.ObjectId,
    time:String,
    date:String,
    status:Boolean
}

)
export default mongoose.model('Appointment',appointSchema)
