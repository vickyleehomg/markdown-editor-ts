import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import Start from './start';
import StartMobile from './startMobile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BreakpointProvider>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <>
                <Breakpoint medium up>
                  <Start/>
                </Breakpoint>
                <Breakpoint small down>
                  <StartMobile/>
                </Breakpoint>
              </>
            } />
          <Route path="/editor" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </BreakpointProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
