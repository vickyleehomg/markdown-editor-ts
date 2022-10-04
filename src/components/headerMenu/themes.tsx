import React, { useContext }from 'react';
import {
  Button,
  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import ConfirmDialog from './comfirmDialog';
import ThemeCollection from './themeCollection';
import { ThemeContext } from '../../utils/contexts';

function Themes(){
    const drawer = useDisclosure();
    const dialog = useDisclosure();

    const { theme } = useContext(ThemeContext);

    return(
        <>
            <Button variant='ghost' borderRadius='0' h='100%' colorScheme={'blue'}
                onClick={drawer.onOpen}>
                Themes
            </Button>
            <Drawer
                isOpen={drawer.isOpen}
                placement='right'
                onClose={drawer.onClose}
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
                        <ThemeCollection/>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={drawer.onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={dialog.onOpen}>
                            Select
                        </Button>
                        <ConfirmDialog isOpen={dialog.isOpen} onClose={dialog.onClose} theme={theme}/>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Themes;