import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

type MenuVisible = {
  visible?: boolean;
};

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const MobileContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 6;
    background-color: black;
    height: 49px;
    width: 100%;
    padding: 16px 20px;
    display: none;

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  `}
`;

export const Button = styled.button<MenuVisible>`
  ${({ theme, visible }) => css`
    cursor: pointer;
    // position: relative;
    // z-index: 6;
    // position: fixed;
    // top: 2rem;
    // right: 2rem;
    // width: 4rem;
    // height: 4rem;
    background-color: black;
    color: ${theme.colors.white};
    border: none;
    display: none;
    // pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) =>
    css`
      display: none;

      @media ${theme.media.lteMedium} {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
      }
    `}
`;

export const Link = styled.a`
  ${() => css``}
`;

export const Container = styled.div<MenuVisible>`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 49px;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: transparent;
    transition: all 300ms ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      background: black;
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`;
