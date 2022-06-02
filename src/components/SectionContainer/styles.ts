import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 5%;
    padding-left: 8.5%;
    //padding-top: 5%;
    width: 100%;
    max-width: 1600px;

    @media ${theme.media.lteMedium} {
      padding-top: 5%;
      padding-left: 0;
      padding-right: 0;
    }

    @media (max-height: 666px) {
      padding-top: 2%;
    }

    @media (min-width: 1640px) {
      padding: 0 5%;
    }
  `}
`;
