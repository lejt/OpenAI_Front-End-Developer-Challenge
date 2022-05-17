import React from "react";
import { ThemeProvider } from 'styled-components';
import { PromptProvider } from '../../PromptContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UserInput from '../../components/UserInput/UserInput';
import AIOutput from '../../components/AIOutput/AIOutput';

import { GlobalStyles } from '../../components/styles/Global.styled';
import { Container } from '../../components/styles/Container.styled';

const theme = {
  colors: {
    body: '#006666',
    header: '#00cc99',
    footer: '#00664d',
    button: '#ff3399',
    emailInput: '#e6e6e6',
    emailOutput: '#eae0c2',
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
      <GlobalStyles />
      <Header />
      <PromptProvider>
        <Container>
          <UserInput />
          <AIOutput />
        </Container>
      </PromptProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;