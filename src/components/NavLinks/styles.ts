import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${() => css`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    gap: 3rem;
  `}
`;
