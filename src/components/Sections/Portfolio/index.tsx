import * as Styled from './styles';
import Button from './components/Button';

/*
const portfolioInfo = {
  title: 'Celebrando belezas femininas',
  text:
    'Hoje meu foco é valorizar mulheres em todos os momentos. Seja para uma comemoração, ou simplesmente por querer se amar e se sentir maravilhosa. Aqui você vai encontrar um pouco do que eu faço, e se identificar com qual estilo você gostaria de fazer o seu ensaio! ',
  srcImg: 'https://i.imgur.com/XLWS72x.png',
  background: true,
  backgroundImg: 'https://i.imgur.com/HiKn6r3.png',
  sectionId: 'portfolio',
  component: 'section.section-two-columns',
};*/

export const Portfolio = () => {
  return (
    <Styled.Background id="portfolio">
      <Styled.SectionContainer>
        <Styled.Container>
          <Styled.TextContainer1>
            <Styled.SvgContainer>
              <svg
                width="50"
                height="48"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1002 33.2154L12.4588 2.91944e-05L42.6588 14.4868L15.1002 33.2154Z"
                  fill="#F98EB2"
                />
                <path
                  d="M46.8673 42.9298L35.766 42.621L41.6434 33.1295L46.8673 42.9298Z"
                  fill="#8EE7F9"
                />
              </svg>
            </Styled.SvgContainer>

            <Styled.Title1>Celebrando belezas femininas</Styled.Title1>
            <Styled.SubTitle1>
              Hoje meu foco é valorizar mulheres em todos os momentos. Seja para
              uma comemoração, ou simplesmente por querer se amar e se sentir
              maravilhosa. Aqui você vai encontrar um pouco do que eu faço, e se
              identificar com qual estilo você gostaria de fazer o seu ensaio!
            </Styled.SubTitle1>

            <Styled.CarouselActions>
              <Styled.ButtonsContainer>
                <Button direction="left" disabled={true} />

                <Button direction="right" />
              </Styled.ButtonsContainer>

              <Styled.Indicators>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="5" fill="white" />
                  <circle opacity="0.5" cx="8" cy="8" r="7.5" stroke="white" />
                </svg>

                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.5" cx="5" cy="5" r="4.5" stroke="white" />
                </svg>

                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.5" cx="5" cy="5" r="4.5" stroke="white" />
                </svg>

                <svg
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4066 2.42589C13.86 1.87093 13.86 0.971172 14.4066 0.416217C14.9532 -0.138739 15.8394 -0.138739 16.386 0.416217L23.8509 7.99516C24.3975 8.55012 24.3975 9.44988 23.8509 10.0048L16.386 17.5838C15.8394 18.1387 14.9532 18.1387 14.4066 17.5838C13.86 17.0288 13.86 16.1291 14.4066 15.5741L19.4821 10.4211H1.39967C0.626652 10.4211 0 9.78483 0 9C0 8.21517 0.626652 7.57895 1.39967 7.57895H19.4821L14.4066 2.42589Z"
                    fill="white"
                  />
                </svg>
              </Styled.Indicators>
            </Styled.CarouselActions>
          </Styled.TextContainer1>

          {/*
            <Styled.CarouselContainer>
            <Styled.Carousel>
              <Styled.CarouselList>
                <Styled.CarouselItem>
                  <Styled.CarouselImage src="https://i.imgur.com/IZ7ZMLz.png" />
                </Styled.CarouselItem>

                <Styled.CarouselItem>
                  <Styled.CarouselImage src="https://i.imgur.com/OUH0WMi.png" />
                </Styled.CarouselItem>

                <Styled.CarouselItem>
                  <Styled.CarouselImage src="https://i.imgur.com/oSrPh4X.png" />
                </Styled.CarouselItem>

                <Styled.CarouselItem>
                  <Styled.CarouselImage src="https://i.imgur.com/IZ7ZMLz.png" />
                </Styled.CarouselItem>

                <Styled.CarouselItem>
                  <Styled.CarouselImage src="https://i.imgur.com/OUH0WMi.png" />
                </Styled.CarouselItem>

                <Styled.CarouselItem>
                  <Styled.CarouselImage src="https://i.imgur.com/oSrPh4X.png" />
                </Styled.CarouselItem>
              </Styled.CarouselList>
            </Styled.Carousel>
          </Styled.CarouselContainer>
            */}
        </Styled.Container>
      </Styled.SectionContainer>
    </Styled.Background>
  );
};
