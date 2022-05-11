import * as Styled from './styles';
import { useState } from 'react';

import { useWindowDimensions } from './useWindowDimensions';

const data = [
  {
    title: 'Preset: Fairytail',
    price: 'R$ 35,00',
    description:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',
    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
  },
  {
    title: 'Preset: Cold as your heart',
    price: 'R$ 36,00',
    description:
      'Com nome de música de Diva Pop, esse preset traz tons mais frios às fotos, dando aquele aspecto de chique na neve. Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',
    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
  },
  {
    title: 'Preset: Fairytail 3',
    price: 'R$ 37,00',
    description:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',

    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
  },
  {
    title: 'Preset: Fairytail 4',
    price: 'R$ 38,00',
    description:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',

    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
  },
  {
    title: 'Preset: Fairytail 5',
    price: 'R$ 39,00',
    description:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',

    buy_link: 'https://www.instagram.com/grazisteves/',
    details_link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/iV9iOSY.png',
    carousel_image: 'https://i.imgur.com/iPBw99r.png',
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 380, itemsToShow: 2, itemsToScroll: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
];

export const Store = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();

  return (
    <Styled.Background id="loja">
      <Styled.SectionContainer>
        <Styled.Container>
          <Styled.TextContainer1>
            <Styled.Title1>{data[currentIndex].title}</Styled.Title1>

            <Styled.SubTitle>{data[currentIndex].price}</Styled.SubTitle>

            <Styled.Description>
              {data[currentIndex].description}
            </Styled.Description>

            <Styled.ButtonsContainer>
              <Styled.BuyButton target="_blank" href="https://www.youtube.com/">
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

          <Styled.RightSideContainer>
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
                    onClick={() => setCurrentIndex(index)}
                    key={index}
                  >
                    <Styled.PhotoContainer backgroundImg={item.carousel_image}>
                      <Styled.Image src={item.carousel_image} />

                      <Styled.ImageTitleContainer>
                        <Styled.ImageTitle>{item.title}</Styled.ImageTitle>
                      </Styled.ImageTitleContainer>
                    </Styled.PhotoContainer>
                  </Styled.ItemContainer>
                ))}
              </Styled.ECarousel>
            </div>
          </Styled.RightSideContainer>
        </Styled.Container>
      </Styled.SectionContainer>
    </Styled.Background>
  );
};
