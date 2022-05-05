import * as Styled from './styles';
import { useState } from 'react';
import Carousel from 'react-elastic-carousel';

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
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const Store = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              <Styled.BuyButton>
                COMPRAR{' '}
                <svg
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.199703 0.88134C-0.0665641 1.14761 -0.0665641 1.57931 0.199703 1.84558L3.35395 4.99982L0.199703 8.15406C-0.0665641 8.42033 -0.0665641 8.85203 0.199703 9.1183C0.465969 9.38457 0.897672 9.38457 1.16394 9.1183L4.8003 5.48194C5.06657 5.21567 5.06657 4.78397 4.8003 4.5177L1.16394 0.88134C0.897672 0.615074 0.465969 0.615074 0.199703 0.88134Z"
                    fill="white"
                  />
                </svg>
              </Styled.BuyButton>

              <Styled.DetailsButton>VER MAIS</Styled.DetailsButton>
            </Styled.ButtonsContainer>
          </Styled.TextContainer1>

          <div>
            <Styled.PrincipalImageContainer>
              <Styled.PrincipalImage src={data[currentIndex].photo} />
            </Styled.PrincipalImageContainer>
            <Carousel isRTL={true} breakPoints={breakPoints}>
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
            </Carousel>
          </div>
        </Styled.Container>
      </Styled.SectionContainer>
    </Styled.Background>
  );
};
