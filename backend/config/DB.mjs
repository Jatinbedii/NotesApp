import mongoose from "mongoose";

const DBconnnect = async() => {
    
      await  mongoose.connect('mongodb+srv://jatinbedi733:jatinbedi733@cluster0.lygbd1z.mongodb.net/').then(()=>{ console.log('DB connected')}).catch((err)=>{console.log('not connected to DB')})
}

export default DBconnnect