import { useEffect, useState } from "react"
import MainScreen from "../components/MainScreen"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { Box, Button, Center, Flex, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"


function Notepage() {
  const navigate = useNavigate()
  const [note,setnote]= useState({})
  const [updatedtitle, setupdatedTitle]= useState("")
  const [updatedcontent, setupdatedcontent]= useState("")
  const [updatevisible,setUpdatevisible]= useState(false)

  const {id} =useParams()
  const deleting= async()=>{
    let parsed = JSON.parse(localStorage.getItem("userInfo"))
    try {
      await axios.delete(`http://localhost:3000/api/notes/${id}`,{headers: {'authorization': `Bearer ${parsed.token}`}})
    navigate('/mynotes')
    } catch (error) {
      console.log('error')
    }
    

  }
  const fetchdata=async()=>{
     await axios.get(`http://localhost:3000/api/notes/${id}`).then(res=>{setnote(res.data)}).catch((err)=>{console.log(err)})
    
  }

  const updatehandler=async()=>{
    let parsed = JSON.parse(localStorage.getItem("userInfo"))
    try {
     await axios.patch(`http://localhost:3000/api/notes/${id}`,{title: updatedtitle, content:updatedcontent, category: note.category},{headers: {'authorization': `Bearer ${parsed.token}`}})

     navigate('/mynotes')
    } catch (error) {
      return console.log(error)
    }
  }
   useEffect(()=>{fetchdata()},[])
   
  console.log(note.title)
  return (<div>
    <MainScreen title="NOTE SETTINGS" Content={<Box bg={'yellow.200'} minH={'80vh'}><Text fontSize={'3xl'} fontWeight={'semibold'} textAlign={"center"}><Text fontSize={'3xl'} color={'red.600'} as={'span'}>TITLE :</Text>  {note.title}</Text><Text fontWeight={'medium'} fontSize={'2xl'}><Text color={'red.500'} fontSize={'3xl'} fontWeight={'semibold'}>NOTE :</Text>{note.content}</Text><Text color={'red.500'}   fontSize={"2xl"} fontWeight={"semibold"} textAlign={"center"}>CATEGORY : {note.category}</Text><Flex justifyContent={"space-evenly"}><Button textColor={'white'} bgColor={'red.500'} onClick={deleting}>Delete</Button><Button textColor={'white'} bgColor={'red.500'} onClick={()=>setUpdatevisible(!updatevisible)}>Edit</Button></Flex><hr/>{updatevisible?<Box><Text textAlign={'center'} color={'red.500'} fontSize={"3xl"} fontWeight={"bold"} mt={'5'}>Edit the note!</Text><FormLabel><Input value={updatedtitle} bgColor={'white'} onChange={(e)=>setupdatedTitle(e.target.value)} type="text" placeholder={note.title}/></FormLabel><FormLabel><Textarea bgColor={'white'} value={updatedcontent} onChange={(e)=>setupdatedcontent(e.target.value)} placeholder={note.content}/></FormLabel><Center><Button bgColor={'red.500'} textColor={'white'} onClick={updatehandler}>UPDATE</Button></Center></Box>:<Box></Box>}</Box>}/>
    </div>)
  
}


export default Notepage
