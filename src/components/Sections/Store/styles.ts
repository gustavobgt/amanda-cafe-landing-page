import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Carousel from 'react-elastic-carousel';

export const CustomCarousel = styled(Carousel)`
  ${({ theme }) => css`
    display: none;
    .rec .rec-slider-container {
      margin: 0;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: flex-start;
    //grid-gap: 6rem;

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
    background: url('https://i.imgur.com/euiAPwX.png') no-repeat,
      ${theme.colors.background};
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    color: ${theme.colors.white};

    @media ${theme.media.lteMedium} {
      padding-top: 2.8rem;
    }
  `}
`;

export const SectionContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 5%;
    padding-top: 5%;

    width: 100%;
    max-width: 1200px;

    @media ${theme.media.lteMedium} {
      padding-top: 0%;
      padding-bottom: 0;
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
        bottom: 7rem;

        @media ${theme.media.lteMedium} {
          right: inherit;
          bottom: -6rem;
        }
      }
    }

    div:nth-child(2) {
      position: relative;

      > svg {
        position: absolute;
        right: -2rem;
        bottom: -3rem;

        @media ${theme.media.lteMedium} {
          z-index: -1;
          right: 2.2rem;
          bottom: -3rem;
        }
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
    > h2 {
      margin: 0;
    }

    @media ${theme.media.lteMedium} {
      //margin-bottom: ${theme.spacings.large};
      max-width: inherit;
    }
  `}
`;

export const SvgContainer1 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    position: relative;

    div:nth-child(1) {
      position: relative;

      > svg {
        position: absolute;
        right: -3rem;
        bottom: -7rem;
      }
    }

    @media ${theme.media.lteMedium} {
      div:nth-child(1) {
        position: relative;

        > svg {
          margin-right: 0;
          right: -7rem;
          bottom: -6.5rem;
        }
      }
    }
  `}
`;

export const SvgContainer2 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    position: relative;

    div:nth-child(1) {
      position: relative;

      > svg {
        position: absolute;
        right: 0rem;
        bottom: -7rem;
        z-index: -1;
      }
    }

    @media ${theme.media.lteMedium} {
      div:nth-child(1) {
        position: relative;

        > svg {
          margin-right: 0;
          right: -4rem;
          bottom: -4.5rem;
        }
      }
    }
  `}
`;

export const SvgContainer3 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    position: relative;

    div:nth-child(1) {
      position: relative;

      > svg {
        position: absolute;
        //right: -3rem;
        top: 1rem;
      }
    }

    @media ${theme.media.lteMedium} {
      display: none;
      justify-content: flex-end;
      div:nth-child(1) {
        position: relative;

        > svg {
          margin-right: 0;
          right: 0;
          top: -2rem;
          z-index: -1;
        }
      }
    }
  `}
`;

export const Title1 = styled.h2`
  ${({ theme }) => css`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 51px;
    letter-spacing: 0.01em;

    color: #ffffff;
    text-align: left;

    @media ${theme.media.lteMedium} {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 34px;
      /* identical to box height, or 113% */

      letter-spacing: 0.01em;

      color: #ffffff;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 20px;
    max-width: 370px;
    text-align: left;

    letter-spacing: 0.03em;

    @media ${theme.media.lteMedium} {
      max-width: inherit;
    }

    color: #ffffff;
  `}
`;

export const Description2 = styled.p`
  ${({ theme }) => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    max-width: 370px;
    text-align: left;

    letter-spacing: 0.03em;

    @media ${theme.media.lteMedium} {
      max-width: inherit;
    }

    color: #ffffff;
  `}
`;

export const ButtonsContainer2 = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;

    @media ${theme.media.lteMedium} {
      //max-width: inherit;
      display: none;
    }
  `}
`;

export const MobilePhotoContainer = styled.div``;

export const MobilePhotoImg = styled.img`
  width: 100%;
`;

export const BuyButton = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;

    /* Black */

    background: #000000;
    border-radius: 4px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #ffffff;
    border: 1px solid #000000;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }

    @media ${theme.media.lteMedium} {
      width: 100%;

      margin-bottom: 7rem;
    }
  `}
`;

export const BuyButton2 = styled.a`
  ${({ theme }) => css`
    display: none;
    text-decoration: none;
    cursor: pointer;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;

    /* Black */

    background: #000000;
    border-radius: 4px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #ffffff;
    border: 1px solid #000000;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      width: 100%;

      margin-bottom: 7rem;
    }
  `}
`;

export const DetailsButton = styled.button`
  ${() => css`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #ffffff;
    border: 1px solid #ffffff;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 34px;
    letter-spacing: 0.01em;

    color: #ffffff;
    text-align: left;

    @media ${theme.media.lteMedium} {
      margin: 0;
      margin-top: 1rem;
      margin-bottom: 2.8rem;
    }
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
  ${() =>
    css`
      display: flex;
      gap: 36px;
      align-items: center;
      justify-content: flex-end;

      @media (max-width: 1000px) {
        flex-direction: column;
      }

      @media (max-width: 768px) {
        display: none;
      }
    `}
`;

export const Carousel2 = styled.div`
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
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      display: flex;
      width: 100%;
    `}
