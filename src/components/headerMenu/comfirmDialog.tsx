import React, { useContext }from 'react';
import {
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay
} from '@chakra-ui/react'
import { ThemeContext } from '../../utils/contexts';


export default function ConfirmDialog(props:any) {
  const { setTheme } = useContext(ThemeContext);
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
            Are you sure to use {props.themeSelect} theme?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={props.onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={()=>{
              props.onClose();
              setTheme(props.themeSelect);
              }}
              ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
};
  