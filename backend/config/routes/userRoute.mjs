import express from 'express';
import  { LoginUser,RegisterUser, } from '../../controller/Usercontroller.mjs';
const Userrouter = express.Router()

Userrouter.post('/register',RegisterUser)
Userrouter.post('/login',LoginUser)

export default Userrouter;