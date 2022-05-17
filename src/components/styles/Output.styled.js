import styled from 'styled-components';

export const StyledAIEmail = styled.div`
    border: 1px solid black;
    box-shadow: 5px 10px black;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`

export const StyledAIEmailHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    // height: 30px;
    
    & > .aiEmail__header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 30px;
        background-color: ${({ theme }) => theme.colors.emailHeader};
        height: 40px;
    }
    
    & > .aiEmail__sort {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        background-color: #4e7e71;
        display: flex;
        align-items: center;
        height: 50px;
    }

    & > .aiEmail__sort > button {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        margin: 5px 10px;
    }
`

export const StyledInbox = styled.div`
    background-color: darkslategray;
    border-right: 5px solid black;
    height: ${({ theme }) => theme.sizes.inboxHeight};
    overflow-y: scroll;
    font-size: 1rem;
    line-height: 1.5rem;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        min-height: 500px;
    }
`