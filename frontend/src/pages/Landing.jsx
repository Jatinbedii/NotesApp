import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Box, Center, Heading,Text,Image, Flex, Button } from '@chakra-ui/react'
function Landing() {
  const navigate = useNavigate()
  useEffect(()=>{const userinfo = localStorage.getItem("userInfo");
if(userinfo){
  navigate('/mynotes')
}},[navigate])

  return (
    <Box bg={"yellow.200"} minH={'85vh'} padding={'3px'}>
      <Heading as={"h2"} size={"xl"} color={"red.500"}><Center>NOTES APP</Center></Heading>
      <Center mx={'40px'} mt={'20px'} ><Text fontSize={'xl'} color={'tomato'} >Notes is a web app that lets you create, edit, and manage your notes online. You can write anything you want to save and get it back anytime you want Notes is free, simple, and fun to use. Sign up now and start taking notes!</Text></Center>
      <Center>< Image mt="10px" src="https://jooinn.com/images/smiley-39.png" maxW={'200px'}/></Center>
      <Flex justifyContent={'space-around'}>
      <a href="/login"><Button bg={'red.500'} color={'white'}>Login</Button></a>
      <a href="/register"><Button bg={'red.500'} color={'white'}>Register</Button></a>
      </Flex>
    </Box>
  )
}

export default Landing
