import React, {useState, useRef }from 'react';
import {
    Box,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
    VStack,
    Text,
    useToast
} from '@chakra-ui/react';
import svgMap from "../../utils/svgMap";
import './shortcuts.less'

function Shortcuts(props:any){
  const isOpen = props.isOpen
  const onClose = props.onClose

  const toast = useToast({
    position:'bottom',
    title: 'Shortcut copied.',
    status:'success',
    duration: 2000,
    description:'Go and paste on your resume!'
  });

  return(
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
                    console.log('Copy fails.');
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
    </ModalContent>
  </Modal>

  );
};

export default Shortcuts;