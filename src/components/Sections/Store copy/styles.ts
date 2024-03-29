import styled, { css } from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { motion } from 'framer-motion';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
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
    //padding-top: 49px;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: calc(100vh - 49px);
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 0.05px solid rgba(255, 255, 255, 0.5);
    background: url('https://i.imgur.com/euiAPwX.png') no-repeat,
      ${theme.colors.background};
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    color: ${theme.colors.white};

    @media (max-width: 1256px) {
      padding-top: 5%;
    }
  `}
`;

export const SectionContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 0 10%;
    width: 100%;
    max-width: 1400px;
    padding-top: 5%;

    @media (max-width: 1256px) {
      padding: 0 5%;
      padding-top: 5%;
    }

    @media ${theme.media.lteMedium} {
      padding-top: 5%;
    }
  `}
`;

export const TextContainer1 = styled(motion.div)`
  ${({ theme }) => css`
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

export const ButtonsContainer = styled.div`
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

export const BuyButton = styled.a`
  ${() => css`
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

export const PrincipalImageContainer = styled(motion.div)`
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

export const PrincipalImage = styled(motion.img)`
  ${() => css`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    border-radius: 7px;
  `}
`;

export const ECarousel = styled(Carousel)`
  ${({ theme }) => css`
    flex-direction: row;

    .rec-swipable {
      gap: 18px;
    }

    @media (min-width: 1100px) {
      > div:nth-child(1) {
        //height: 600px !important;
      }
    }

    > div:nth-child(2) {
      flex-direction: column;
      margin-left: 10px;
    }

    @media (max-width: 1100px) {
      flex-direction: column;

      .rec-swipable {
        gap: 0;
      }

      > div:nth-child(2) {
        flex-direction: row;
        margin-top: 44px;
      }
    }

    @media ${theme.media.lteMedium} {
      //max-width: inherit;
      display: none;
    }
  `}
`;

interface PhotoProps {
  backgroundImg: string;
}
export const PhotoContainer = styled.div<PhotoProps>`
  ${({ backgroundImg }) => css`
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: black;

    border-radius: 7px;
    //background: url(${backgroundImg}) no-repeat;
    max-height: 105px;
    position: relative;
  `}
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 7px;
  transition: all 0.25s ease-in-out;
`;

export const ImageTitleContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 15px 10px 15px;
`;

export const ImageTitle = styled.p`
  transition: all 0.25s ease-in-out;
  display: none;
  text-align: left;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* or 121% */

  letter-spacing: 0.01em;

  /* White */

  color: #ffffff;
`;

export const RightSideContainer = styled.div`
  ${() => css`
    //display: grid;
    //grid-template-columns: 1fr 1fr;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;

    div:nth-child(2) {
      max-width: 200px;
    }

    @media (max-width: 1100px) {
      div:nth-child(2) {
        max-width: 400px;
      }

      display: flex;
      flex-direction: column;
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
          right: -2rem;
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

export const ModalPagination = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

export const PaginationContainer = styled.div`
  position: relative;
  height: 18px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
      > ${CarouselImageContainer} ${CarouselImageOverlay} {
        opacity: 0.4;
      }
    }

    ${isActive
      ? css`
          background-color: rgba(255, 255, 255, 0.35);
          > ${CarouselImageContainer} ${CarouselImageOverlay} {
            opacity: 0.4;
          }
        `
      : css``}
  `}
`;

export const CarouselImageContainer = styled.div`
  ${() =>
    css`
      border-radius: 7px;
      cursor: pointer;
      position: relative;
    `}
`;

export const CarouselImage = styled.img`
  ${() =>
    css`
      border-radius: 7px;
      display: block;
      width: 100%;
      height: auto;
    `}
`;

export const CarouselImageOverlay = styled.div`
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

export const CarouselImageText = styled.p`
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
      padding-right: 20px;
    `}
`;

export const ModalCloseButton = styled.button`
  ${() =>
    css`
      cursor: pointer;
      position: relative;
      margin-bottom: -20px;
      padding: 20px;
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

export const ModalImageContainer = styled.div`
  ${() =>
    css`
      overflow: hidden;
      position: relative;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      //max-width: 500px;

      @media (max-width: 713px) {
        max-width: 500px;
      }

      @media (max-width: 608px) {
        max-width: 400px;
      }

      @media (max-width: 518px) {
        max-width: 300px;
      }
    `}
`;

export const ModalImage = styled.img`
  ${() =>
    css`
      display: block;
      width: 100%;
      height: auto;
      // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      // width: 100%;
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

export const ModalImageContainerWrapper = styled.div`
  ${() =>
    css`
      display: flex !important;
      align-items: center;
      justify-content: center;
    `}
`;

export const ModalImagePoha = styled.img`
  ${() =>
    css`
      display: block;
      width: 100%;
      height: auto;
    `}
`;

export const CarouselImagePoha = styled.img`
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
