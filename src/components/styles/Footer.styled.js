import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    padding: 0 0 10px;
    margin-top: 100px;
    border-top: 3px solid #009973;

    ul {
        list-style-type: none;
        width: 50%;
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: center;
    }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
        ul {
        padding: 0;
        }
        p {
        text-align: center;
        }
    }
`