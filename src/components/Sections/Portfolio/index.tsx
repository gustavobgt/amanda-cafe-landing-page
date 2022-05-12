import * as Styled from './styles';
import Button from './components/Button';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
import Modal from 'react-modal';

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
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/OUH0WMi.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/oSrPh4X.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/IZ7ZMLz.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 5,
    image: 'https://i.imgur.com/OUH0WMi.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 6,
    image: 'https://i.imgur.com/oSrPh4X.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 380, itemsToShow: 2, itemsToScroll: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 1 },
];

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    <>
      <Styled.Background id="portfolio">
        <Styled.SectionContainer>
          <Styled.Container>
            <Styled.TextContainer1 data-aos="fade-right">
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
                Hoje meu foco é valorizar mulheres em todos os momentos. Seja
                para uma comemoração, ou simplesmente por querer se amar e se
                sentir maravilhosa. Aqui você vai encontrar um pouco do que eu
                faço, e se identificar com qual estilo você gostaria de fazer o
                seu ensaio!
              </Styled.SubTitle1>
            </Styled.TextContainer1>

            <Styled.CarouselContainer data-aos="fade-left">
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
                    onClick={() => {
                      setCurrentIndex(index);
                      openModal();
                    }}
                    key={item.id}
                  >
                    <Styled.CarouselImage src={item.image} />

                    <Styled.CarouselImageOverlay>
                      <Styled.CarouselImageText>
                        Sensual
                      </Styled.CarouselImageText>
                    </Styled.CarouselImageOverlay>
                  </Styled.CarouselImageContainer>
                ))}
              </Carousel>
            </Styled.CarouselContainer>
          </Styled.Container>
        </Styled.SectionContainer>
      </Styled.Background>

      <Modal
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 6,
          },
          content: {
            backgroundColor: 'transparent',
            border: 'none',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            aligItems: 'center',
            justifyContent: 'center',
          },
        }}
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
      >
        <Styled.ModalClose>
          <Styled.ModalCloseButton onClick={closeModal}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.02301 0.0369911C0.245449 0.197192 -0.19608 1.05681 0.132136 1.77576C0.225913 1.97894 0.429094 2.20166 1.73024 3.5028L3.21894 4.99932L1.69117 6.53099C0.272801 7.95717 0.159488 8.08221 0.0813409 8.2932C-0.02025 8.57063 -0.0280647 8.93401 0.0657115 9.20362C0.15558 9.46541 0.534593 9.84442 0.796384 9.93429C1.06599 10.0281 1.42937 10.0203 1.7068 9.91866C1.91779 9.84051 2.04283 9.7272 3.46901 8.30883L5.00068 6.78106L6.4972 8.26976C8.19298 9.96164 8.20861 9.97336 8.7361 9.97336C9.6387 9.97336 10.2443 9.03951 9.86923 8.22287C9.77546 8.01969 9.57227 7.79697 8.27113 6.49583L6.78243 4.99932L8.3102 3.46764C9.74811 2.02192 9.84188 1.91642 9.92393 1.69761C10.0333 1.39284 10.0216 0.963032 9.89268 0.70124C9.78327 0.470707 9.5332 0.216729 9.30267 0.107324C9.03697 -0.0216188 8.61107 -0.0372477 8.30239 0.0760651C8.08358 0.158119 7.97808 0.251895 6.53236 1.6898L5.00068 3.21757L3.50417 1.72887C2.2421 0.466799 1.98031 0.220636 1.79666 0.138582C1.54659 0.0291767 1.26136 -0.00989628 1.02301 0.0369911Z"
                fill="white"
              />
            </svg>
          </Styled.ModalCloseButton>
        </Styled.ModalClose>
        <Styled.ModalHeader>
          <Styled.ModalTitle>Sensual</Styled.ModalTitle>
        </Styled.ModalHeader>

        <Carousel
          initialActiveIndex={currentIndex}
          onChange={onChange}
          itemsToShow={1}
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
              <Styled.CarouselImage src={item.modal_image} />
            </Styled.CarouselImageContainer>
          ))}
        </Carousel>
      </Modal>
    </>
  );
};
