import React from 'react';
import {
    Button,
    Center,
    Flex,
    Heading,
    Spacer
  } from '@chakra-ui/react';
import Shortcuts from '../shortcuts/shortcuts';
import Problems from '../problems';

function Header() {
    return(
        <Flex shadow='lg' pos='fixed' w='100%'  h='60px' zIndex={90} bg='whiteAlpha.50'>
            <Center>
                <Heading size='lg' pl='12px'>Markdown Editor</Heading>
            </Center>
            <Flex ml='30px'>
                <Shortcuts/>
                <Button variant='ghost' borderRadius='0' h='100%' colorScheme={'blue'}>
                    Button2
                </Button>
                <Button variant='ghost' borderRadius='0' h='100%' colorScheme={'blue'}>
                    Button3
                </Button>
            </Flex>
            <Spacer/>
            <Problems/>
        </Flex>
    );
};

export default Header;