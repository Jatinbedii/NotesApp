import express from 'express';
import { createNotes, deletenote, getNotes, showonenote, updatenote } from '../../controller/NoteController.mjs';
import protect from '../../middleware/Auth.mjs';
const notesrouter = express.Router()
notesrouter.get('/',protect,getNotes)
notesrouter.post('/create',protect,createNotes)
notesrouter.get('/:id',showonenote)
notesrouter.patch('/:id',protect,updatenote)
notesrouter.delete('/:id',protect,deletenote)



export default notesrouter;