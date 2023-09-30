import User from "../models/User.mjs";
import bcrypt from 'bcrypt';
import webtoken from "../utils/token.mjs";
const RegisterUser = async (req,res)=>{
    const {name,email,password,pic} = req.body;
    const UserExist = await User.findOne({email})
    if(UserExist){
       return res.status(400).json( {message:"User exists"});

    }
    const hashedpass = bcrypt.hashSync(password, 10)
    const user = await User.create({name,email,password:hashedpass,pic}) 
    if(user){
      const token = webtoken(user._id)
      return  res.status(201).json({_id: user._id, name: user.name, email: user.email,isAdmin: user.isAdmin, pic: user.pic, token : token})
    }else{
       return res.status(400).json({message:'something went wrong'})
    }


}
const LoginUser = async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email})
    if(user){
     const passmatch = bcrypt.compareSync(password, user.password);

     if(passmatch){
      const token = webtoken(user._id)
      return  res.status(201).json({_id: user._id, name: user.name, email: user.email,isAdmin: user.isAdmin, pic: user.pic, token : token})
     }else{return res.status(400).json({message: 'invalid info'})}
    }else{
       return res.status(400).json({message: 'invalid info'})
    }


}

export {RegisterUser, LoginUser}