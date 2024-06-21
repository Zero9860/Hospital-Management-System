import mongoose from 'mongoose';
import Department from '../schemas/departmentSchema.js'
import User from '../schemas/userSchema.js'




const depBack = async (req,res)=>{
  try {
      
      const { name} = req.body;
      console.log(req.file)
      const checkUser  = await Department.findOne({name:name})
      if (checkUser){
          throw Error("Department already Exists")
      }
      await Department.create({
         ...req.body,
         image: req.file.filename
      })
     
          return res.status(200).json({message: "Department submitted succesfull", success:true});
  } catch (error) {
      console.log(error)
      return res.status(500).json({error: error.message, success:false});
      
  }
}
const getDepart =  async(req,res)=>{
  const departs = await Department.find()
  return res.status(200).json({departs});

}

const contact = async (req,res)=>{
  try {        
     
          return res.status(200).json({message: "Submitted succesfull", success:true});
  } catch (error) {
      console.log(error)
      return res.status(500).json({error: error.message, success:false});
      
  }
}
const getOneDep = async (req, res)=>{
  console.log("HERERE")
  const departs = await Department.aggregate([
    {
      $match: {
        _id: new  mongoose.Types.ObjectId(req.params.id) // Cast to ObjectId
      }
    },    {
      $lookup: {
        from:'users',
        localField:'_id',
        foreignField:'department',
        as:'doctors'
      }
    }
  ])
  return res.status(200).send(departs[0]);

}

const doctors = async (req, res)=>{
  try {
    console.log(req.params.did)
    
    const doctors = await User.find({department:  (req.params.did)})
    return res.status(200).send(doctors);
  } catch (error) {
    console.log(error)
    
  }
}


export { contact, depBack, getDepart,getOneDep, doctors}