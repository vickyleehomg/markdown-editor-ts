import React from 'react';
import {
    Box,
    Button,
    Flex,
    Heading,
    Spacer,
    useDisclosure
  } from '@chakra-ui/react';
import Shortcuts from '../shortcuts/shortcuts';

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Flex shadow='lg' pos='fixed' w='100%'  h='60px' zIndex={90} bg='white'>
            <Box position='absolute' bottom='1'>
                <Heading size='xl' pl='6px'>Markdown Editor</Heading>
            </Box>
            <Spacer/>
            <Flex>
                <Button variant='ghost' borderRadius='0' h='100%' pt='24px' colorScheme={'blue'}
                    onClick={onOpen}>
                    Icons
                </Button>
                <Button variant='ghost' borderRadius='0' h='100%' pt='24px' colorScheme={'blue'}>
                    Button2
                </Button>
                <Button variant='ghost' borderRadius='0' h='100%' pt='24px' colorScheme={'blue'}>
                    Button3
                </Button>
            </Flex>

            <Shortcuts isOpen={isOpen} onClose={onClose}/>
        </Flex>
    );
};

export default Header;