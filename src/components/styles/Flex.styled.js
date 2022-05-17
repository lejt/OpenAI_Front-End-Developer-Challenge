import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;

    & > div {
        flex: 1;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        .inbox__mail__content {
            min-height: 500px;
        }
    }
`