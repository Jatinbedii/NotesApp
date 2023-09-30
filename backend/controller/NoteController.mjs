import Note from "../models/Note.mjs";

const getNotes = async(req,res)=>{
    const Notes =await Note.find({user: req.user._id});
    res.json(Notes);
}
const createNotes = async(req,res)=>{
    const {title, content, category} = req.body;
    const note = new Note({user: req.user._id, title,content,category})
    const creatednote = await note.save()
    res.status(201).json({message:creatednote})
}
const showonenote = async(req,res)=>{
   const id = req.params.id ;
   const note =await Note.findById(id)
   res.json(note)
}
const updatenote = async(req,res)=>{
    const id = req.params.id ;
    const {title,content,category} = req.body
   await Note.findByIdAndUpdate(id,{title,content,category})
   res.send({message: 'updated'})
  
}
const deletenote = async(req,res)=>{
    const id = req.params.id ;
    const deleted = await Note.findByIdAndDelete(id)
    if(deleted){
    return   res.json({message: 'deleted'})}else{
       return res.json({message: 'not deleted'})
    }
  
}
export {getNotes, createNotes,showonenote,updatenote,deletenote}