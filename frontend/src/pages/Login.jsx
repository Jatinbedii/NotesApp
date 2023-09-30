import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  useColorModeValue,Alert,AlertDescription,AlertTitle,AlertIcon,CloseButton
} from '@chakra-ui/react';
import MainScreen from '../components/MainScreen';
import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 const Login =()=> {
  const navigate = useNavigate()
  const [email,setemail]= useState("")
  const [password,setpassword]= useState("")
  const [loading,setloading]= useState(false)
  const [showincorrect,setshowincorrect]= useState(false)
  const [allfields,setallfields]= useState(false)

  const submission=async() => {
    
    setallfields(false)
    if(email==""|| password==""){
      return setallfields(true)
    }
    try {
      setloading(true); 
      

     const {data} = await  axios.post('http://localhost:3000/api/user/login', {email,password}, {
        headers: {
        'Content-Type': 'application/json'
        }
      }
    )
    console.log(data)
    localStorage.setItem("userInfo", JSON.stringify(data))

    setloading(false);
      setshowincorrect(false)
      navigate('/mynotes')
    } catch (error) {
      setloading(false);
      setshowincorrect(true)
      console.log('incorrect info');
      
    }


    setemail("")
    setpassword("")
  }

  
  return (


    
    <MainScreen title="LOGIN" Content={<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={"yellow.200"}>
      <Stack spacing={3} mx={'auto'} maxW={'lg'} py={3} px={3}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} type="email" onChange={(e)=>setemail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} type="password" onChange={(e)=>setpassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
               
                <Link href='/register' color={'red.400'}>Register?</Link>
              </Stack>
              <Button onClick={submission}
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'red.700',
                }}
                
                isLoading={loading}>
                Log in
              </Button>
              <Box>
             {showincorrect? <Alert status='error'>
      <AlertIcon />
      <Box>
        <AlertTitle>Incorrect Info</AlertTitle>
        <AlertDescription>
          Change email or password and try again
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={()=>setshowincorrect(false)}
      />
    </Alert>:<Box></Box>}
    {allfields?<Box bg={'red.400'} p={'3px'} color={'white'} textAlign={'center'}>Fill all the fields</Box>:<Box></Box>}
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>}  />
  );
}

export default Login