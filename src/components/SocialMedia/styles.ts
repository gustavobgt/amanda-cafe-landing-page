import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    position: fixed;
    bottom: 2rem;
    right: 10rem;
    z-index: 3;
  `}
`;

export const Footer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;
  `}
`;

export const Link = styled.a`
  ${() => css`
    :hover > svg > path {
      fill: white;
      color: white;
      transition: 0.25s;
    }
  `}
`;
