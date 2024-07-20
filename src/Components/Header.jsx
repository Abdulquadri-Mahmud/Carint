import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';

export default function Header() {
  return (
    <Box top={0} position={'sticky'} zIndex={100}>
      <Box>
          <Flex py={3} px={5} justifyContent={'space-between'} gap={{md: 0, base: 1}}
            className='' bg={'gray.800'} color={'white'}>
                <Link to={'tel:+23447594667'}>
                  <Flex alignItems={'center'} gap={1}>
                    <Box bg={'white'} rounded={'full'} p={'7px'}>
                      <FaPhone className='text-sm text-black'/>
                    </Box>
                    <Text display={{md: 'block', base: 'none'}} className='text-sm'>Call: +234 4759 4667</Text>
                  </Flex>
                </Link>
                
                <Link to={'mailto:support@yourmail.com'} >
                  <Flex alignItems={'center'} gap={1}>
                    <Box bg={'white'} rounded={'full'} p={'7px'}>
                      <FaEnvelope className='text-sm text-black'/>
                    </Box>
                    <Text display={{md: 'block', base: 'none'}} className='text-sm'>Email: support@yourmail.com</Text>
                  </Flex>
                </Link>
                
                <Flex alignItems={'center'} gap={1}>
                  <Box bg={'white'} rounded={'full'} p={'7px'}>
                    <FaLocationDot className='text-sm text-black'/>
                  </Box>
                  <Text display={{md: 'block', base: 'none'}} className='text-sm'>Location</Text>
                </Flex>
            </Flex>
        </Box>
        <Box bg={'white'} shadow={'md'}>
            <Flex justifyContent={'space-between'} alignItems={'center'} py={4} px={6}>
                <Box alignItems={'center'} gap={1}>
                  <Text fontWeight={500} fontSize={27} className='flex items-center'>Carint</Text>
                </Box>
                <Flex alignItems={'center'} display={{md: 'block', base: 'none'}} className='menu' position={'relative'}>
                    <Link to={'/'} className='font-normal text-md text-black px-2'>Home</Link>
                    <Link to={'/services'} className='font-normal text-md text-black px-2'>Services</Link>
                    <Link to={'/about'} className='font-normal text-md text-black px-2'>About</Link>
                    <Link to={'/contact'} className='font-normal text-md text-black px-2'>Contact Us</Link>
                    <Link to={'/login'} className='font-normal text-md text-black px-2'>Login</Link>
                </Flex>
                <Box display={{md: 'none', base: 'block'}}>
                  <Sidemenu/>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}
