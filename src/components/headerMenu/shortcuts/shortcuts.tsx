import React from 'react';
import {
    Box,
    Button,
    Kbd,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter,
    VStack,
    Text,
    useDisclosure,
    useToast    
} from '@chakra-ui/react';
import svgMap from "../../../utils/svgMap";
import './shortcuts.less'

function Shortcuts(props:any){
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast({
    position:'bottom',
    title: 'Shortcut copied.',
    status:'success',
    duration: 2000,
    description:'Go and paste on your resume!'
  });

  return(    
    <>
      <Button variant='ghost' borderRadius='0' h='100%' colorScheme={'blue'}
        onClick={onOpen}>
        Icons
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bg={'blue.50'}
            borderRadius='5px 5px 0 0'>
            Icon Shortcuts
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box >
              {Object.entries(svgMap).map(([k,v])=>{
                return(
                  <VStack w='80px' display='inline-flex'
                    key={k}
                    className="rs-shortcuts-item"
                    onClick={async() =>  {
                      try{
                        await navigator.clipboard.writeText('icon:'+k);
                        toast();
                      } catch(e){
                        console.log('Fail to copy!');
                      }}}>
                    <Box className="rs-shortcuts-item__icon"
                      dangerouslySetInnerHTML={{
                        __html: v,
                      }}>
                    </Box>
                    <Text fontSize='xs' >{k}</Text>
                  </VStack>
                );
              })}
            </Box>
          </ModalBody>
          <ModalFooter>
            <span>
              Click and then Press <Kbd>ctrl</Kbd> / <Kbd>⌘command</Kbd> + <Kbd>V</Kbd> on Editor
            </span>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  );
};

export default Shortcuts;
