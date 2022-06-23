import useOutsideClick from './useOutsideClick';
import React, {
  useState,
  useRef,
  createContext,
  useContext,
  PropsWithChildren,
  MouseEvent,
} from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import Dropdown, { getStyles } from './Dropdown.styles';
import { DropdownProps, DropdownItemProps } from './Dropdown.types';

type DropdownContextType = {
  itemStyles: FlattenSimpleInterpolation;
  onChange: (value: string) => void;
  onCloseMenu: () => void;
  onInputChange: (value: string) => void;
} | null;

const DropdownContext = createContext<DropdownContextType>(null);

export function DropdownComponent(props: PropsWithChildren<DropdownProps>) {
  const { onChange = () => null, children, hasError, ...rest } = props;

  const {
    wrapperStyles,
    iconButtonStyles,
    fieldStyles,
    inputStyles,
    menuStyles,
    itemStyles,
  } = getStyles(hasError);

  const wrapperRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function onClick() {
    setIsActive(!isActive);
  }

  function onCloseMenu() {
    setIsActive(false);
  }

  function onInputChange(value: string) {
    setInputValue(value);
  }

  useOutsideClick(wrapperRef, onCloseMenu);

  return (
    <Dropdown.Wrapper styles={wrapperStyles}>
      <Dropdown.Field styles={fieldStyles}>
        <Dropdown.Input
          {...rest}
          styles={inputStyles}
          readOnly
          onClick={onClick}
          value={inputValue}
          placeholder="Selecionar"
        />

        <Dropdown.IconButton
          styles={iconButtonStyles}
          onClick={onClick}
          isActive={isActive}
          type="button"
          aria-label="Abrir caixa de seleção do Assunto"
        >
          <svg
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.43665 0.199703C8.17039 -0.0665641 7.73868 -0.0665641 7.47242 0.199703L4.31817 3.35395L1.16393 0.199703C0.897663 -0.0665642 0.465961 -0.0665642 0.199694 0.199703C-0.0665731 0.465969 -0.0665731 0.897672 0.199694 1.16394L3.83606 4.8003C4.10232 5.06657 4.53403 5.06657 4.80029 4.8003L8.43665 1.16394C8.70292 0.897672 8.70292 0.465969 8.43665 0.199703Z"
              fill="white"
            />
          </svg>
        </Dropdown.IconButton>
      </Dropdown.Field>

      {isActive ? (
        <Dropdown.Menu styles={menuStyles} ref={wrapperRef} role="menu">
          <DropdownContext.Provider
            value={{
              itemStyles,
              onChange,
              onCloseMenu,
              onInputChange,
            }}
          >
            {children}
          </DropdownContext.Provider>
        </Dropdown.Menu>
      ) : null}
    </Dropdown.Wrapper>
  );
}

function DropdownItemComponent(props: PropsWithChildren<DropdownItemProps>) {
  const { value, children } = props;
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error(
      `Dropdown.Item compound component cannot be rendered outside the Dropdown component.`,
    );
  }

  const { itemStyles, onChange, onCloseMenu, onInputChange } = context;

  function onClick(event: MouseEvent<HTMLDivElement>) {
    const div = event.target as HTMLElement;
    onInputChange(div.innerText);
    onChange(value);
    onCloseMenu();
  }

  return (
    <Dropdown.Item styles={itemStyles} onClick={onClick} role="menuitem">
      {children}
    </Dropdown.Item>
  );
}

DropdownComponent.Item = DropdownItemComponent;
