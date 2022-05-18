import styled, { css } from 'styled-components';
import Carousel from 'react-elastic-carousel';

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
    //padding-top: 49px;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
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

export const TextContainer1 = styled.div`
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
  ${() => css`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 51px;
    letter-spacing: 0.01em;

    color: #ffffff;
    text-align: left;
  `}
`;

export const SubTitle = styled.h3`
  ${() => css`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 34px;
    letter-spacing: 0.01em;

    color: #ffffff;
    text-align: left;
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
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
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

export const PrincipalImageContainer = styled.div`
  ${() =>
    css`
      margin-bottom: 44px;
    `}
`;

export const PrincipalImage = styled.img`
  ${() => css`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    width: 100%;
    border-radius: 7px;
  `}
`;

export const ECarousel = styled(Carousel)`
  ${() => css`
    flex-direction: row;

    @media (min-width: 1100px) {
      > div:nth-child(1) {
        height: 600px !important;
      }
    }

    > div:nth-child(2) {
      flex-direction: column;
      margin-left: 10px;
    }

    @media (max-width: 1100px) {
      flex-direction: column;

      > div:nth-child(2) {
        flex-direction: row;
        margin-top: 44px;
      }
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
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    grid-gap: 20px;

    @media (max-width: 1100px) {
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
      cursor: pointer;
      position: relative;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
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
