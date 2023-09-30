
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Text,
  Center,
  Link,
} from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Header() {
  const navigate = useNavigate()
  const [pfp,setpfp] = useState("https://avatars.dicebear.com/api/male/username.svg")

  return (
    <>
      <Box bg={'red.500'} px={4} color={'white'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link href='/'><Box fontWeight={'bold'}>NoteApp</Box></Link>
          <Link href="/mynotes" ><Box fontWeight={'bold'}>Notes</Box></Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={pfp}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>

                  <Center>
                    
                    <Text color={'red.500'} fontWeight={'bold'}>Menu</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link href='/profile' color={'white'}><MenuItem fontWeight={'bold'} bg={'red.500'}>My profile</MenuItem></Link>
                  <MenuItem color={'white'} onClick={()=>{localStorage.removeItem("userInfo"); navigate('/') }} fontWeight={'bold'} bg={'red.500'}>Logout</MenuItem>
                 
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
