import * as Styled from './styles';
import Button from './components/Button';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';

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

const data = [
  {
    id: 1,
    image: 'https://i.imgur.com/IZ7ZMLz.png',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/OUH0WMi.png',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/oSrPh4X.png',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/IZ7ZMLz.png',
  },
  {
    id: 5,
    image: 'https://i.imgur.com/OUH0WMi.png',
  },
  {
    id: 6,
    image: 'https://i.imgur.com/oSrPh4X.png',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 380, itemsToShow: 2, itemsToScroll: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 1 },
];

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = (params) => {
    console.log('onChange = ', params);
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === 'PREV' ? 'left' : 'right';

    return (
      <Styled.ButtonContainer>
        <Button onClick={onClick} direction={pointer} disabled={isEdge} />
      </Styled.ButtonContainer>
    );
  };

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

            {/**
             * <Styled.CarouselActions>
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
             */}
          </Styled.TextContainer1>

          <Styled.CarouselContainer>
            <Carousel
              selectedItem={1}
              onChange={onChange}
              breakPoints={breakPoints}
              renderArrow={myArrow}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <Styled.Pagination>
                    <Styled.NextButton
                      visible={!(activePage === 0)}
                      onClick={() => onClick(activePage - 1)}
                    >
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 25 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2239 15.5741C10.7705 16.1291 10.7705 17.0288 10.2239 17.5838C9.67729 18.1387 8.79107 18.1387 8.24447 17.5838L0.779585 10.0048C0.232981 9.44988 0.232981 8.55012 0.779585 7.99516L8.24447 0.416217C8.79107 -0.138738 9.67729 -0.138738 10.2239 0.416217C10.7705 0.971173 10.7705 1.87093 10.2239 2.42589L5.14839 7.57895L23.2308 7.57895C24.0038 7.57895 24.6305 8.21518 24.6305 9C24.6305 9.78483 24.0038 10.4211 23.2308 10.4211L5.14839 10.4211L10.2239 15.5741Z"
                          fill="white"
                        />
                      </svg>
                    </Styled.NextButton>

                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        <Styled.DotContainer
                          key={page}
                          onClick={() => onClick(page)}
                        >
                          <Styled.Dot active={isActivePage} />
                        </Styled.DotContainer>
                      );
                    })}

                    <Styled.NextButton
                      visible={!(pages.length === activePage + 1)}
                      onClick={() => onClick(activePage + 1)}
                    >
                      <svg
                        width="25"
                        height="18"
                        viewBox="0 0 25 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.7762 2.42589C14.2296 1.87093 14.2296 0.971172 14.7762 0.416217C15.3228 -0.138739 16.2091 -0.138739 16.7557 0.416217L24.2205 7.99516C24.7671 8.55012 24.7671 9.44988 24.2205 10.0048L16.7557 17.5838C16.2091 18.1387 15.3228 18.1387 14.7762 17.5838C14.2296 17.0288 14.2296 16.1291 14.7762 15.5741L19.8517 10.4211L1.76929 10.4211C0.996281 10.4211 0.369629 9.78483 0.369629 9C0.369629 8.21517 0.996281 7.57895 1.76929 7.57895L19.8517 7.57895L14.7762 2.42589Z"
                          fill="white"
                        />
                      </svg>
                    </Styled.NextButton>
                  </Styled.Pagination>
                );
              }}
            >
              {data.map((item, index) => (
                <Styled.CarouselImageContainer
                  onClick={() => setCurrentIndex(index)}
                  key={item.id}
                >
                  <Styled.CarouselImage src={item.image} />

                  <Styled.CarouselImageOverlay>
                    <Styled.CarouselImageText>Sensual</Styled.CarouselImageText>
                  </Styled.CarouselImageOverlay>
                </Styled.CarouselImageContainer>
              ))}
            </Carousel>
          </Styled.CarouselContainer>
        </Styled.Container>
      </Styled.SectionContainer>
    </Styled.Background>
  );
};
