import React from 'react';
import { RiMarkdownLine } from 'react-icons/ri'
import {
    Center,
    Icon,
    Flex,
    Heading,
    Spacer
  } from '@chakra-ui/react';
import Shortcuts from '../headerMenu/shortcuts/shortcuts';
import Problems from '../headerMenu/problems';
import Progress from '../headerMenu/progress';
import Themes from '../headerMenu/themes';
import { Link } from "react-router-dom";

function Header() {
    return(
        <Flex shadow='lg' pos='fixed' w='100%'  h='60px' zIndex={90} bg='whiteAlpha.50'>
            <Center pl='12px' to='/' as={Link}>
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