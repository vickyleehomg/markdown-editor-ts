import React, { useState } from 'react';
import {   
    Center,
    Flex,
    HStack,
  } from '@chakra-ui/react';

function Toolbar(){
    return(
        <HStack ml='8%' mr='8%' h='50px' pos='sticky' shadow='inner' zIndex='dropdown' justify='flex-end'>
            <Flex mr='10px'>
                  
            </Flex>       
        </HStack>
   );
};

export default Toolbar;