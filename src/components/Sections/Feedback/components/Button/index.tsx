import React, { ComponentPropsWithoutRef } from 'react';

import { Button } from './styles';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  direction?: 'left' | 'right';
};

export default function ButtonComponent(props: ButtonProps) {
  const { direction, ...rest } = props;

  return (
    <Button {...rest}>
      {direction === 'left' ? (
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66989 0.277478C7.03986 0.647448 7.03986 1.24729 6.66989 1.61726L2.28715 6L6.66989 10.3827C7.03986 10.7527 7.03986 11.3526 6.66989 11.7225C6.29992 12.0925 5.70008 12.0925 5.33011 11.7225L0.277478 6.66989C-0.0924926 6.29992 -0.0924926 5.70008 0.277478 5.33011L5.33011 0.277478C5.70008 -0.0924926 6.29992 -0.0924926 6.66989 0.277478Z"
            fill={!rest.disabled ? 'white' : '#BBBBBB'}
          />
        </svg>
      ) : (
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.33011 0.277478C-0.0398602 0.647448 -0.0398602 1.24729 0.33011 1.61726L4.71285 6L0.33011 10.3827C-0.0398602 10.7527 -0.0398602 11.3526 0.33011 11.7225C0.70008 12.0925 1.29992 12.0925 1.66989 11.7225L6.72252 6.66989C7.09249 6.29992 7.09249 5.70008 6.72252 5.33011L1.66989 0.277478C1.29992 -0.0924926 0.70008 -0.0924926 0.33011 0.277478Z"
            fill={!rest.disabled ? 'white' : '#BBBBBB'}
          />
        </svg>
      )}
    </Button>
  );
}
