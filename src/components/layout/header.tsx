import React from 'react';
import {
    Box,
    Flex,
    Heading
  } from '@chakra-ui/react';

function Header() {
    return(
        <Flex shadow='lg' pos='fixed' w='100%'  h='60px' zIndex={90} bg='white'>
            <Box position='absolute' bottom='0'>
                <Heading size='xl' pl='6px'>Markdown Editor</Heading>
            </Box>
        </Flex>
    );
};

export default Header;