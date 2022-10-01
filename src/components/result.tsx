import React, { useContext } from 'react';
import '../App.css';
import {
  Heading,
  Box,
  Divider
} from '@chakra-ui/react';
import MarkdownIt from 'markdown-it';

const markdownParserResume = new MarkdownIt({
  html: true,
  breaks: true,
});


function Result(){

  return(
    <Box ml='8%' mr='8%' my='30px' bg='white' minH='calc(100vh)'>
        <Box
            className='rs-view'
            dangerouslySetInnerHTML={{__html: markdownParserResume.render('# Hello')}}/>

    </Box>

  );
};

export default Result;