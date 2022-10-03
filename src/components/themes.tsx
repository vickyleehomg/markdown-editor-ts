import React, {useState, useRef }from 'react';
import {
  Button,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
  Text,
  useDisclosure
} from '@chakra-ui/react';

function Themes(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <Button variant='ghost' borderRadius='0' h='100%' colorScheme={'blue'}
                onClick={onOpen}>
                Themes
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        bg={'blue.50'}
                        borderRadius='5px 5px 0 0'>
                        Themes
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p='20px'>
                        <Text>Coming soon...</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Themes;