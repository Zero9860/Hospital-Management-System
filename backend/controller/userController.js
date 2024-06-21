import User from "../schemas/userSchema.js"
import bcrypt from 'bcrypt'

const signUp = async (req,res)=>{
    try {
        
        const { name, email, password,role, department } = req.body;
        let depart =null
        console.log(req.body,"dataaa")
        const securedPass = await bcrypt.hash(password, 10)
        const checkUser  = await User.findOne({email: email})
        if ( role == 1){
            depart = department
        }
        if (checkUser){
            throw Error("User already Exists")
        }
        await User.create({
            name: name,
            email: email,
            password: securedPass,
            role: role,
            department: depart
        })
       
            return res.status(200).json({message: "Signup succesfull", success:true});
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: error.message, success:false});
        
    }
}
const login = async(req,res)=>{
    try {
        const {email, password} = req.body
        console.log(req.body)
        const user = await User.findOne({email: email})
        if (!user){
            throw Error("login with correct credentials")
        }
        const checkPass = await bcrypt.compare(password,user.password)
        if(!checkPass){
            throw Error("login with correct credentials")
        }
        console.log(user.name)
        res.status(200).json({success: true,message:"Login SuccessFull", username:user.name, email:user.email, role:user.role, userId: user._id})
    } catch (error) {
        console.log(error)
        res.status(401).json({success: false, error: error.message})
        
    }

}

export {signUp,login}