import React from 'react';
import {  
  Box,
  Icon,
  Center,
  Heading,
  Highlight,
  VStack
} from '@chakra-ui/react';
import { BiRightArrowCircle } from "react-icons/bi"
import { Link } from "react-router-dom";



function StartMobile(){


  return(
    <Center pos='fixed' w='100%' h='100%'>
      <Box w='100%'>
        <Center>
            <VStack align='left'  >
            <Heading size='3xl' >MARKDOWN</Heading>
            <Heading size='3xl' >RESUME</Heading>
            <Heading size='sm' lineHeight='tall'>
                <Highlight
                    query='content'
                    styles={{ px: '1', rounded: 'full', bg: 'teal.200' }}
                >
                Focus on the content, no more painful layouts.
                </Highlight>
            </Heading>
            </VStack>
        </Center>
        
        <Center to='/editor' as={Link}  bg='blue.50' minH='80px'>
          <Heading size='2xl'>
          Get Start <Icon as={BiRightArrowCircle}/>
          </Heading>
        </Center>
      </Box>

    </Center>
  );
};

export default StartMobile;