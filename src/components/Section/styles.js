import styled from "styled-components";

export const Container = styled.section`
    margin-bottom: 10px;
    width: 100%;

    > h2 {
        border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.BACKGROUND_700}`};
        padding-bottom: 16px;
        margin-bottom: 28px;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`;