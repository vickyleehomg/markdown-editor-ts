import React from 'react';
import {
    Flex,
    Heading
  } from '@chakra-ui/react';

function Header() {
    return(
        <Flex pos='fixed' w='100%'  h='96px' p='20px' bg='gray.200' >
            <Heading size='2xl'>Markdown Editor</Heading>
        </Flex>
    );
};

export default Header;