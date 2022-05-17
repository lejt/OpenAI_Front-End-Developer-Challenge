import React from 'react';
import { StyledFooter } from '../styles/Footer.styled';
import { Container } from '../styles/Container.styled';
import { StyledFooterContent } from '../styles/Footer.styled';
// import { Flex } from '../styles/Flex.styled';
import { StyledSocialIcons } from '../styles/SocialIcons.styled';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <StyledFooter>
        <Container>
            <img src='./images/logo_white.svg' alt='' />

            <StyledFooterContent>
                <div style={{textAlign: 'center'}}>
                    <li>
                        Thank you for visiting my application project. <br/> Contact me below for more.
                    </li>
                    <li>jacky.tam92@outlook.com</li>
                </div>

                <StyledSocialIcons>
                    <li>
                        <a href="https://www.linkedin.com/in/jackyfutam/" target='_blank'><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://github.com/lejt" target='_blank'><FaGithub /></a>
                    </li>
                </StyledSocialIcons>
            </StyledFooterContent>

            <p>&copy; 2022 Shopify FrontEnd Intern Challenge. All rights reserved.</p>
        </Container>
    </StyledFooter>
  )
}

export default Footer