import Department from '../schemas/departmentSchema.js'



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

export { contact, depBack, getDepart}