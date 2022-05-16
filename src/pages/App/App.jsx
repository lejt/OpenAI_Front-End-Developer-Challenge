import './App.css';
import React from "react";
import { ThemeProvider } from 'styled-components';
import { PromptProvider } from '../../PromptContext';
import UserInput from '../../components/UserInput/UserInput';
import Responses from '../../components/Responses/Responses';

import { Container } from '../../components/styles/Container.styled';

const theme = {
  colors: {
    body: '#fff',
    button: '#ff3399',
    emailOutput: '#e6e6e6',
    emailHeader: '#a6a6a6',
    emailInbox: '#bfbfbf',
  },
  mobile: '768px',
  sizes: {
    inboxHeight: '300px'
  }
}


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PromptProvider>
        <h1>OPENAI Ghost Writer</h1>
        <Container>
          <UserInput />
          <Responses />
        </Container>
      </PromptProvider>
    </ThemeProvider>
  );
}

export default App;