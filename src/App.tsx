import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex } from '@chakra-ui/react';
import Header from './components/layout/header';
import Main from './main';

function App() {
  return (
    <Flex>
      <Header/>
      <Main/>
    </Flex>
  );
}

export default App;
