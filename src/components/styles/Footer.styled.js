import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #183432;
    padding: 0 0 10px;
    margin-top: 100px;
    border-top: 3px solid #009973;

    p {
        text-align: center;
    }
`

export const StyledFooterContent = styled.div`
    display: flex;

    li {
        list-style: none;
        margin-bottom: 30px;
    }

    & > div {
        width: 50%;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`