import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    gap: 3rem;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
