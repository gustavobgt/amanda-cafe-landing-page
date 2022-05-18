import styled, { css } from 'styled-components';
import { ErrorMessage as FormikErrorMessage } from 'formik';

interface Props {
  hasError: boolean;
}

export const TextArea = styled.textarea<Props>`
  ${({ hasError }) => css`
    resize: none;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    letter-spacing: 0.01em;

    color: #ffffff;
    min-height: 83px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: ${hasError
      ? '1px solid red'
      : '1px solid rgba(255, 255, 255, 0.2)'};

    padding-left: 10px;

    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    :focus {
      outline: none;
    }
  `}
`;

export const Label = styled.label`
  ${() => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    letter-spacing: 0.01em;

    color: #ffffff;
    margin-bottom: 5px;
  `}
`;

export const FloatError = styled.div`
  ${() => css`
    position: relative;
    width: 100%;
  `}
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  ${() => css`
    position: absolute;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 143% */

    letter-spacing: 0.01em;

    color: #ffffff;
    color: red;
  `}
`;
