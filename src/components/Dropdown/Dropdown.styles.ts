import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export function getStyles(hasError: boolean) {
  return {
    wrapperStyles: css`
      user-select: none;
      position: relative;
      border-radius: 0.4rem;
      border: ${hasError
        ? '1px solid red'
        : '1px solid rgba(255, 255, 255, 0.4)'};
      box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);
      width: 100%;
    `,
    fieldStyles: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 0.4rem;
      border: none;
    `,
    inputStyles: css`
      cursor: pointer;
      padding-left: 1rem;
      width: 100%;
      border: none;
      font-family: 'Montserrat';
      font-size: 14px;
      color: #ffffff;
      height: 30px;
      background: rgba(255, 255, 255, 0.2);

      ::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    `,
    iconButtonStyles: css`
      background: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      padding: 0 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
    `,
    menuStyles: css`
      z-index: 1;
      position: absolute;
      top: 110%;
      background: rgba(188, 0, 255, 0.9);
      box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.4);
      font-weight: 500;
      width: 100%;
      border-radius: 0.4rem;
      max-height: 215px;
      overflow: hidden;
      overflow-y: auto;
    `,
    itemStyles: css`
      text-align: left;
      font-family: 'Montserrat';
      font-size: 14px;
      color: #ffffff;
      padding: 10px;
      cursor: pointer;
      transition: all 0.2s;

      :hover {
        background: rgba(255, 255, 255, 0.1);
        transition: 0.25s;
      }
    `,
  };
}

interface DropdownStyleProps {
  styles: FlattenSimpleInterpolation;
}

const Wrapper = styled.div<DropdownStyleProps>`
  ${({ styles }) => styles};
`;

const Field = styled.div<DropdownStyleProps>`
  ${({ styles }) => styles};
`;

const Input = styled.input<DropdownStyleProps>`
  ${({ styles }) => styles};
`;

interface IconButtonStyleProps {
  styles: FlattenSimpleInterpolation;
  isActive: boolean;
}

const IconButton = styled.button<IconButtonStyleProps>`
  ${({ styles, isActive }) =>
    css`
      svg {
        transition: all 0.25s ease-in-out;
        ${isActive ? 'transform: rotate(180deg);' : ''}
      }

      ${styles}
    `};
`;

const Menu = styled.div<DropdownStyleProps>`
  ${({ styles }) => styles};
`;

export const Item = styled.div<DropdownStyleProps>`
  ${({ styles }) => styles};
`;

const Dropdown = {
  Wrapper,
  Field,
  Input,
  IconButton,
  Menu,
  Item,
};

export default Dropdown;
