import styled, { css, DefaultTheme } from 'styled-components';

type Background = {
  background?: boolean;
  backgroundImg?: string;
};

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background: url('https://res.cloudinary.com/amanda-caf/image/upload/v1653948553/sobre/imagebg-2x_gdad0r.png')
      no-repeat,
    ${theme.colors.background};

  background-position: 0% 100%;
  background-attachment: fixed;
  background-size: cover;
  color: ${theme.colors.white};
`;

export const Container = styled.div<Background>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: calc(100vh - 49px);
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
