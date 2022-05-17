import styled from 'styled-components';

export const StyledUserEmail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    box-shadow: 5px 10px black;

    .user__send, .user__message {
        width: 100%;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 14px;
        }
    }

    .user__send > div, .user__input {
        padding: 20px 30px;
    }

    .user__send {
        background-color: ${({ theme }) => theme.colors.emailHeader};
        border-bottom: 1px solid black;
    }

    .user__message {
        background-color: ${({ theme }) => theme.colors.emailInput};
    }

    textarea {
        width: 100%;
        min-height: 50px;
        border-style: none;
        // background-color: transparent;
        background-color: ${({ theme }) => theme.colors.emailInput}
    }
    textarea:hover {
        background-color: ;
        filter: brightness(85%);
        
    }

    .user__button {
        display: flex;
        justify-content: flex-end;
    }
`