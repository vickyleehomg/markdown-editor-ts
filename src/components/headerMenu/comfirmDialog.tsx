import React from 'react';
import {
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'

export default function ConfirmDialog(props:any) {
    const cancelRef = React.useRef(null)
  
    return (  
        <AlertDialog
          isOpen={props.isOpen}
          leastDestructiveRef={cancelRef}
          onClose={props.onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader
                fontSize='lg' fontWeight='bold'
                bg='blue.50' borderRadius='5px 5px 0 0'>
                Select Theme
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure to use {props.theme} theme?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={props.onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue' onClick={props.onClose} ml={3}>
                  Confirm
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    )
};
  