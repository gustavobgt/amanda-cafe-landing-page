import styled, { css } from 'styled-components';

interface Props {
  isActive?: boolean;
}

export const Container = styled.a<Props>`
  ${({ theme, isActive }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: #000000;
    font-weight: bold;
    position: relative;

    @media ${theme.media.lteMedium} {
      color: white;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 34px;
    }

    ${isActive
      ? css`
          &::after {
            content: '';
            position: absolute;
            bottom: 0.76rem;
            left: 10%;
            width: 45%;
            height: 0.3rem;
            background: #ffffff;
            transition: all 300ms ease-in-out;
          }

          &::before {
            content: '';
            position: absolute;
            bottom: 0.9rem;
            left: 40%;
            width: 50%;
            height: 0.1rem;
            background: #ffffff;
            opacity: 0.7;
            transition: all 300ms ease-in-out;
          }
        `
      : css`
          &::after {
            content: '';
            position: absolute;
            bottom: 0.76rem;
            left: 50%;
            width: 0;
            height: 0.3rem;
            background: #ffffff;
            transition: all 300ms ease-in-out;
          }

          &::before {
            content: '';
            position: absolute;
            bottom: 0.9rem;
            left: 50%;
            width: 0;
            height: 0.1rem;
            background: #ffffff;
            opacity: 0.7;
            transition: all 300ms ease-in-out;
          }

          &:hover::after {
            left: 10%;
            width: 45%;
          }

          &:hover::before {
            left: 40%;
            width: 50%;
          }
        `}
  `}
`;
