import mongoose from 'mongoose'

const departSchema=mongoose.Schema({
    name:String,
    description:String,
    image:String,
}

)
export default mongoose.model('department',departSchema)
