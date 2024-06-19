import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:Number
}

)
export default mongoose.model('user',userSchema)
