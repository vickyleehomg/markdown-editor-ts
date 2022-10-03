import React, { useContext } from 'react';
import '../App.css';
import {
  Heading,
  Box,
  Divider
} from '@chakra-ui/react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorContext } from '../utils/contexts';
import { INIT_CONTENT } from '../utils/const';

function MarkdownEditor(){

  const { setMarkdownText } = useContext(EditorContext);

  return(
    <Box ml='5%'>
      <CodeMirror
        value={INIT_CONTENT}
        height='calc(100vh - 60px)'
        onChange={(editor:any) => {
          setMarkdownText(editor.getValue());
        }}
        options={{
          theme: "github-light",
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