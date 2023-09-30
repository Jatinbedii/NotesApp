import express from 'express';
import notes from '../backend/data/notes.mjs';
import cors from 'cors';
import DBconnnect from './config/DB.mjs';
import Userrouter from './config/routes/userRoute.mjs';
import notesrouter from './config/routes/noteRoutes.mjs';
const app = express()
app.use(express.json())
DBconnnect()
app.use(cors())
app.use('/api/user', Userrouter)
app.use('/api/notes', notesrouter)



app.listen(3000,()=>{console.log('server is running')})
/*app.get('/',(req,res)=>{res.send('hello')})
app.get('/api/notes',(req,res)=>{res.send(notes)})
app.get('/api/notes/:id',(req,res)=>{
    const id = (req.params.id);
    const note = notes.find((n)=>{if(n._id===id){return n}})
    res.send(note)
})*/