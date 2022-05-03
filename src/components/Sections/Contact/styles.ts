import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: flex-start;
    grid-gap: 6rem;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
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
  `}
`;

export const SvgContainer = styled.div``;

export const Form = styled.form`
  ${() => css`
    background: linear-gradient(
      306.59deg,
      rgba(255, 255, 255, 0.3) 22.77%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: drop-shadow(-12px 15px 40px rgba(0, 0, 0, 0.15));
    backdrop-filter: blur(20px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
    padding: 30px 40px 46px 40px;
    min-height: 464px;
  `}
`;

export const Group = styled.div`
  ${() =>
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    `}
`;

export const GroupRow = styled.div`
  ${() =>
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
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
      background: transparent;
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

export const TextArea = styled.textarea`
  ${() => css`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    letter-spacing: 0.01em;

    color: #ffffff;
    min-height: 83px;
    background: transparent;
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
