import React, { useState } from 'react';
import {
    Flex,
    Box,
    Divider
  } from '@chakra-ui/react';
import MarkdownEditor from './components/markdownEditor';

function Main(){
    return(
        <Flex pos='fixed' mt ='96px'w='100%' h='calc(100vh)-96x'>
            <Box w='50%'>
                <MarkdownEditor/>
            </Box>
            <Divider orientation='vertical'/>
            <Box w='50%'>
                Box2
            </Box>
        </Flex>
   );
};

export default Main;