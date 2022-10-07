import React, { useState }from 'react';
import './App.css';
import { EditorContext, FontContext, ThemeContext } from './utils/contexts';
import Layout from './components/layout/layout';

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
      <ThemeContext.Provider value={themeContextValue}>
        <FontContext.Provider value={fontContextValue}>
          <Layout/>
        </FontContext.Provider>
      </ThemeContext.Provider>
    </EditorContext.Provider>
  );
}

export default App;
