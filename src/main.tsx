import React, { useState } from 'react';
import {
    Flex,
    Box,
    Divider
  } from '@chakra-ui/react';
import MarkdownEditor from './components/markdownEditor';
import Result from './components/result';

function Main(){
    return(
        <Flex pos='fixed' mt ='60px'w='100%' h='calc(100vh)-60x'>
            <Box w='35%'>
                <MarkdownEditor/>
            </Box>
            <Divider orientation='vertical'/>
            <Box w='65%' bg='#929292' height={'calc(100vh - 60px)'} overflow={'scroll'}>
                <Result/>
            </Box>
        </Flex>
   );
};

export default Main;