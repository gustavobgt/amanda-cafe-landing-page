import styled, { css } from 'styled-components';

export const RelativeContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;
    height: 70vh;
    @media ${theme.media.lteMedium} {
      height: inherit;
    }
  `}
`;

export const AmandaImgContainer = styled.div`
  ${({ theme }) =>
    css`
      display: none;

      @media ${theme.media.lteMedium} {
        display: block;
      }
    `}
`;

export const AmandaImg = styled.img`
  ${() => css`
    width: 100%;
  `}
`;

export const TextContainer1 = styled.div`
  ${({ theme }) => css`
    max-width: 205px;
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      max-width: inherit;
      padding: 5%;
    }
  `}
`;

export const TextContainer2 = styled.div`
  ${({ theme }) => css`
    max-width: 419px;
    position: absolute;
    right: 7rem;
    top: 6.5rem;
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      position: static;
      max-width: inherit;
      padding: 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const Title1 = styled.h2`
  ${({ theme }) => css`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 34px;
    letter-spacing: 0.01em;

    color: #ffffff;

    @media ${theme.media.lteMedium} {
      margin: 5% 0 0 0;
    }
  `}
`;

export const SubTitle1 = styled.p`
  ${({ theme }) => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 18px;
    /* or 150% */

    letter-spacing: 0.03em;

    color: #ffffff;

    @media ${theme.media.lteMedium} {
      margin: 0;
    }
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
      align-items: center;
      justify-content: center;
      > svg {
        margin-right: 0;
      }
    }
  `}
`;

export const Title2 = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 9rem;
    line-height: 96px;
    letter-spacing: 0.01em;

    color: #ffffff;

    @media ${theme.media.lteMedium} {
      font-size: 6.4rem;
      line-height: 69px;
      max-width: 438px;
      text-align: center;
    }
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
