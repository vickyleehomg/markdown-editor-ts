import React from 'react';
import {
    Flex,
    Heading
  } from '@chakra-ui/react';
import './header.less';

function Header() {
    return(
        <Flex className='rs-header' pos='fixed' w='100%'  h='48px' p='6px' bg='white'>
            <Heading size='2xl'>Markdown Editor</Heading>
        </Flex>
    );
};

export default Header;