import styled from 'styled-components';

export const StyledInbox = styled.div`
    background-color: darkslategray;
    border-right: 5px solid black;
    height: ${({ theme }) => theme.sizes.inboxHeight};
    overflow-y: scroll;
`