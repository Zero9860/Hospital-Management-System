import mongoose from 'mongoose'

const commentSchema=mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    description:String
}

)
export default mongoose.model('comment',commentSchema)
