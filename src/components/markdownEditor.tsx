import React, { useContext } from 'react';
import '../App.css';
import {
  Heading,
  Box,
  Divider
} from '@chakra-ui/react';
import CodeMirror from '@uiw/react-codemirror';

function MarkdownEditor(){

  return(
    <Box>
      <CodeMirror
        value="Hi"
        height='calc(100vh - 132px)'
        options={{
          mode:'markdown',
          lineWrapping:true,
          lineNumbers:false,
          foldGutter:false
        }}
      />
    </Box>

  );
};

export default MarkdownEditor;