import React from 'react';

const defaultContext = {
    markdownText: "",
    setMarkdownText: (a:string) => {}
};

export const EditorContext = React.createContext(defaultContext);

const defaultFont = {
    font: "arial",
    setFont: (a:string) => {}
};

export const FontContext = React.createContext(defaultFont);

const defaultTheme = {
    theme: "warm",
    setTheme: (a:string) => {}
};

export const ThemeContext = React.createContext(defaultTheme);
