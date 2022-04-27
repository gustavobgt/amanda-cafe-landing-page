import styled, { css } from 'styled-components';

export const RelativeContainer = styled.div`
  position: relative;
`;

export const TextContainer1 = styled.div`
  ${({ theme }) => css`
    max-width: 205px;
    position: absolute;
    bottom: 14rem;
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      position: static;
      max-width: inherit;
    }
  `}
`;

export const TextContainer2 = styled.div`
  ${({ theme }) => css`
    max-width: 419px;
    position: absolute;
    right: 10rem;
    top: -8rem;
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      position: static;
      max-width: inherit;
    }
  `}
`;

export const Title1 = styled.h2`
  ${() => css`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 34px;
    letter-spacing: 0.01em;

    color: #ffffff;
  `}
`;

export const SubTitle1 = styled.p`
  ${() => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 18px;
    /* or 150% */

    letter-spacing: 0.03em;

    color: #ffffff;
  `}
`;

export const SvgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;

    > svg {
      margin-right: -8rem;
    }
    @media ${theme.media.lteMedium} {
      > svg {
        margin-right: 0;
      }
    }
  `}
`;

export const Title2 = styled.h2`
  ${() => css`
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 9rem;
    line-height: 96px;
    letter-spacing: 0.01em;

    color: #ffffff;
  `}
`;

export const SubTitle2 = styled.p`
  ${() => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 20px;
    /* or 150% */

    letter-spacing: 0.01em;

    color: #ffffff;
  `}
`;
