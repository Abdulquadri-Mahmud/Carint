import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
  Button,
  Input,
  Flex,
  Image,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Sidemenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();

  return (
    <Box>
        <Button ref={btnRef} bg='transparent' _hover={{bg: 'transparent'}} onClick={onOpen}><IoMdMenu className='text-4xl text-back'/></Button>
        <Drawer isOpen={isOpen} placement='top' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Box alignItems={'center'} gap={1}>
                <Text fontWeight={500} fontSize={27} className='flex items-center'>Carint</Text>
              </Box>
            </DrawerHeader>
            <DrawerBody>
                <Stack my={10}>
                  <Link to={'/'} className='font-normal text-md text-black px-2 py-1'>Home</Link>
                  <Link to={'/services'} className='font-normal text-md text-black px-2 py-1'>Services</Link>
                  <Link to={'/about'} className='font-normal text-md text-black px-2 py-1'>About</Link>
                  <Link to={'/contact'} className='font-normal text-md text-black px-2 py-1'>Contact Us</Link>
                  <Link to={'/login'} className='font-normal text-md text-black px-2 py-1'>Login</Link>
                </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
