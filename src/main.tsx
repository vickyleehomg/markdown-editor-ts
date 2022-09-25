import React, { useState } from 'react';
import {
    Flex,
    Box,
    Divider
  } from '@chakra-ui/react';

function Main(){
    return(
        <Flex pos='fixed' mt ='96px'w='100%' h='calc(100vh)-96x'>
            <Box w='50%' p={4}>
                Box1
            </Box>
            <Divider orientation='vertical'/>
            <Box w='50%' p={4}>
                Box2
            </Box>
        </Flex>
   );
};

export default Main;