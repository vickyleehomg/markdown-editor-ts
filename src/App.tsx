import React, { useState }from 'react';
import './App.css';
import { Flex, ChakraProvider} from '@chakra-ui/react';
import Header from './components/layout/header';
import Main from './main';
import { EditorContext, FontContext } from './utils/contexts';

function App() {

  const [markdownText, setMarkdownText] = useState("");
  const [font, setFont] = useState("Arial");
  
  const contextValue = {
    markdownText,
    setMarkdownText
  };

  const fontContextValue = {
    font,
    setFont
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <ChakraProvider>
        <Flex>
          <Header/>
          <FontContext.Provider value={fontContextValue}>
            <Main/>
          </FontContext.Provider>
        </Flex>
      </ChakraProvider>
    </EditorContext.Provider>
  );
}

export default App;
