import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.BACKGROUND_700}`};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px;

    > img {
        height: 60px;
    }
`;

export const About = styled.button`
    border: none;
    background: none;
    cursor: default;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
        cursor: pointer;
    }
`;