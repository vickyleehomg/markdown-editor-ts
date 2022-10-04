import React, { useState, useContext } from 'react';
import {
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Spacer
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import fonts from '../../utils/fontsMap';
import { FontContext } from '../../utils/contexts';

function FontSelector(){
    const { setFont } = useContext(FontContext);
    const [selectFont, setSelectFont] = useState('Arial');
    return(
        <Menu gutter={2}>
            <MenuButton as={Button} minW='230px' variant='solid' borderRadius='0'size='sm' shadow='outline'>
                <Flex>{selectFont}<Spacer/><ChevronDownIcon/></Flex>
            </MenuButton>
            <MenuList w='230px' borderRadius='0' overflow='scroll' >
                {Object.entries(fonts).map(([k,v])=>{
            return(
                <MenuItem
                    onClick={()=>{
                        setSelectFont(v);
                        setFont(k);
                    }}>
                        {v}
                </MenuItem>
            );
          })}
            </MenuList>
        </Menu>
   );
};

export default FontSelector;