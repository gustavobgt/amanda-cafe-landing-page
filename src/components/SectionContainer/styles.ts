import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 5%;
    width: 100%;
    max-width: 1400px;

    @media ${theme.media.lteMedium} {
      padding-top: 5%;
      padding-left: 0;
      padding-right: 0;
    }
  `}
`;
