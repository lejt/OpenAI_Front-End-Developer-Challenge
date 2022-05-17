import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    color: #000;
    padding: 20px 0;
    border-bottom: 2px solid #7a7a52;
    box-shadow: 0px 10px #009973;
    margin-bottom: 50px;

    @media (max-width: ${( { theme } ) => theme.mobile}) {
        .header__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`

export const Logo = styled.img`
    height: 30px;
`