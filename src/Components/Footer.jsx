import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa'
import { RiInstagramLine } from 'react-icons/ri'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosSend } from 'react-icons/io'

export default function Footer() {
  return (
    <Box px={{md: '8vh', base: '3vh'}} bg={'gray.800'}>
        <Grid maxW={{'2xl': '70%'}} mx={'auto'} templateColumns={{md: 'repeat(4, 1fr)', base: 'repeat(1, 1fr)'}} placeItems={'normal'} placeContent={'center'} gap={5}
        color={'white'} py={'10vh'} className=''>
            <GridItem>
                <Box mb={8}>
                    <Heading fontSize={30} fontWeight={500}>Address</Heading>
                </Box>
                <Stack>
                    <Link to={'/'}>
                        <Flex gap={4}>
                            <Box bg={'white'} rounded={'full'} p={'7px'}>
                                <FaLocationDot className='text-sm text-black'/>
                            </Box>
                            <Text className='text-sm'>Location</Text>
                        </Flex>
                    </Link>

                    <Link to={'tel:+23447594667'}>
                        <Flex alignItems={'center'} gap={4}>
                            <Box bg={'white'} rounded={'full'} p={'7px'}>
                                <FaPhone className='text-sm text-black'/>
                            </Box>
                            <Text className='text-sm'>Call: +234 4759 4667</Text>
                        </Flex>
                    </Link>

                    <Link to={'mailto:support@yourmail.com'} >
                        <Flex alignItems={'center'} gap={4}>
                            <Box bg={'white'} rounded={'full'} p={'7px'}>
                                <FaEnvelope className='text-sm text-black'/>
                            </Box>
                            <Text className='text-sm'>Email: support@yourmail.com</Text>
                        </Flex>
                    </Link>

                    <Flex gap={2} mt={5}>
                        <Flex justifyContent={'center'} alignItems={'center'} boxSize={30} color={'black'} bg={'gray.200'} rounded={3} >
                            <FaFacebookF/>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} boxSize={30} color={'black'} bg={'gray.200'} rounded={3} >
                            <FaTwitter/>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} boxSize={30} color={'black'} bg={'gray.200'} rounded={3} >
                            <RiInstagramLine/>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} boxSize={30} color={'black'} bg={'gray.200'} rounded={3} >
                            <FaLinkedinIn/>
                        </Flex>
                    </Flex>
                </Stack>
            </GridItem>
            <GridItem>
                <Box mb={8}>
                    <Heading fontSize={30} fontWeight={500}>Info</Heading>
                </Box>
                <Box>
                    <Text>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</Text>
                </Box>
            </GridItem>
            <GridItem>
                <Box mb={8}>
                    <Heading fontSize={30} fontWeight={500}>Links</Heading>
                </Box>
                <Stack>
                    <Link to={'/'} className='font-normal text-md px-2'>Home</Link>
                    <Link to={'/about'} className='font-normal text-md px-2'>About</Link>
                    <Link to={'/services'} className='font-normal text-md px-2'>Services</Link>
                    <Link to={'/contact'} className='font-normal text-md px-2'>Contact Us</Link>
                </Stack>
            </GridItem>
            <GridItem>
                <Box mb={8}>
                    <Heading fontSize={30} fontWeight={500}>Subscribe</Heading>
                </Box>
                <form className='flex md:justify-center'>
                    <input type="email" placeholder='Your Email Address' className='p-3 md:w-[75%] w-[280px] border-blue-500 outline-none text-black font-medium'/>
                    <button className='uppercase p-2 w-[60px] bg-blue-500 text-white font-medium'><IoIosSend className='text-3xl'/></button>
                </form>
            </GridItem>
        </Grid>
        <Box pb={10}>
            <Text color={'white'} textAlign={'center'}>&copy; 2024 All Rights Reserved By AdeyemiCodes</Text>
        </Box>
    </Box>
  )
}
