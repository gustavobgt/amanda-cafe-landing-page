import styled, { css } from 'styled-components';

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
