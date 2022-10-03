import React, { useContext } from 'react';
import '../App.css';
import { Box } from '@chakra-ui/react';
import editorContext from '../editorContext';
import markdownParserResume from "../utils/parserPlugins";

function Result(){

  const { markdownText } = useContext(editorContext);

  return(
    <Box ml='8%' mr='8%' mb='80px' bg='whiteAlpha.600' minH='calc(100vh)' shadow='base'>
        <Box
          className='rs-view'
          dangerouslySetInnerHTML={{__html: markdownParserResume.render(markdownText)}}
        />
    </Box>

  );
};

export default Result;