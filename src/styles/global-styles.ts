import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    scroll-behavior: smooth;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.secondary};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar-track {
	background-color: #e6e7e8;
  }

  ::-webkit-scrollbar {
	width: 0.6rem;
  }

  ::-webkit-scrollbar-thumb {
	border-radius: 0.4rem;
	background-image: linear-gradient(109.13deg, #9100FF 5.77%, #BC00FF 77.99%);
  }

  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid rgba(255, 255, 255, 0.2);
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.001) inset;
  transition: background-color 5000s ease-in-out 0s;
}
`;
