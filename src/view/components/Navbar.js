import React from 'react'

import { 
    Flex, 
    Spacer,
    Box,
    Heading,
    Button,
    ButtonGroup

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' p='4' m='4'>
        <Box p='2'>
            <Heading size='md'>Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
            <Link to={'/register'}><Button colorScheme='orange'>Sign Up</Button></Link>
            <Link to={'/login'}><Button colorScheme='orange'>Log in</Button></Link>
        </ButtonGroup>
    </Flex>
  )
}

export default Navbar