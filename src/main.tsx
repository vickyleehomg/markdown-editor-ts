import React from 'react';
import {
    Badge,    
    Box,    
    Divider,
    Flex,
} from '@chakra-ui/react';
import MarkdownEditor from './components/markdownEditor';
import Result from './components/result';
import Toolbar from './components/layout/toolbar';
import { EditIcon, ViewIcon} from '@chakra-ui/icons';

function Main(){
    return(
        <Flex pos='fixed' mt ='60px'w='100%' h='calc(100vh)-60x'>                        
            <Box w='35%' pos='relative'>
                <Box zIndex='1' pos='absolute' top='5px'right='12px'>
                    <Badge variant='outline' colorScheme='pink'>
                        <EditIcon/> EDIT
                    </Badge>
                </Box>          
                <MarkdownEditor/>
            </Box>                             
            <Divider orientation='vertical'/>
            <Box w='65%' bg='blackAlpha.600' pos='relative'>
                <Box zIndex='1' pos='absolute' top='5px'left='8px'>
                    <Badge variant='solid' colorScheme='green'>
                        <ViewIcon/> VIEW
                    </Badge>
                </Box> 
                <Toolbar/>
                <Box  h='calc(100vh - 60px)' overflow='scroll'>                  
                    <Result/>
                </Box>            
            </Box>
        </Flex>
   );
};

export default Main;