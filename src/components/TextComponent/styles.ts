import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.medium};
  `}
`;
