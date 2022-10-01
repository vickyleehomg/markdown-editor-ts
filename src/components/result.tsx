import React, { useContext } from 'react';
import '../App.css';
import {
  Heading,
  Box,
  Divider
} from '@chakra-ui/react';
import MarkdownIt from 'markdown-it';
import editorContext from '../editorContext';
import markdownParserResume from "../utils/emoji";

function Result(){

  const { markdownText } = useContext(editorContext);

  return(
    <Box ml='8%' mr='8%' my='30px' bg='white' minH='calc(100vh)'>
        <Box
          className='rs-view'
          dangerouslySetInnerHTML={{__html: markdownParserResume.render(markdownText)}}
        />
    </Box>

  );
};

export default Result;