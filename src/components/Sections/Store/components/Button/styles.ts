import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${() => css`
    cursor: pointer;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    background: #000000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

    &:disabled {
      background: #f0f0f0;
      cursor: not-allowed;
    }
  `}
`;
