import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: flex-start;
    grid-gap: 6rem;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;

    background: url('https://i.imgur.com/HiKn6r3.png') no-repeat,
      ${theme.colors.background};
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    color: ${theme.colors.white};
  `}
`;

export const SectionContainer = styled.div`
  ${() => css`
    margin: 0 auto;
    padding: 5%;
    width: 100%;
  `}
`;

export const SvgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    position: relative;

    > svg {
      position: absolute;
      right: -2rem;
      bottom: -3rem;
    }
    @media ${theme.media.lteMedium} {
      > svg {
        margin-right: 0;
      }
    }
  `}
`;

export const TextContainer1 = styled.div`
  ${({ theme }) => css`
    max-width: 304px;

    > h2 {
      margin: 0;
    }

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      max-width: inherit;
    }
  `}
`;

export const Title1 = styled.h2`
  ${() => css`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 51px;
    letter-spacing: 0.01em;

    color: #ffffff;
  `}
`;

export const SubTitle1 = styled.p`
  ${() => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 20px;

    letter-spacing: 0.03em;

    color: #ffffff;
  `}
`;

export const CarouselActions = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const ButtonsContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    grid-gap: 20px;
  `}
`;

export const Indicators = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    grid-gap: 10px;
  `}
`;

export const CarouselContainer = styled.div`
  ${() => css``}
`;

export const Carousel = styled.div`
  ${() => css`
    max-width: 724px;
    height: 468px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  `}
`;

export const CarouselList = styled.ul`
  ${() =>
    css`
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      // width: 1200px;
      height: 250px;
    `}
`;

const slide = keyframes`
  0% {
    left: 0px
  }
  20% {
    left: 0px
  }
  30% {
    left: -181px
  }
  50% {
    left: -181px
  }
  60% {
    left: -362px
  }
  90% {
    left: -362px
  }
  100% {
    left: 0px
  }
`;

export const CarouselItem = styled.li`
  ${() =>
    css`
      min-width: 181px;
      position: relative;
      animation: ${slide} 15s infinite ease-out;
    `}
`;

export const CarouselImage = styled.img`
  ${() =>
    css`
      width: 100%;
    `}
`;
