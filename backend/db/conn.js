
import mongoose from  'mongoose'

const url = "mongodb://localhost:27017/hospitalRegistraion "

export const db= ()=>{ 
    mongoose.connect(url).then(() => {
    console.log('Connection successful');
}).catch((e) => {
    console.log(e);
})} 