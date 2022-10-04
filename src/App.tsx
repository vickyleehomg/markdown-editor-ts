import React, { useState }from 'react';
import './App.css';
import { Flex, ChakraProvider} from '@chakra-ui/react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Main from './main';
import { EditorContext, FontContext, ThemeContext } from './utils/contexts';

function App() {

  const [markdownText, setMarkdownText] = useState("");
  const [font, setFont] = useState("Arial");
  const [theme, setTheme] = useState("warm");
  
  const contextValue = {
    markdownText,
    setMarkdownText
  };

  const fontContextValue = {
    font,
    setFont
  };
  const themeContextValue = {
    theme,
    setTheme
  }

  return (
    <EditorContext.Provider value={contextValue}>
      <ChakraProvider>
        <Flex>
          <ThemeContext.Provider value={themeContextValue}>
            <Header/>
            <FontContext.Provider value={fontContextValue}>
              <Main/>
            </FontContext.Provider>
          </ThemeContext.Provider>
          <Footer/>
        </Flex>
      </ChakraProvider>
    </EditorContext.Provider>
  );
}

export default App;
