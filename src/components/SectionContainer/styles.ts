import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 5%;
    width: 100%;

    @media ${theme.media.lteMedium} {
      padding: 0;
    }
  `}
`;
