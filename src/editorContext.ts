import React from 'react';

const defaultContext = {
    markdownText: "",
    setMarkdownText: (a:string) => {}
};

export default React.createContext(defaultContext);