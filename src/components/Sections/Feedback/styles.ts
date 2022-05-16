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
    //padding-top: 49px;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
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
  ${() => css`
    margin: 0 auto;
    padding: 5%;
    width: 100%;
  `}
`;

export const PhotoSection = styled.div`
  ${() => css``}
`;

export const PhotoContainer = styled.div`
  ${() =>
    css`
      width: 100%;
    `}
`;

export const Photo = styled.img`
  ${() =>
    css`
      width: 100%;
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
    }
  `}
`;

export const Header = styled.div`
  ${() =>
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
`;

export const SvgContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2rem;
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

const focused = () => css`
  background: url('https://i.imgur.com/BMcnXbB.png') no-repeat;
  background-size: contain;
`;

export const AvatarContainer = styled.div<AvatarContainerProps>`
  ${({ isFocused }) => css`
    display: flex;
    align-items: center;
    padding: 0.6rem;
    width: 92px;
    transition: all 0.5s ease-in-out;
    ${isFocused && focused()}

    :hover {
      transition: all 0.3s ease-in-out;
      ${focused()}
    }
  `}
`;

export const AvatarImg = styled.img`
  width: 100%;
  cursor: pointer;
`;
