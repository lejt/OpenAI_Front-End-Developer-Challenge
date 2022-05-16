import React from 'react';
import { Container } from '../styles/Container.styled';
import { Logo } from '../styles/Header.styled';

import { StyledHeader } from '../styles/Header.styled';
import { Flex } from '../styles/Flex.styled';

function Header() {
  return (
    <StyledHeader>
        <Container>
            <Flex style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Logo src='./images/OpenAi_Logo.svg' alt='' /> 
                <h4 className="title">Ghost Writer Services - Department of Ideas</h4>
            </Flex>
        </Container>
    </StyledHeader>
  )
}

export default Header