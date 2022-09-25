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
      <Heading size='lg'>Markdown Text</Heading>
        <Divider/>
        <Box>
      <CodeMirror
        value="Hi"
        height='calc(100vh - 132px)'
        basicSetup={{
          lineNumbers:false,
          foldGutter:false
        }}
      />
      </Box>
    </Box>

  );
};

export default MarkdownEditor;