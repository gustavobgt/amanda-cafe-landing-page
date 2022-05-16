import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 30rem 1fr;
      text-align: center;
      height: 100%;
    }

    @media ${theme.media.lteMedium2} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 14rem 1fr;
      text-align: center;
      height: 100%;
    }

    @media ${theme.media.lteMedium3} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0.1px 1fr;
      text-align: center;
      height: 100%;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
`;

export const SocialContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: flex-end;

    @media ${theme.media.lteMedium} {
      padding: 10px 5%;
    }
  `}
`;
