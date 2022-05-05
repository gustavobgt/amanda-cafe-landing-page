import styled, { css } from 'styled-components';

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
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
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
  ${() => css`
    margin: 0 auto;
    padding: 5%;
    width: 100%;
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
    min-height: 160px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 20px;
    max-width: 346px;
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
`;

export const BuyButton = styled.button`
  ${() => css`
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
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
      margin-bottom: 44px;
    `}
`;

export const PrincipalImage = styled.img`
  ${() => css`
    width: 100%;
  `}
`;

export const ItemContainer = styled.button`
  ${() => css`
    cursor: pointer;
    background: #ffffff;
    background-color: rgba(255, 255, 255, 0.15);
    //opacity: 0.35;
    border-radius: 10px;
    padding: 15px;
    transition: all 0.25s ease-in-out;

    :hover {
      background-color: rgba(255, 255, 255, 0.35);
      > ${PhotoContainer} {
        ${Image} {
          opacity: 0.4;
          transition: all 0.25s ease-in-out;
        }

        ${ImageTitleContainer} > ${ImageTitle} {
          display: block;
          transition: all 0.25s ease-in-out;
        }
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
