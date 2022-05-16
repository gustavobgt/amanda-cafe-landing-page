import styled, { css, DefaultTheme } from 'styled-components';

type Background = {
  background?: boolean;
  backgroundImg?: string;
};

const containerBackgroundActivate = (
  theme: DefaultTheme,
  backgroundImg: string,
) => css`
  background: url(${backgroundImg}) no-repeat, ${theme.colors.background};
  background-position: 0% 100%;
  background-attachment: fixed;
  background-size: cover;
  color: ${theme.colors.white};
`;

export const Container = styled.div<Background>`
  ${({ theme, background, backgroundImg }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme, backgroundImg)};
    min-height: 100vh;
    display: flex;
    align-items: center;
    border-bottom: 0.05px solid rgba(255, 255, 255, 0.5);

    @media ${theme.media.lteMedium} {
      //padding-top: 49px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background: none no-repeat, ${theme.colors.background};
    }
  `}
`;
