import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Contact from '../Components/Contact'

export default function ContactPage() {
  return (
    <Box my={'10vh'} maxW={{md: '80%', base: '97%'}} mx={'auto'} p={{md: 10}}>
      <Box mt={0}>
            <Heading color={'white'} textAlign={'center'} fontSize={35} fontWeight={500}>Send Us A Message</Heading>
        </Box>
        <Flex justifyContent={'center'} alignItems={'center'} height={'80%'} flexWrap={'wrap'} gap={6} mt={8}>
          <Box width={{md:'45%', base: '100%'}} height={'100%'} px={{md: 0, base: 5}}>
            <iframe width={'100%'} style={{height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.467927614716!2d3.524071474081166!3d6.588611922405158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee4740bd527b%3A0xb19235da2044f4d9!2s1%20Akin%20Ogunlewe%20Rd%2C%20Ikorodu%2C%20104102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1721227419085!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
          <Box width={{md:'45%', base: '100%'}} mx={'auto'} mt={4} p={{md: 0, base: 0}}>
              <form>
                  <Flex flexWrap={'wrap'} gap={{md: 2, base: 5}}>
                      <input type="text" className='md:w-[49%] w-[100%] p-3 bg-slate-300 rounded-md font-medium text-black outline-none' placeholder='Full name'/>
                      <input type="email" className='md:w-[49%] w-[100%] p-3 bg-slate-300 rounded-md font-medium text-black outline-none' placeholder='Example@gmail.com'/>
                  </Flex>
                  <Flex flexWrap={'wrap'} gap={{md: 2, base: 5}} mt={8}>
                      <input type="tel" className='md:w-[49%] w-[100%] p-3 bg-slate-300 rounded-md font-medium text-black outline-none' placeholder='Phone'/>
                      <input type="text" className='md:w-[49%] w-[100%] p-3 bg-slate-300 rounded-md font-medium text-black outline-none' placeholder='subject'/>
                  </Flex>
                  <textarea name="" id="" className='w-full p-4 bg-slate-300 rounded-md font-medium text-black outline-none mt-10 h-[200px]' placeholder='Write Your Message Here...'></textarea>
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
