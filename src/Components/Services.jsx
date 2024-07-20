import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Services() {
  return (
    <Box maxW={{md: '85%', base: '97%'}} mx={'auto'} my={'15vh'}>
        <Box>
            <Heading color={'black'}>Our <span className='text-cyan-500'>Services</span></Heading>
            <Text mt={3}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</Text>
        </Box>
        <Flex mt={10} flexWrap={'wrap'} gap={5} justifyContent={{md: 'space-between',base : 'center'}}>
            <Box width={{md: '49%', base: '97%'}} p={4} rounded={5} bg={'gray.200'} pb={8}>
                <Flex gap={3}>
                    <Image boxSize={75} rounded={'full'} src='/s1.png'/>
                    <Flex flexDir={'column'} gap={2}>
                        <Text fontSize={22} fontWeight={500}>AIR TRANSPORT</Text>
                        <Text>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</Text>
                        <Button mt={3} width={'120px'} _hover={{bg: 'cyan.600'}} color={'white'} bg={'cyan.500'}>Read More</Button>
                    </Flex>
                </Flex>
            </Box>
            <Box width={{md: '49%', base: '97%'}} p={4} rounded={5} bg={'gray.200'} pb={8}>
                <Flex gap={3}>
                    <Image boxSize={75} rounded={'full'} src='/s1.png'/>
                    <Flex flexDir={'column'} gap={2}>
                        <Text fontSize={22} fontWeight={500}>AIR TRANSPORT</Text>
                        <Text>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</Text>
                        <Button mt={3} width={'120px'} _hover={{bg: 'cyan.600'}} color={'white'} bg={'cyan.500'}>Read More</Button>
                    </Flex>
                </Flex>
            </Box>
            <Box width={{md: '49%', base: '97%'}} p={4} rounded={5} bg={'gray.200'} pb={8}>
                <Flex gap={3}>
                    <Image boxSize={75} rounded={'full'} src='/s1.png'/>
                    <Flex flexDir={'column'} gap={2}>
                        <Text fontSize={22} fontWeight={500}>AIR TRANSPORT</Text>
                        <Text>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</Text>
                        <Button mt={3} width={'120px'} _hover={{bg: 'cyan.600'}} color={'white'} bg={'cyan.500'}>Read More</Button>
                    </Flex>
                </Flex>
            </Box>
            <Box width={{md: '49%', base: '97%'}} p={4} rounded={5} bg={'gray.200'} pb={8}>
                <Flex gap={3}>
                    <Image boxSize={75} rounded={'full'} src='/s1.png'/>
                    <Flex flexDir={'column'} gap={2}>
                        <Text fontSize={22} fontWeight={500}>AIR TRANSPORT</Text>
                        <Text>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</Text>
                        <Button mt={3} width={'120px'} _hover={{bg: 'cyan.600'}} color={'white'} bg={'cyan.500'}>Read More</Button>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}
