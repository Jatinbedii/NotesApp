import { Flex,Stack,Box,FormControl,FormLabel,Input, Button,Alert,AlertDescription,AlertIcon, AlertTitle, CloseButton, Text } from "@chakra-ui/react"
import MainScreen from "../components/MainScreen"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const [name,setname] = useState("")
  const [password,setpassword] = useState("")
  const [confirmpassword,setconfirmpassword] = useState("")
  const [email,setemail] = useState("")
  const [pic, setpic] = useState('https://th.bing.com/th/id/OIP.tQYFfqM9HEki3rZPgBodgQHaHa?pid=ImgDet&rs=1');
  const [alreadyexist,setalreadyexist] = useState(false)
  const [loading,setloading] = useState(false)
  const [cpassalert,setcpassalert] = useState(false)
  const [allfeils,setallfields] = useState(false)
 const  submithandler=async()=>{

  try {
    setcpassalert(false)
    setloading(true)
    setallfields(false)
    setalreadyexist(false)


    if(confirmpassword!==password){
      setloading(false)
      setcpassalert(true)
      return console.log('error')
    }
    if(name == "" || password == "" || email=="" || confirmpassword ==""){
      setloading(false)
      return setallfields(true)
    }
  const {data} = await  axios.post('http://localhost:3000/api/user/register', {email,password,name,pic}, {
        headers: {
        'Content-Type': 'application/json'
        }
      }
    )
    localStorage.setItem("userInfo", JSON.stringify(data))

  setname("")
  setpassword("")
  setemail("")
  setconfirmpassword("")
  setloading(false)
  navigate('/mynotes')
  } catch (error) {
    console.log(error)
    setalreadyexist(true)
    setloading(false)
  }
  
  }

  

    return (<>
      <MainScreen title="Registeration" Content={
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={"yellow.200"}>
      <Stack spacing={3} mx={'auto'} maxW={'lg'} py={3} px={3}>
        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input  type="text" value={name}  onChange={(e)=>setname(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  type="email" value={email}  onChange={(e)=>setemail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input  type="password" value={password}  onChange={(e)=>setpassword(e.target.value)}/>
            </FormControl>
             <FormControl id="confirmpassword">
              <FormLabel>CONFIRM Password</FormLabel>
              <Input  type="password" value={confirmpassword}  onChange={(e)=>setconfirmpassword(e.target.value)}/>
            </FormControl>
            {cpassalert? <Alert status='error'>
      <AlertIcon />
      <Box>
        <AlertTitle>Confirm Password</AlertTitle>
        <AlertDescription>
          Password and Confirm password not matching
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={()=>setcpassalert(false)}
      />
    </Alert>:<Box></Box>}
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
               
              </Stack>
              <Button 
                bg={'red.500'}
                color={'white'}
                _hover={{
                  bg: 'red.700',
                }}
                onClick={submithandler}
                isLoading={loading}>
                Register
                
              </Button>
              <Box>
                {
                  allfeils? <Box bg={'red.400'} p={'3px'} color={'white'} textAlign={'center'}>fill all the fields</Box>: <Box></Box>
                }
             {alreadyexist?<Box bg={'red.400'} p={'3px'} color={'white'} textAlign={'center'}>Already exists</Box>:<Box></Box>  }
              </Box>
              <a href="/login" ><Text color="red.400">or want to LOGIN?</Text></a>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>


      }/>
    </>)
  }
  
  export default Register
  