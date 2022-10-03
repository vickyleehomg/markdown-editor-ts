import React from 'react';
import { RiMarkdownLine } from 'react-icons/ri'
import {
    Center,
    Icon,
    Flex,
    Heading,
    Spacer
  } from '@chakra-ui/react';
import Shortcuts from '../shortcuts/shortcuts';
import Problems from '../problems';
import Progress from '../progress';
import Themes from '../themes';

function Header() {
    return(
        <Flex shadow='lg' pos='fixed' w='100%'  h='60px' zIndex={90} bg='whiteAlpha.50'>
            <Center pl='12px'>
                <Icon boxSize='36px' as={RiMarkdownLine} /><Heading size='lg' px='4px'>Markdown Resume</Heading>
            </Center>
            <Flex ml='18px'>
                <Shortcuts/>
                <Themes/>
                <Progress/>
            </Flex>
            <Spacer/>
            <Problems/>
        </Flex>
    );
};

export default Header;