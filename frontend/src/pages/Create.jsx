import { Box, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react"
import MainScreen from "../components/MainScreen"
import { useState } from "react"
import axios from 'axios'

import {useNavigate} from "react-router-dom"
function Create() {

  const navigate = useNavigate();
  const [title,settitle ] = useState("")
  const [category,setcategory ] = useState("")
  const [content,setcontent ] = useState("")
  const submithandler =async()=> {
    let parsed = JSON.parse(localStorage.getItem("userInfo"))
    const data = await axios.post('http://localhost:3000/api/notes/create',{title,category,content},{headers: {'authorization': `Bearer ${parsed.token}`}})
    
    settitle("")
    setcategory("")
    setcontent("")
    if(data){
      navigate("/mynotes")
    }
  }
  return (
    <div>
      <MainScreen title="create new note" Content={<Box w={'400px'}>
        <FormControl>
            <FormLabel>
                Title
            </FormLabel>
            <Input type="text" value={title} onChange={e=>settitle(e.target.value)}/>
        </FormControl>
        <FormControl>
            <FormLabel>
                category
            </FormLabel>
            <Input type="text" value={category} onChange={e=>setcategory(e.target.value)}/>
        </FormControl>
        <FormControl>
            <FormLabel>
                Note
            </FormLabel>
            <Textarea size={"lg"} value={content} onChange={e=>setcontent(e.target.value)}/>
        </FormControl>
        <Button onClick={submithandler}>Submit</Button>
      </Box>}  />
    </div>
  )
}

export default Create
