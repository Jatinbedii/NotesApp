import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import MainScreen from "../components/MainScreen"
import { useNavigate } from "react-router-dom"


function Profile() {
  const navigate = useNavigate();
    const [info,setinfo] = useState({})
    function fetch(){
      const information = localStorage.getItem("userInfo")
    if(!information){
      navigate('/login')
    }
    if(localStorage.getItem("userInfo")){
        let parsed = JSON.parse(localStorage.getItem("userInfo"))
        setinfo(parsed)
        console.log(parsed)
    }
}
    useEffect(()=>{fetch()},[])
  return (
    <div>
    <MainScreen title="Profile" Content={<Box>Name {info.name}<Text>Email {info.email}</Text></Box>} />
    
       
    </div>
  )
}

export default Profile
