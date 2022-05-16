import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    margin: 0 10px 10px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.button};

    &:hover {
        transform: scale(0.98);
        opacity: 0.8;
        cursor: pointer;
    }
`