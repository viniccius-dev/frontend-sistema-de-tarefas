import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme, $highlight }) => 
        $highlight === "true" ? theme.COLORS.BLUE : theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    transition: transform 0.2s ease-in-out;

    .left-section {
        display: flex;

        .order-task-controls {
            display: flex;
            flex-direction: column;
            padding-right: 10px;
        }
    }

    &:hover {
        transform: translateY(-2px);
    }

    h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    footer {
        width: 100%;
        display: flex;
        margin-top: 18px;
    }

    svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        padding: 5px;
        width: 35px;
        height: 35px;
        border-radius: 5px;
        transition: 0.5s;
    }

    svg:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        color: ${({ theme }) => theme.COLORS.WHITE}
    }
`;
