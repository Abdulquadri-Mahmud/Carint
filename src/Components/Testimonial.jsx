import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box bg={'cyan.600'} _hover={{bg: 'cyan.500'}} className={className}
        style={{ ...style, display: "block",
            height: '30px', width:'30px', top: '0vh', borderRadius: '50%',
            padding: '5.3px', right: '-2vh'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Box bg={'cyan.600'} _hover={{bg: 'cyan.500'}} className={className}
        style={{ ...style, display: "block",
            height: '30px', width:'30px', top: '0vh', borderRadius: '50%',padding: '5.3px',
         left: '-2vh', zIndex: '1'}}
        onClick={onClick}/>
    );
  }

export default function Testimonial() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    };
  return (
    <Box maxW={{md: '80%', base: '97%'}} mx={'auto'} mb={'10vh'}>
        <Box>
            <Heading color={'black'}>What Says Our <span className='text-cyan-500'>Client</span></Heading>
        </Box>
        <Box mt={10} p={{md: 0, base: 5}}>
            <Slider {...settings}>
                <Box bg={'gray.200'} p={6}>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Image boxSize={85} rounded={'full'} src='/client-1.png' alt='client'/>
                    </Flex>
                    <Box mt={5} p={{md: 10, bae: 5}}>
                        <Text fontWeight={500} fontSize={18} textAlign={'center'} mb={5}>Adipiscing Magna</Text>
                        <Text textAlign={'center'} fontSize={14} fontWeight={400} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, unde modi, veniam consectetur quasi deserunt qui cupiditate quibusdam cum nemo perspiciatis magnam minima facilis consequatur reprehenderit, fugiat eos possimus ratione</Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} p={6}>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Image boxSize={85} rounded={'full'} src='/client-2.png' alt='client'/>
                    </Flex>
                    <Box mt={5} p={{md: 10, bae: 5}}>
                        <Text fontWeight={500} fontSize={18} textAlign={'center'} mb={5}>Adipiscing Magna</Text>
                        <Text textAlign={'center'} fontSize={14} fontWeight={400} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, unde modi, veniam consectetur quasi deserunt qui cupiditate quibusdam cum nemo perspiciatis magnam minima facilis consequatur reprehenderit, fugiat eos possimus ratione</Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} p={6}>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Image boxSize={85} rounded={'full'} src='/client-1.png' alt='client'/>
                    </Flex>
                    <Box mt={5} p={{md: 10, bae: 5}}>
                        <Text fontWeight={500} fontSize={18} textAlign={'center'} mb={5}>Adipiscing Magna</Text>
                        <Text textAlign={'center'} fontSize={14} fontWeight={400} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, unde modi, veniam consectetur quasi deserunt qui cupiditate quibusdam cum nemo perspiciatis magnam minima facilis consequatur reprehenderit, fugiat eos possimus ratione</Text>
                    </Box>
                </Box>
                <Box bg={'gray.200'} p={6}>
                    <Flex justifyContent={'center'} alignItems={'center'}>
                        <Image boxSize={85} rounded={'full'} src='/client-2.png' alt='client'/>
                    </Flex>
                    <Box mt={5} p={{md: 10, bae: 5}}>
                        <Text fontWeight={500} fontSize={18} textAlign={'center'} mb={5}>Adipiscing Magna</Text>
                        <Text textAlign={'center'} fontSize={14} fontWeight={400} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, unde modi, veniam consectetur quasi deserunt qui cupiditate quibusdam cum nemo perspiciatis magnam minima facilis consequatur reprehenderit, fugiat eos possimus ratione</Text>
                    </Box>
                </Box>
            </Slider>
        </Box>
    </Box>
  )
}
