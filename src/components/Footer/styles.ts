import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;

export const Container2 = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: 5%;
    width: 100%;

    @media ${theme.media.lteMedium} {
      padding: 0;
    }
  `}
`;
