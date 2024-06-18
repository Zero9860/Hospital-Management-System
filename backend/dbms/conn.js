
import mongoose from  'mongoose'

export const db= ()=>{ mongoose.connect("mongodb://localhost:27017/hospitalRegistraion").then(() => {
    console.log('Connection successful');
}).catch((e) => {
    console.log(e);
})}