import React, { useContext }from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  Stack
} from '@chakra-ui/react';
import { ThemeContext } from '../../utils/contexts';
import { WarningIcon } from '@chakra-ui/icons';

function ThemeCollection(){

    const selected = 'outline';
    const unSelected = 'md';

    const { theme, setTheme } = useContext(ThemeContext);
    
    return(
        <Stack px='10px'>
            <Flex>
                <WarningIcon color='red' mx='5px'/>
                <Text>Notice! 
                </Text>
            </Flex> 
            <Text>This is a demo of interface.</Text>  
            <Text>The real theme feature is coming soon...</Text>         
            <Stack as={Button} variant='link'
                onClick={()=>{
                    setTheme('warm')}}>
                <Box
                    w='160px'
                    h='200px'
                    bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
                    boxShadow={(theme === 'warm') ? selected : unSelected}
                    />
                <Text color='blackAlpha.500'>Warm</Text>
            </Stack>
            
            <Stack as={Button} variant='link' onClick={()=>{setTheme('cool')}}>
                <Box
                    w='160px'
                    h='200px'
                    bgGradient='linear(blue.100 0%, cyan.100 25%, white 50%, cyan.50 75%)'
                    boxShadow={(theme === 'cool') ? selected : unSelected}
                    />
                <Text color='blackAlpha.500'>Cool</Text>
            </Stack>
            
            <Stack as={Button} variant='link' onClick={()=>{setTheme('forest')}}>
                <Box
                    w='160px'
                    h='200px'
                    bgGradient='linear(teal.100 0%, teal.50 25%, green.50 50%, green.200 75%)'
                    boxShadow={(theme === 'forest') ? selected : unSelected}
                    />
                <Text color='blackAlpha.500'>Forest</Text>
            </Stack>
        </Stack>

    );
};

export default ThemeCollection;