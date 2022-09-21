import { React, useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
    Alert,
    AlertIcon,
    AlertTitle
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link as ReachLink } from 'react-router-dom';
import axios from 'axios';
import Api from '../../../config/Api';

  
const Register = () => {

    const toast = useToast()

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [eadesc, seteadesc] = useState('')

    const [showPassword, setShowPassword] = useState(false);


    const Register = async (e) => {
      e.preventDefault()
      try {
        
        const response = await axios.post(`${Api}register`,{
          name: name,
          email: email,
          password: password
      })

      console.log(response.data.token)
      setname('')
      setemail('')
      setpassword('')
  
      toast({
        position:'top',
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })

      }catch (error) {
        console.log(error.response.data.message)
        seteadesc(error.response.data.message)
    
        toast({
          position:'top',
          title: 'Error.',
          description: eadesc,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })

      }
      
    }
    

    
  return (
    <>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={Register}>
            <FormControl id="firstName" isRequired>
                <FormLabel>Name {name}</FormLabel>
                <Input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setpassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type='submit'
                loadingText="Submitting"
                size="lg"
                bg={'orange.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link as={ReachLink} to='/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    
    </>
  )
}

export default Register