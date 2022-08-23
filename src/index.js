import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import MainContext from './MainContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <MainContext>

    <ChakraProvider>
      <App />
    </ChakraProvider>
    </MainContext>
  </React.StrictMode>
);


