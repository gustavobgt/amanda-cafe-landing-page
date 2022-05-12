import * as Styled from './styles';
import { useState } from 'react';
import Modal from 'react-modal';
import Button from './components/Button';
import Carousel from 'react-elastic-carousel';

import { useWindowDimensions } from './useWindowDimensions';

const data = [
  {
    id: 1,
    title: 'Preset: Fairytail',
    price: 'R$ 35,00',
    description:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',
    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 2,
    title: 'Preset: Cold as your heart',
    price: 'R$ 36,00',
    description:
      'Com nome de música de Diva Pop, esse preset traz tons mais frios às fotos, dando aquele aspecto de chique na neve. Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',
    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 3,
    title: 'Preset: Fairytail 3',
    price: 'R$ 37,00',
    description:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',

    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 4,
    title: 'Preset: Fairytail 4',
    price: 'R$ 38,00',
    description:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',

    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
  {
    id: 5,
    title: 'Preset: Fairytail 5',
    price: 'R$ 39,00',
    description:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',

    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
    modal_image: 'https://i.imgur.com/nQL9Rj3.png',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 380, itemsToShow: 2, itemsToScroll: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
];

export const Store = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

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
      <Styled.Background id="loja">
        <Styled.SectionContainer>
          <Styled.Container>
            <Styled.TextContainer1 data-aos="fade-right">
              <Styled.Title1>{data[currentIndex].title}</Styled.Title1>

              <Styled.SubTitle>{data[currentIndex].price}</Styled.SubTitle>

              <Styled.Description>
                {data[currentIndex].description}
              </Styled.Description>

              <Styled.ButtonsContainer>
                <Styled.BuyButton
                  target="_blank"
                  href="https://www.youtube.com/"
                >
                  COMPRAR{' '}
                  <svg
                    width="5"
                    height="10"
                    viewBox="0 0 5 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: 10 }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.199703 0.88134C-0.0665641 1.14761 -0.0665641 1.57931 0.199703 1.84558L3.35395 4.99982L0.199703 8.15406C-0.0665641 8.42033 -0.0665641 8.85203 0.199703 9.1183C0.465969 9.38457 0.897672 9.38457 1.16394 9.1183L4.8003 5.48194C5.06657 5.21567 5.06657 4.78397 4.8003 4.5177L1.16394 0.88134C0.897672 0.615074 0.465969 0.615074 0.199703 0.88134Z"
                      fill="white"
                    />
                  </svg>
                </Styled.BuyButton>

                <Styled.DetailsButton
                  target="_blank"
                  href="https://www.youtube.com/"
                >
                  VER MAIS
                </Styled.DetailsButton>
              </Styled.ButtonsContainer>
            </Styled.TextContainer1>

            <Styled.RightSideContainer data-aos="fade-left">
              <Styled.PrincipalImageContainer>
                <Styled.PrincipalImage src={data[currentIndex].photo} />
              </Styled.PrincipalImageContainer>

              <div style={{ display: 'flex' }}>
                <Styled.ECarousel
                  breakPoints={width > 1100 ? [] : breakPoints}
                  itemsToShow={3}
                  itemPadding={[5, 5, 5, 5]}
                  verticalMode={width > 1100}
                  renderPagination={({ pages, activePage, onClick }) => {
                    return (
                      <Styled.Pagination>
                        {width > 1100 ? (
                          <Styled.NextButton
                            visible={!(activePage === 0)}
                            onClick={() => onClick(activePage - 1)}
                          >
                            <svg
                              width="18"
                              height="25"
                              viewBox="0 0 18 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.42589 9.85426C1.87093 10.4009 0.971171 10.4009 0.416215 9.85426C-0.13874 9.30766 -0.13874 8.42144 0.416215 7.87484L7.99516 0.409954C8.55012 -0.136649 9.44988 -0.136649 10.0048 0.409954L17.5838 7.87484C18.1387 8.42144 18.1387 9.30766 17.5838 9.85426C17.0288 10.4009 16.1291 10.4009 15.5741 9.85426L10.4211 4.77876L10.421 22.8612C10.421 23.6342 9.78482 24.2609 9 24.2609C8.21517 24.2609 7.57894 23.6342 7.57894 22.8612L7.57895 4.77876L2.42589 9.85426Z"
                                fill="white"
                              />
                            </svg>
                          </Styled.NextButton>
                        ) : (
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
                        )}

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

                        {width > 1100 ? (
                          <Styled.NextButton
                            visible={!(pages.length === activePage + 1)}
                            onClick={() => onClick(activePage + 1)}
                          >
                            <svg
                              width="18"
                              height="25"
                              viewBox="0 0 18 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.5741 14.4066C16.1291 13.86 17.0288 13.86 17.5838 14.4066C18.1387 14.9532 18.1387 15.8394 17.5838 16.386L10.0048 23.8509C9.44988 24.3975 8.55012 24.3975 7.99516 23.8509L0.416217 16.386C-0.138739 15.8394 -0.138739 14.9532 0.416217 14.4066C0.971172 13.86 1.87093 13.86 2.42589 14.4066L7.57895 19.4821L7.57895 1.39967C7.57895 0.626652 8.21517 -4.27708e-07 9 -3.93402e-07C9.78483 -3.59097e-07 10.4211 0.626652 10.4211 1.39967L10.4211 19.4821L15.5741 14.4066Z"
                                fill="white"
                              />
                            </svg>
                          </Styled.NextButton>
                        ) : (
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
                        )}
                      </Styled.Pagination>
                    );
                  }}
                  showArrows={false}
                >
                  {data.map((item, index) => (
                    <Styled.ItemContainer
                      onClick={() => {
                        setCurrentIndex(index);
                        openModal();
                      }}
                      key={item.id}
                    >
                      <Styled.CarouselImageContainer>
                        <Styled.CarouselImage src={item.carousel_image} />

                        <Styled.CarouselImageOverlay>
                          <Styled.CarouselImageText>
                            {item.title}
                          </Styled.CarouselImageText>
                        </Styled.CarouselImageOverlay>
                      </Styled.CarouselImageContainer>
                    </Styled.ItemContainer>
                  ))}
                </Styled.ECarousel>
              </div>
            </Styled.RightSideContainer>
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
              <Styled.ModalPagination>
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
              </Styled.ModalPagination>
            );
          }}
        >
          {data.map((item, index) => (
            <Styled.ModalImageContainer
              onClick={() => setCurrentIndex(index)}
              key={item.id}
            >
              <Styled.ModalImage src={item.modal_image} />
            </Styled.ModalImageContainer>
          ))}
        </Carousel>
      </Modal>
    </>
  );
};
