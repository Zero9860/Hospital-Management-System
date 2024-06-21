
import mongoose from  'mongoose'

const url = "mongodb+srv://Suresh_11:sx8QPFwYoNEX5BSg@cluster0.ivodyjl.mongodb.net/hospital "

export const db= ()=>{ 
    mongoose.connect(url).then(() => {
    console.log('Connection successful');
}).catch((e) => {
    console.log(e);
})} 