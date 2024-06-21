import mongoose from 'mongoose'

const appointSchema=mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    docId: mongoose.Types.ObjectId,
    age:Number,
    time:String,
    gender:String,
    date:String,
    status:{
        type: Boolean,
        default:false
    },
    notes: String
}

)
export default mongoose.model('appointment',appointSchema)
