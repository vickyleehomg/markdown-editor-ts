import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';
import Main from '../../main';

function Layout() {

  return (
    <Flex>
      <Header/>
      <Main/>
      <Footer/>
    </Flex>
  );
};

export default Layout;
