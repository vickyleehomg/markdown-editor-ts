import React, { useContext } from 'react';
import '../App.css';
import { Box } from '@chakra-ui/react';
import { EditorContext, FontContext} from '../utils/contexts';
import markdownParserResume from "../utils/parserPlugins";

function Result(){

  const { markdownText } = useContext(EditorContext);

  const { font } = useContext(FontContext);

  return(
    <Box ml='8%' mr='8%' mb='80px' bg='whiteAlpha.600' minH='calc(100vh)' shadow='base'>
      <Box className='rs-view'>
        <Box className={font}
            dangerouslySetInnerHTML={{__html: markdownParserResume.render(markdownText)}}/>
      </Box>
    </Box>

  );
};

export default Result;