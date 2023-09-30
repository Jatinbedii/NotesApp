import jwt from "jsonwebtoken";
import User from '../models/User.mjs'

const protect = async(req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
     token = req.headers.authorization.split(" ")[1]
    console.log(token)
    try {
        
        const decoded = jwt.verify(token,"jatin")
        req.user = await User.findById(decoded.id)
        next();
    } catch (error) {
        console.log("JWT verification error")
       return res.status(401).send('Jwt error')
      
    }
}
if(!token){
    console.log("JWT verification error No token")
       return res.status(401).send('Jwt error')
}
}
export default protect