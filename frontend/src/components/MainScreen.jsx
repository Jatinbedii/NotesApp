import { Heading,Box } from "@chakra-ui/react"

function MainScreen(props) {
  return (
    <div>
      <Heading as='h1' textAlign={'center'} bg={"red.500"} 
       padding={"4px"} fontWeight={'bold'} color={"white"} >{props.title}</Heading>
      <hr/>
      <Box>{props.Content}</Box>
      <hr/>
    </div>
  )
}

export default MainScreen
