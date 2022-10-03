import React, { useState, useContext } from 'react';
import {
    Button,
    Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, PopoverCloseButton,
    Text
} from '@chakra-ui/react';
import { QuestionOutlineIcon, EmailIcon } from '@chakra-ui/icons'


function Problems(){
    return(
        <Popover >
            <PopoverTrigger>
                <Button variant='link' mx='20px'>
                    <Text color='blackAlpha.500'>Problems?</Text>
                    <QuestionOutlineIcon color='blackAlpha.500' ml='6px'/>
                </Button>
            </PopoverTrigger>
            
            <PopoverContent maxW='250px'>
            <PopoverArrow />
            <PopoverCloseButton color='blackAlpha.600' />
                <PopoverBody>
                <Text color='blackAlpha.600'>Email me if you have any problem.</Text>
                <Text color='blackAlpha.600'><EmailIcon/> vickyleehomg@gmail.com</Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>

   );
};

export default Problems;