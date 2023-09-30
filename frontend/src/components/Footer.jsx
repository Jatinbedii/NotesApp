import { Box, Center, Link,Text } from "@chakra-ui/react"

function Footer() {
  return (
    <Box bg={'red.500'} padding={'3px'}>
      <Center><Text color={"white"}>Support the <Link marginLeft={'5px'} href="https://www.instagram.com/jatinbedii/">Creator</Link></Text></Center>
    </Box>
  )
}

export default Footer