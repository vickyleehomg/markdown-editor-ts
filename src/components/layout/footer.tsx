import React from 'react';
import {
    Flex,
    Heading,
    Highlight
} from '@chakra-ui/react';

function Footer() {
    return(
        <Flex shadow='inner' pos='fixed' w='100%'  h='30px' bottom={0} zIndex={90} bg='blue.50'>
          <Heading size='xs' lineHeight='tall' pos='absolute' bottom='3px' right='5px'>
            <Highlight
              query='content'
              styles={{ px: '1', rounded: 'full', bg: 'teal.200' }}
            >
              Focus on the content, no more painful layouts.
            </Highlight>
          </Heading>
        </Flex>
    );
};

export default Footer;