import { Button,Box,Link, Center, Flex, Text, Image } from "@chakra-ui/react"
import MainScreen from "../components/MainScreen"
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Mynotes() {
  const navigate = useNavigate();

  const [note,setnotes] = useState([])

  const fetchdata= async() =>{
    const information = localStorage.getItem("userInfo")
    if(!information){
      navigate('/login')
    }
    let parsed = JSON.parse(localStorage.getItem("userInfo"))
    const data= await axios.get("http://localhost:3000/api/notes",{headers: {'authorization': `Bearer ${parsed.token}`}})
    console.log(data)
 setnotes(data.data)}

  useEffect(()=>{ fetchdata()},[])


  const deletehandler=(id)=>{
   navigate(`/note/${id}`)
  }
  return (
    <div>
      <MainScreen title="MY NOTES"
      Content={ <Box bg={'yellow.200'} minH={'80vh'}>
        <Link href="/createnotes"><Center p={'3px'}><Button colorScheme="red">Create</Button></Center></Link><Flex padding={'3px'} gap={'10px'} wrap={'wrap'} justifyContent={'space-evenly'}>
        {note.map((note)=><Box borderRadius={'3px'}  border='2px' borderColor='red.700' minWidth={'250px'} maxWidth={'350px'} key={note._id}><Text color={'black'} textAlign={'center'} fontWeight={'bold'}>{note.title}</Text><Box fontWeight={'medium'} textColor={"black"}>{note.content}</Box><Flex padding={'3px'} justifyContent={'space-around'}><Button onClick={()=>deletehandler(note._id)}><Image maxW={'25px'} src="https://th.bing.com/th/id/OIP.RmYbsdvh7NdvW48q-twvTAHaHa?pid=ImgDet&rs=1"/></Button><Box textColor={"gray.600"}><Button bgColor={'white'} color={'black'}><Image maxW={'25px'} src="https://th.bing.com/th/id/R.624f00f6ae367460d7a4fd1036946d39?rik=PaSqsS7nEQBtDQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_365223.png&ehk=u2wAXnmnMzs7gZF9E8g9Mxg7srcQ%2b40Y%2fRHjEGMCSNE%3d&risl=&pid=ImgRaw&r=0" />: {note.category}</Button></Box></Flex></Box>)}</Flex>
      </Box>}
      
      
      
      
      
      />
    </div>
  )
}

export default Mynotes
