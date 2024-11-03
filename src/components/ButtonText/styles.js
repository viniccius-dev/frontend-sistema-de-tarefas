import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    color: ${({ theme, $isActive}) => $isActive === "true" ? theme.COLORS.RED : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;
`;