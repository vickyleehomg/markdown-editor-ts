import React from 'react';
import {
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@chakra-ui/react';
import { SketchPicker } from 'react-color';


function ColorPicker(){
    return(
      <Popover >
        <PopoverTrigger>
          <Button size='sm'/>
        </PopoverTrigger>
        <PopoverContent w='220px' mr='30px'>
          <SketchPicker/>
        </PopoverContent>
      </Popover>
  );
};

export default ColorPicker;