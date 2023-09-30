import jwt from 'jsonwebtoken';
const webtoken =(id)=>{
  return jwt.sign({id},"jatin",{expiresIn: '30m'})
}

export default webtoken;