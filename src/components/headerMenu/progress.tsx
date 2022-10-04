import React from 'react';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
  Stack,
  useDisclosure
} from '@chakra-ui/react';

function Progress(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <Button variant='ghost' borderRadius='0' h='100%' colorScheme={'blue'}
                onClick={onOpen}>
                Progress
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        bg={'blue.50'}
                        borderRadius='5px 5px 0 0'>
                        Progress
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody px='40px'py='30px'>
                        <CheckboxGroup colorScheme='green' defaultValue={['transform', 'icon', 'font']}>
                            <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                <Checkbox value='transform'>Markdown transforms to HTML</Checkbox>
                                <Checkbox value='icon'>Icon shorcuts supported</Checkbox>
                                <Checkbox value='font'>Font selecting supported</Checkbox>
                                <Checkbox value='theme'>Theme changing supported</Checkbox>
                                <Checkbox value='html'>Better styling  transformed of HTML</Checkbox>
                                <Checkbox value='pdf'>PDF export</Checkbox>
                            </Stack>
                            </CheckboxGroup>
                          

                            
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Progress;
