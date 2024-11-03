import styled from "styled-components";

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background: rgba(0,0,0,0.7);
    z-index: 99;
`;

export const Container = styled.div`
    width: 80%;
    max-width: 400px;
    border-radius: 25px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: end;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR_GRADIENT};

    > svg {
        font-size: 20px;
        cursor: pointer;
    }

    p {
        text-align: justify;
    }
`;