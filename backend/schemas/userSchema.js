import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: Number,
    department: {
        type:  mongoose.Schema.Types.ObjectId,
        default: null // Default value set to null
    }
});

export default mongoose.model('User', userSchema);
