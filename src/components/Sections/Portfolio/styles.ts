import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: flex-start;
    grid-gap: 6rem;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      grid-gap: 0;
      text-align: center;
    }
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    //padding-top: 49px;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: calc(100vh - 49px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 0.05px solid rgba(255, 255, 255, 0.5);
    gap: 20px;
    background: url('https://i.imgur.com/HiKn6r3.png') no-repeat,
      ${theme.colors.background};
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    color: ${theme.colors.white};
  `}
`;

export const SectionContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 5%;

    width: 100%;
    max-width: 1400px;

    @media ${theme.media.lteMedium} {
      padding-top: 5%;
    }
  `}
`;

export const SvgContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    position: relative;

    div:nth-child(1) {
      position: relative;

      > svg {
        position: absolute;
        right: -3rem;
        bottom: -7rem;
      }
    }

    div:nth-child(2) {
      position: relative;

      > svg {
        position: absolute;
        right: -2rem;
        bottom: -3rem;
      }
    }

    @media ${theme.media.lteMedium} {
      div:nth-child(1) {
        position: relative;

        > svg {
          margin-right: 0;
        }
      }

      div:nth-child(2) {
        position: relative;

        > svg {
          margin-right: 0;
        }
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

export const CarouselImageContainer = styled.div`
  ${({ theme }) =>
    css`
      overflow: hidden;
      cursor: pointer;
      position: relative;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

      :hover ${CarouselImageOverlay} {
        opacity: 0.7;
      }

      :hover ${CarouselImage} {
        transform: scale(1.3);
        transition: transform 1s;
      }

      @media ${theme.media.lteMedium} {
        ${CarouselImageOverlay} {
          opacity: 0.7;
        }
      }
    `}
`;

export const ModalImageContainer = styled.div`
  ${() =>
    css`
      overflow: hidden;
      position: relative;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      //max-width: 500px;
    `}
`;

export const CarouselImage = styled.img`
  ${() =>
    css`
      display: block;
      width: 100%;
      height: auto;
      // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      // width: 100%;
    `}
`;

export const CarouselImageOverlay = styled.div`
  ${() =>
    css`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background: #000000;
    `}
`;

export const CarouselImageText = styled.p`
  ${({ theme }) =>
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 51px;
      text-align: center;

      letter-spacing: 0.01em;

      color: #ffffff;

      transform: translate(-25%, 80%) rotate(-90deg);

      @media ${theme.media.lteMedium} {
        width: 200px;
        text-align: start;
        transform: translate(-30%, 50%) rotate(-90deg);
      }

      @media (max-width: 713px) {
        width: 200px;
        text-align: start;
        transform: translate(-25%, 100%) rotate(-90deg);
      }
    `}
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

export const DotContainer = styled.div`
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Dot {
  active: boolean;
}

export const Dot = styled.div<Dot>`
  ${({ active }) => css`
    opacity: ${!active ? 0 : 1};
    background: #ffffff;
    width: ${!active ? '5px' : '10px'};
    height: ${!active ? '5px' : '10px'};
    border-radius: 50%;
    transition: all 0.25s ease-in-out;
  `}
`;

interface NextButton {
  visible: boolean;
}

export const NextButton = styled.button<NextButton>`
  ${({ visible }) =>
    css`
      cursor: pointer;
      opacity: ${!visible ? 0 : 1};
      display: flex;
      transition: all 0.25s ease-in-out;
    `}
`;

export const ButtonContainer = styled.div`
  ${() =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const ModalHeader = styled.div`
  ${() =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const ModalClose = styled.div`
  ${() =>
    css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `}
`;

export const ModalCloseButton = styled.button`
  ${() =>
    css`
      cursor: pointer;
      position: relative;
      padding: 20px;
    `}
`;

export const ModalTitle = styled.p`
  ${() =>
    css`
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      text-align: center;
      letter-spacing: 0.01em;

      color: #ffffff;
    `}
`;

export const ModalContainer = styled.div``;

export const ModalContent = styled.div``;

export const MobileIndicatorContainer = styled.div`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const MobileIndicatorTitle = styled.p`
  ${() =>
    css`
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      text-align: center;
      letter-spacing: 0.01em;

      color: #ffffff;
    `}
`;
