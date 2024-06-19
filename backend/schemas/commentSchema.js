import mongoose from 'mongoose'

const commentSchema=mongoose.Schema({
    userId:new mongoose.Schema.Types.ObjectId,
    description:String
}

)
export default mongoose.model('comment',commentSchema)
