import React from 'react';

import { StyledFooter } from '../styles/Footer.styled';
import { Container } from '../styles/Container.styled';
import { Flex } from '../styles/Flex.styled';
import { StyledSocialIcons } from '../styles/SocialIcons.styled';

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <StyledFooter>
        <Container>
            <img src='./images/logo_white.svg' alt='' />

            <Flex>
                <ul style={{textAlign: 'center'}}>
                    <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </li>
                    <li>jacky.tam92@outlook.com</li>
                </ul>
                <StyledSocialIcons>
                    <li><a href="https://www.linkedin.com/in/jackyfutam/" target='_blank'><FaLinkedin /></a></li>
                    <li><a href="https://github.com/lejt" target='_blank'><FaGithub /></a></li>
                </StyledSocialIcons>

            </Flex>

            <p>&copy; 2022 Shopify FrontEnd Intern Challenge. All rights reserved.</p>
        </Container>
    </StyledFooter>
  )
}

export default Footer