import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-template-columns: auto;
        grid-template-areas:
            "header"
            "search"
            "content";
    }
`;

export const Brand = styled.div`
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.BACKGROUND_700}`};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > img {
        height: 40px;
    }

    > svg {
        display: none;
    }

    &[data-menu-is-open="true"] {
        transform: translateX(0%);
        transition: transform 0.3s ease-in-out;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: 150px;
        width: 100%;
        transform: translateX(-100%);
        position: absolute;
        z-index: 1;

        > svg {
            cursor: pointer;
            display: block;
            position: absolute;
            right: 30px;
            font-size: 25px;
        }
    }
`;

export const Menu = styled.ul`
    grid-area: menu;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding-top: 35px;
    text-align: center;
    overflow-y: auto;

    > li {
        margin-bottom: 24px;
    }

    &[data-menu-is-open="true"] {
        transform: translateX(0%);
        transition: transform 0.3s ease-in-out;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: calc(100vh - 150px);
        bottom: 0;
        width: 100%;
        transform: translateX(-100%);
        position: absolute;
        z-index: 1;
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding: 32px 50px 0;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 32px 20px 0;
    }
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 50px;
    overflow-y: auto;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0 20px;
    }
`;

export const AddTask = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;

    bottom: 20px;
    right: 55px;

    width: 50px;
    height: 50px;
    
    border-radius: 25px;
    background-color: ${({ theme }) => theme.COLORS.RED};

    svg {
        font-size: 25px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.RED_200};
    }
`;