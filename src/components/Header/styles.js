import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.BACKGROUND_700}`};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 50px;

    > svg {
        display: none;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 25px;
        cursor: pointer;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: block;
        }
    }

    > img {
        height: 60px;
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0 20px;
    }
`;

export const AboutIcon = styled.button`
    border: none;
    background: none;
    cursor: default;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
        cursor: pointer;
    }
`;