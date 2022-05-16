import styled from 'styled-components';

export const StyledAIEmail = styled.div`
    border: 1px solid black;
    box-shadow: 5px 10px #888888;
    border-radius: 5px;
    margin-top: 50px;

    display: flex;
    flex-direction: column;

    // overflow-y: auto;
`

export const StyledAIEmailHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60px;
    
    & > .aiEmail__header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 30px;
        height: 50%;
        background-color: ${({ theme }) => theme.colors.emailHeader}
    }
    
    & > .aiEmail__sort {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        background-color: #fff;
        display: flex;
        align-items: center
        padding: 5px;
        height: 50%;
    }
`