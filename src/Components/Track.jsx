import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Track() {
  return (
    <Flex justifyContent={'start'} alignItems={'center'} bgImg={'/track-bg.jpg'} height={{md:'60vh', base: '100%'}} 
    bgPos={'right'} bgSize={'cover'} px={{md: '15vh', base: 3}} py={{md: '0vh', base: '5vh'}} bgRepeat={'no-repeat'} mb={'10vh'} className='blendmode2'>
        <Box width={{md: '60%', base: '100%'}} >
            <Heading  textAlign={{md: 'left', base: 'start'}} fontWeight={500} fontSize={{md: 50, base: 40}} color={'white'}>Track Your Shipment</Heading>
            <Text  mt={5} textAlign={{md: 'left', base: 'start'}} fontWeight={500} color={'white'} fontSize={'16'}>Iste reprehenderit maiores facilis saepe cumque molestias. Labore iusto excepturi, laborum aliquid pariatur veritatis autem, mollitia sint nesciunt hic error porro. Deserunt officia unde repellat beatae ipsum sed. Aperiam tempora consectetur voluptas magnam maxime asperiores quas similique repudiandae, veritatis reiciendis harum fuga atque.</Text>
            <form className='mt-4'>
                <Flex>
                    <input type="email" placeholder='Your Email Address' className='p-2 md:w-[300px] w-[280px] border-blue-500 outline-none text-black font-medium'/>
                    <button className='uppercase p-2 md:w-[170px] bg-cyan-600 text-white'>TRACK</button>
                </Flex>
            </form>
            <Box mt={5}>
                <Button width={'160px'} rounded={3} _hover={{bg: 'cyan.500', color:'white'}} bg={'cyan.600'} color={'white'} py={4}>Get A Qoute</Button>
            </Box>
        </Box>
    </Flex>
  )
}