`;

export const ModalImageContainerWrapper = styled.div`
  ${() =>
    css`
      display: flex !important;
      align-items: center;
      justify-content: center;
    `}
`;

export const PrincipalImageContainer = styled.div`
  ${({ theme }) =>
    css`
      cursor: pointer;
      min-width: 349px;
      max-width: 349px;
      //margin-bottom: 44px;

      @media ${theme.media.lteMedium} {
        //max-width: inherit;
        display: none;
      }
    `}
`;

export const PrincipalImage = styled.img`
  ${() => css`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    border-radius: 7px;
  `}
`;

export const ModalImageContainer = styled.div`
  ${() =>
    css`
      overflow: hidden;
      position: relative;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      //max-width: 500px;
      max-width: 1000px;

      @media (max-width: 713px) {
        max-width: 300px;
      }

      @media (max-width: 440px) {
        max-width: 250px;
      }

      @media (max-width: 360px) {
        max-width: 210px;
      }
    `}
`;

export const CarouselImage = styled.img`
  ${() =>
    css`
      pointer-events: none;
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
  //margin-top: 20px;
  transform: translate(0, 85px);
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

export const Pagination2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  //margin-top: 20px;
  //position: fixed;
  position: absolute;
  //bottom: 20px;
  bottom: -60px;
  //display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  //text-align: center;
  //display: block;
`;

export const DotContainer2 = styled.div`
  position: relative;
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

export const Dot2 = styled.div<Dot>`
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
      margin: 0;

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

export const SlideNextButton = styled.button`
  ${() =>
    css`
      z-index: 5;
      font-size: 0;
      line-height: 0;
      //position: absolute;
      position: fixed;
      top: 50%;
      display: flex;
      align-items: center;
      //width: 35px;
      //height: 35px;
      padding: 0;
      //-webkit-transform: translate(0, -50%);
      //transform: translate(0, -50%);
      cursor: pointer;
      //color: transparent;
      border: none;
      outline: none;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid #ffffff;
      border-radius: 50%;
      //right: -45px;
      right: 20px;

      svg {
        margin: 10px 12px;
      }
    `}
`;

export const SlideBackButton = styled.button`
  ${() =>
    css`
      z-index: 5;
      font-size: 0;
      line-height: 0;
      //position: absolute;
      position: fixed;
      top: 50%;
      display: flex;
      align-items: center;
      //width: 35px;
      //height: 35px;
      padding: 0;
      //-webkit-transform: translate(0, -50%);
      //transform: translate(0, -50%);
      cursor: pointer;
      color: transparent;
      border: none;
      outline: none;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid #ffffff;
      border-radius: 50%;
      //left: -45px;
      left: 15px;

      svg {
        margin: 10px 12px;
      }
    `}
`;

export const Slider2Container = styled.div`
  ${({ theme }) => css`
    display: none;

    @media ${theme.media.lteMedium} {
      display: block;
    }
  `}
`;

export const ImageBundle = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    ::-webkit-scrollbar {
      display: none;
    }
    flex-direction: row;
    max-width: 349px;
    overflow: auto;

    > button {
      min-width: 176px;
    }
  }
`;

interface ItemContainerProps {
  isActive: boolean;
}

export const ItemContainer = styled.button<ItemContainerProps>`
  ${({ isActive }) => css`
    cursor: pointer;
    background: #ffffff;
    background-color: rgba(255, 255, 255, 0.15);
    //opacity: 0.35;
    border-radius: 10px;
    padding: 15px;
    transition: all 0.25s ease-in-out;

    :hover {
      background-color: rgba(255, 255, 255, 0.35);
      > ${CarouselImageContainer2} ${CarouselImageOverlay2} {
        opacity: 0.4;
      }
    }

    ${isActive
      ? css`
          background-color: rgba(255, 255, 255, 0.35);
          > ${CarouselImageContainer2} ${CarouselImageOverlay2} {
            opacity: 0.4;
          }
        `
      : css``}
  `}
`;

export const CarouselImageContainer2 = styled.div`
  ${() =>
    css`
      border-radius: 7px;
      cursor: pointer;
      position: relative;
    `}
`;

export const CarouselImage2 = styled.img`
  ${() =>
    css`
      border-radius: 7px;
      display: block;
      width: 100%;
      height: auto;
    `}
`;

export const CarouselImageOverlay2 = styled.div`
  ${() =>
    css`
      border-radius: 7px;
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

export const CarouselImageText2 = styled.p`
  ${() =>
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      /* or 121% */

      letter-spacing: 0.01em;

      /* White */

      color: #ffffff;
      width: 116px;
      text-align: left;

      transform: translate(-50%, -50%);
    `}
`;

export const ModalTitleIhu = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
`;
