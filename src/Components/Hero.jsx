import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bg1 from '/bg1.jpg';
import bg2 from '/bg2.jpg';
import bg3 from '/bg3.jpg';

import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}
      style={{ ...style, display: "none", background: "rgb(59, 130, 246)",
          height: '50px', width:'50px', top: '35vh', borderRadius: '50%',
          padding: '15px', right: '2vh'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div className={className}
      style={{ ...style, display: "none", background: "rgb(59, 130, 246)",
          height: '50px', width:'50px', top: '35vh', borderRadius: '50%',padding: '15px',
       left: '2vh', zIndex: '1'}}
      onClick={onClick}/>
  );
}

export default function Hero() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    
  return (
    <Box height={{'2xl':'80vh', xl: '90vh', md: '100vh', base: '100vh'}}>
        <Slider {...settings}>
            <Flex justifyContent={'center'} alignItems={'center'} bgImg={`url(${bg1})`} height={{'2xl':'80vh', xl: '90vh', md: '100vh', base: '100vh'}} bgPos={'right'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Box width={{md: '60%', base: '100%'}} pl={{md: '20vh', base: 2}} pt={40}>
                    <Heading  textAlign={{md: 'left', base: 'start'}} fontWeight={500} fontSize={{'2xl': 60, md: 60, base: 40}} color={'white'}>WE PROVIDE BEST <br /> TRANSPORT SERVICE</Heading>
                    <Text  mt={5} textAlign={{md: 'left', base: 'start'}} fontWeight={500} color={'white'} fontSize={'16'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cupiditate obcaecati vero officiis impedit doloremque, nihil commodi consequatur quasi alias voluptas suscipit esse. Excepturi recusandae assumenda provident tenetur eum laudantium?</Text>
                    <Box mt={5}>
                        <Button width={'160px'} rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'blue.500'} color={'white'} py={6}>Get A Qoute</Button>
                    </Box>
                </Box>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} bgImg={`url(${bg2})`} height={{'2xl':'80vh', xl: '90vh', md: '100vh', base: '100vh'}} bgPos={'right'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Box width={{md: '60%', base: '100%'}} pl={{md: '20vh', base: 2}} pt={40}>
                    <Heading  textAlign={{md: 'left', base: 'start'}} fontWeight={500} fontSize={{'2xl': 60, md: 60, base: 40}} color={'white'}>WE PROVIDE BEST <br /> TRANSPORT SERVICE</Heading>
                    <Text mt={5} textAlign={{md: 'left', base: 'start'}} fontWeight={500} color={'white'} fontSize={'16'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cupiditate obcaecati vero officiis impedit doloremque, nihil commodi consequatur quasi alias voluptas suscipit esse. Excepturi recusandae assumenda provident tenetur eum laudantium?</Text>
                    <Box mt={5}>
                        <Button width={'160px'} rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'blue.500'} color={'white'} py={6}>Get A Qoute</Button>
                    </Box>
                </Box>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} bgImg={`url(${bg3})`} height={{'2xl':'80vh', xl: '90vh', md: '100vh', base: '100vh'}} bgPos={'right'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Box width={{md: '60%', base: '100%'}} pl={{md: '20vh', base: 2}} pt={40}>
                    <Heading  textAlign={{md: 'left', base: 'start'}} fontWeight={500} fontSize={{'2xl': 60, md: 60, base: 40}} color={'white'}>WE PROVIDE BEST <br /> TRANSPORT SERVICE</Heading>
                    <Text mt={5} textAlign={{md: 'left', base: 'start'}} fontWeight={500} color={'white'} fontSize={'16'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cupiditate obcaecati vero officiis impedit doloremque, nihil commodi consequatur quasi alias voluptas suscipit esse. Excepturi recusandae assumenda provident tenetur eum laudantium?</Text>
                    <Box mt={5}>
                        <Button width={'160px'} rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'blue.500'} color={'white'} py={6}>Get A Qoute</Button>
                    </Box>
                </Box>
            </Flex>
        </Slider>
    </Box>
  )
}
