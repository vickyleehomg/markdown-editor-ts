import React, { useState } from 'react';
import {   
    Center,
    Flex,
    HStack,
  } from '@chakra-ui/react';
import FontSelector from '../fontSelector';

function Toolbar(){
    return(
        <HStack ml='8%' mr='8%' h='50px' pos='sticky' shadow='inner' zIndex='dropdown' justify='flex-end'>
            <Flex mr='10px'>
                <Center mx='10px' ><FontSelector/></Center>                  
            </Flex>       
        </HStack>
   );
};

export default Toolbar;