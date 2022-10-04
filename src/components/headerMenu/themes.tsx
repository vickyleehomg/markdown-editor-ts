import React, { useState, useContext }from 'react';
import {
  Box,
  Button,
  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import ConfirmDialog from './comfirmDialog';
import { ThemeContext } from '../../utils/contexts';

function Themes(){
    const selected = 'outline';
    const unSelected = 'md';

    const drawer = useDisclosure();
    const dialog = useDisclosure();

    const { theme } = useContext(ThemeContext);
    const [ themeSelect, setThemeSelect ] = useState(theme);

    return(
        <>
            <Button variant='ghost' borderRadius='0' h='100%' colorScheme={'blue'}
                onClick={drawer.onOpen}>
                Themes
            </Button>
            <Drawer
                isOpen={drawer.isOpen}
                placement='right'
                onClose={()=>{drawer.onClose()
                            setThemeSelect(theme)}}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader
                        bg={'blue.50'}
                        borderRadius='5px 5px 0 0'>
                        Themes
                    </DrawerHeader>
                    <DrawerCloseButton />
                    <DrawerBody p='20px' overflow='scroll'>
                        <Stack>
                            <Stack as={Button} variant='link'
                                onClick={()=>{
                                    setThemeSelect('warm')}}>
                                <Box
                                    w='160px'
                                    h='200px'
                                    bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'
                                    boxShadow={(drawer.isOpen === true) ? 
                                        (themeSelect === 'warm') ? selected : unSelected :
                                        (theme ==='warm') ? selected : unSelected} 
                                    />
                                <Text color='blackAlpha.500'>Warm</Text>
                            </Stack>
                            
                            <Stack as={Button} variant='link' onClick={()=>{setThemeSelect('cool')}}>
                                <Box
                                    w='160px'
                                    h='200px'
                                    bgGradient='linear(blue.100 0%, cyan.100 25%, white 50%, cyan.50 75%)'
                                    boxShadow={(drawer.isOpen === true) ? 
                                        (themeSelect === 'cool') ? selected : unSelected :
                                        (theme ==='cool') ? selected : unSelected}
                                    />
                                <Text color='blackAlpha.500'>Cool</Text>
                            </Stack>
                            
                            <Stack as={Button} variant='link' onClick={()=>{setThemeSelect('forest')}}>
                                <Box
                                    w='160px'
                                    h='200px'
                                    bgGradient='linear(teal.100 0%, teal.50 25%, green.50 50%, green.200 75%)'
                                    boxShadow={(drawer.isOpen === true) ? 
                                        (themeSelect === 'forest') ? selected : unSelected :
                                        (theme ==='forest') ? selected : unSelected}
                                    />
                                <Text color='blackAlpha.500'>Forest</Text>
                            </Stack>
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={drawer.onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={dialog.onOpen}>
                            Select
                        </Button>
                        <ConfirmDialog
                            isOpen={dialog.isOpen}
                            onClose={dialog.onClose}
                            themeSelect={themeSelect}/>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Themes;