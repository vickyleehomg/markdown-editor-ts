import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex, ChakraProvider} from '@chakra-ui/react';
import Header from './components/layout/header';
import Main from './main';
import EditorContext from './editorContext';

function App() {

  const [markdownText, setMarkdownText] = useState("");
  
  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <ChakraProvider>
        <Flex>
          <Header/>
          <Main/>
        </Flex>
      </ChakraProvider>
    </EditorContext.Provider>
  );
}

export default App;
