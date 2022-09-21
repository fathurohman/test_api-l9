import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';
import axios from 'axios';
import Api from '../../../config/Api'

const Login = () => {

    const navigate = useNavigate();
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [alert, setalert] = useState(false)
    const [alertdesc, setalertdesc] = useState('')

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const HandleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${Api}login`,{
                email:email,
                password:password
            });

            console.log(response.data)
            setCookie('token', response.data.token)
            navigate('/home')
          } catch (error) {
            console.log(error.response.data)
            setalertdesc(error.response.data.error)
            setalert(true)
            
            setemail('')
            setpassword('')
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
          <Heading fontSize={'4xl'}>Log in</Heading>
        </Stack>
        {alert ? 
             <Alert status='error'>
             <AlertIcon />
             <AlertTitle>{alertdesc}</AlertTitle>
         </Alert>
        : ''}
       
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
           
            <form onSubmit={HandleLogin}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              
              <Button type='submit'
                bg={'orange.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.500',
                }}>
                Log in
              </Button>
            </Stack>
          </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
    </>
  )
}

export default Login