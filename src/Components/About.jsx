import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function About() {
  return (
    <Flex justifyContent={'space-between'} flexWrap={'wrap'} 
    gap={5} maxW={{md: '85%', base: '97%'}} mx={'auto'} my={'15vh'}>
        <Box width={{md: '47%', base: '97%'}}>
            <Heading color={'black'} fontWeight={500}>About <span className='text-cyan-500'>Us</span></Heading>
            <Text mt={3} fontSize={16} fontWeight={400}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
            <Text mt={3} fontSize={16} fontWeight={400}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
            <Box mt={5}>
                <Button width={'160px'} rounded={4} _hover={{bg: 'cyan.600'}} color={'white'} bg={'cyan.500'}>Read More</Button>
            </Box>
        </Box>
        <Flex justifyContent={'center'} alignItems={'center'} width={{md: '47%', base: '97%'}} p={5} position={'relative'}>
            <Image src='/bg2.jpg' maxW={'100%'} alt='about'/>
            <Box width={'100%'} height={'250px'} bg={'gray.800'} position={'absolute'} className='about'></Box>
        </Flex>
    </Flex>
  )
}
