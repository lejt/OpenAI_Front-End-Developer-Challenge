import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    // align-items: center;

    // overflow: auto;
    // border: 5px dashed orange;

    & > div {
        flex: 1;
    }
`