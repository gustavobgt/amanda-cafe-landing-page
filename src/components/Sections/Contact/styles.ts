import styled, { css } from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: flex-start;
    grid-gap: 6rem;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      grid-gap: 0;
    }
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    padding-top: 49px;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 0.05px solid rgba(255, 255, 255, 0.5);

    background: url('https://i.imgur.com/4z5367A.png') no-repeat,
      ${theme.colors.background};
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    color: ${theme.colors.white};
  `}
`;

export const SectionContainer = styled.div`
  ${() => css`
    margin: 0 auto;
    padding: 5%;
    width: 100%;
  `}
`;

export const TextContainer1 = styled.div`
  ${({ theme }) => css`
    z-index: 1;
    > h2 {
      margin: 0;
    }

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
      max-width: inherit;
    }
  `}
`;

export const Title1 = styled.h2`
  ${() => css`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 51px;
    letter-spacing: 0.01em;

    color: #ffffff;
    text-align: left;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    min-height: 160px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 20px;
    max-width: 346px;
    text-align: left;

    letter-spacing: 0.03em;

    @media ${theme.media.lteMedium} {
      max-width: inherit;
      min-height: inherit;
    }

    color: #ffffff;
  `}
`;

export const Whatsapp = styled.a`
  ${() => css`
    background: url('https://i.imgur.com/9siGmM3.png') no-repeat, #000000;
    background-position: 90% 0%;
    width: 100%;
    height: 38px;
    border-radius: 4px;
    margin-bottom: 8px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }
  `}
`;

export const Instagram = styled.a`
  ${() => css`
    background: url('https://i.imgur.com/sehzwjH.png') no-repeat, #000000;
    background-position: 90% 0%;
    width: 100%;
    height: 38px;
    border-radius: 4px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }
  `}
`;

export const Email = styled.a`
  ${() => css`
    background: url('https://i.imgur.com/z1cqZ2G.png') no-repeat, #000000;
    background-position: 90% 0%;
    width: 100%;
    height: 38px;
    border-radius: 4px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }
  `}
`;

export const SvgContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      display: flex;
      margin-bottom: 10px;
    }
  `}
`;

export const Form = styled(FormikForm)`
  ${() => css`
    border: 1px solid;
    border-image-slice: 1;
    border-radius: 8px;

    background: linear-gradient(
      306.59deg,
      rgba(255, 255, 255, 0.3) 22.77%,
      rgba(255, 255, 255, 0) 100%
    );
    // filter: drop-shadow(-12px 15px 40px rgba(0, 0, 0, 0.15));
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    padding: 30px 40px 46px 40px;
  `}
`;

export const Group = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 14px;

      @media ${theme.media.lteMedium} {
        align-items: flex-start;
        justify-content: center;
      }
    `}
`;

export const TextAreaGroup = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 18px;

      @media ${theme.media.lteMedium} {
        align-items: flex-start;
        justify-content: center;
      }
    `}
`;

export const GroupRow = styled.div`
  ${({ theme }) =>
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;

      @media ${theme.media.lteMedium} {
        grid-template-columns: 1fr;
        text-align: center;
        grid-gap: 0;
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

export const Input = styled.input`
  ${() =>
    css`
      width: 100%;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      letter-spacing: 0.01em;

      color: #ffffff;
      border: none;
      height: 30px;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
      box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);
      border-radius: 4px;

      padding-left: 10px;

      ::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      :focus {
        outline: none;
      }
    `}
`;

export const SvgContainer3 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: -1;

    div:nth-child(1) {
      position: relative;

      > svg {
        position: absolute;
        right: -3rem;
        bottom: 5rem;
      }
    }

    @media ${theme.media.lteMedium} {
      div:nth-child(1) {
        position: relative;

        > svg {
          margin-right: 0;
        }
      }
    }
  `}
`;

export const SvgContainer2 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    position: relative;
    z-index: -1;

    div:nth-child(1) {
      position: relative;

      > svg {
        position: absolute;
        left: -10rem;
        top: 4rem;
      }
    }

    @media ${theme.media.lteMedium} {
      div:nth-child(1) {
        position: relative;

        > svg {
          margin-right: 0;
          left: -4rem;
          top: -5rem;
        }
      }
    }
  `}
`;

export const SvgContainer1 = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;

    div:nth-child(1) {
      position: relative;

      > svg {
        position: absolute;
        right: 4rem;
        bottom: -2rem;
      }
    }

    @media ${theme.media.lteMedium} {
      div:nth-child(1) {
        position: relative;

        > svg {
          margin-right: 0;
        }
      }
    }
  `}
`;

export const TextArea = styled.textarea`
  ${() => css`
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
    margin-bottom: 10px;

    padding-left: 10px;

    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    :focus {
      outline: none;
    }
  `}
`;

export const SubmitButton = styled.button`
  ${() => css`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;

    /* Black */

    background: #000000;
    border-radius: 4px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #ffffff;
    border-color: transparent;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }
  `}
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

export const ModalTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
  /* or 113% */
  max-width: 484px;

  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 0 50px;
`;

export const BuyButton = styled.button`
  ${() => css`
    width: 100%;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;

    /* Black */

    background: #000000;
    border-radius: 4px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #ffffff;
    border: 1px solid #000000;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }
  `}
`;

export const DetailsButton = styled.button`
  ${() => css`
    width: 100%;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #ffffff;
    border: 1px solid #ffffff;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }
  `}
`;

export const OkCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const OkButton = styled.button`
  ${() => css`
    width: 180px;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;

    /* Black */

    background: #000000;
    border-radius: 4px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */

    letter-spacing: 0.07em;
    text-transform: uppercase;

    color: #ffffff;
    border: 1px solid #000000;

    &:hover {
      opacity: 0.7;
      transition: 0.25s;
    }
  `}
`;
