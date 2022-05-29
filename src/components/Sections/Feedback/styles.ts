import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: flex-start;
    grid-gap: 5rem;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      grid-gap: 1rem;
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
    background: url('https://i.imgur.com/rndYNNe.png') no-repeat,
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

export const PhotoSection = styled.div`
  ${() => css``}
`;

export const PhotoContainer = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;

      @media ${theme.media.lteMedium} {
        margin: 0 auto;
      }
    `}
`;

export const Photo = styled.img`
  ${({ theme }) =>
    css`
      width: 100%;

      @media ${theme.media.lteMedium} {
        width: auto;
      }
    `}
`;

export const PhotoMobile = styled.source`
  ${({ theme }) =>
    css`
      // width: 100%;
    `}
`;

export const TextContainer1 = styled.div`
  ${({ theme }) => css`
    background: url('https://i.imgur.com/oJWSzq2.png') no-repeat;
    background-position: 0% 25%;
    background-size: auto;
    > h2 {
      margin: 0;
    }

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      max-width: inherit;
      background-position: 50% 15%;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media ${theme.media.lteMedium} {
        display: none;
      }
    `}
`;

export const SvgContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2rem;
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

      text-align: center;
      letter-spacing: 0.01em;

      color: #ffffff;
    }
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
    max-width: 400px;
    text-align: left;

    letter-spacing: 0.03em;

    @media ${theme.media.lteMedium} {
      max-width: inherit;
      text-align: center;
    }

    color: #ffffff;
  `}
`;

export const Instagram = styled.a`
  ${() => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2rem;

    letter-spacing: 0.01em;
    text-decoration-line: underline;

    color: #ffffff;
  `}
`;

export const Avatars = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
  overflow-x: auto;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

type AvatarContainerProps = {
  isFocused?: boolean;
};

const focused = (theme) => css`
  background: url('https://i.imgur.com/BMcnXbB.png') no-repeat;
  background-size: contain;

  @media ${theme.media.lteMedium} {
    background: url('https://res.cloudinary.com/amanda-caf/image/upload/v1653653223/Feedbacks/mobile/elipse_vndiix.png')
      no-repeat;
    //display: flex;
    //align-items: center;
    //justify-content: center;
    //padding: 0.3rem;
  }
`;

export const AvatarContainer = styled.div<AvatarContainerProps>`
  ${({ isFocused, theme }) => css`
    display: flex;
    align-items: center;
    padding: 0.6rem;
    width: 92px;
    transition: all 0.5s ease-in-out;
    ${isFocused && focused(theme)}

    :hover {
      transition: all 0.3s ease-in-out;
      ${focused(theme)}
    }

    @media ${theme.media.lteMedium} {
      width: auto;
      padding: 0.3rem;
    }
  `}
`;

export const AvatarImg = styled.img`
  ${({ theme }) => css`
    width: 100%;
    cursor: pointer;

    @media ${theme.media.lteMedium} {
      width: auto;
    }
  `}
`;

export const AvatarImgMobile = styled.source``;
