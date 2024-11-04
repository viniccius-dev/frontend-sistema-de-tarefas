import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const Search = styled.div`
    grid-area: search;
    padding: 32px 50px 0;
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 50px;
    overflow-y: auto;
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