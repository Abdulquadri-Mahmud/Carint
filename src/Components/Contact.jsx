import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const sendMessage = setForm
    }
  return (
    <Box bgImg={'/track-bg.jpg'} height={{'2xl':'90vh', md:'100vh', base: '100%'}} my={'15vh'} 
    bgPos={'right'} bgSize={'cover'} bgAttachment={'fixed'} px={{md: '15vh', base: 3}} py={{md: '2vh', base: '5vh'}} bgRepeat={'no-repeat'} mb={'10vh'} className='blendmode2'>
        <Box mt={14}>
            <Heading color={'white'} textAlign={'center'} fontSize={35} fontWeight={500}>Send Us A Message</Heading>
        </Box>
        <Flex justifyContent={'center'} alignItems={'center'} height={'80%'} flexWrap={'wrap'} gap={6} mt={8}>
            <Box width={{md:'65%', base: '100%'}} mx={'auto'} mt={4} p={{md: 0, base: 0}}>
                <form onSubmit={handleSubmit}>
                    <Flex flexWrap={'wrap'} gap={{md: 2, base: 5}}>
                        <input id='name' onChange={handleChange} type="text" className='md:w-[49%] w-[100%] p-3 bg-slate-50 rounded-md font-medium text-black outline-none' placeholder='Full name'/>
                        <input id='email' onChange={handleChange} type="email" className='md:w-[49%] w-[100%] p-3 bg-slate-50 rounded-md font-medium text-black outline-none' placeholder='Example@gmail.com'/>
                    </Flex>
                    <Flex flexWrap={'wrap'} gap={{md: 2, base: 5}} mt={8}>
                        <input id='phone' onChange={handleChange} type="tel" className='md:w-[49%] w-[100%] p-3 bg-slate-50 rounded-md font-medium text-black outline-none' placeholder='Phone'/>
                        <input id='message' onChange={handleChange} type="text" className='md:w-[49%] w-[100%] p-3 bg-slate-50 rounded-md font-medium text-black outline-none' placeholder='subject'/>
                    </Flex>
                    <textarea name="" id="" className='w-full p-4 bg-slate-50 rounded-md font-medium text-black outline-none mt-10 h-[200px]' placeholder='Write Your Message Here...'></textarea>
                    <Flex justifyContent={{md: 'space-between', base: 'center'}} flexWrap={'wrap'} alignItems={'center'} mt={4}>
                        <Button py={'25px'} width={'200px'} bg={'cyan.500'} color={'white'} rounded={3} _hover={{bg: 'blue.400'}}>Send Message</Button>
                        <Text color={'white'}>(We will Recieve Your Message)</Text>
                    </Flex>
                </form>
            </Box>
        </Flex>
    </Box>
  )
}
