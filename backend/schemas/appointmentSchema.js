import mongoose from 'mongoose'

const appointSchema=mongoose.Schema({
    userId:new mongoose.Schema.Types.ObjectId,
    docId:new mongoose.Schema.Types.ObjectId,
    time:String,
    status:Boolean
}

)
export default mongoose.model('Appointment',appointSchema)
