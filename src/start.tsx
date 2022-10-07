import React from 'react';
import {
  Flex,
  Heading,
  Highlight,
  Icon,  
  VStack
} from '@chakra-ui/react';
import { BiRightArrowCircle } from "react-icons/bi"
import { Link } from "react-router-dom";



function Start(){

  return(
    <Flex pos='fixed' w='100%' h='100%'>
      <Flex pos='absolute' bottom='40%' w='100%'>
        <VStack pos='relative' mx='3%'align='right'>
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

        <VStack to='/editor' as={Link}align='left' bg='blue.50'>
          <Heading size='2xl'>
            Get
          </Heading>
          <Heading size='2xl'>
            Start <Icon as={BiRightArrowCircle}/>
          </Heading>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Start;