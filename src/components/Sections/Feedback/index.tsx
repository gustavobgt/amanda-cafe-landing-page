import * as Styled from './styles';
import Button from '../../Button';
import { useState } from 'react';
/*
const portfolioInfo = {
        title: 'Graziele Esteves',
        text:
          'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
        srcImg: 'https://i.imgur.com/TDwbEQg.png',
        background: true,
        backgroundImg: 'https://i.imgur.com/rndYNNe.png',
        sectionId: 'feedbacks',
        component: 'section.section-two-columns',
      };*/

const data = [
  {
    name: 'Graziele Esteves 1',
    feedback:
      'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
    instagram: '@Graziesteves1',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/TDwbEQg.png',
    avatar: 'https://i.imgur.com/MAK6oUW.png',
  },
  {
    name: 'Graziele Esteves 2',
    feedback:
      'Ei, Mari, percebi que você se encarregou de organizar as atividades de construção e integração das equipes. Você faz um ótimo trabalho e todos se divertem muito em seus eventos. Nos avise caso precise de ajuda com os eventos futuros, será um prazer contribuir.',
    instagram: '@Graziesteves2',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/Y1tmAyg.png',
    avatar: 'https://i.imgur.com/pkT2bvI.png',
  },
  {
    name: 'Graziele Esteves 3',
    feedback:
      'Estou muito feliz com sua determinação em terminar este projeto, Lu. Sei que não foi fácil, mas sabia que você conseguiria. Sua atitude prestativa deixa claro que você pode continuar a assumir novas responsabilidades, desafios e crescer com a empresa. Obrigado pelo seu esforço extra.',
    instagram: '@Graziesteves3',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/TDwbEQg.png',
    avatar: 'https://i.imgur.com/86h7xwe.png',
  },
  {
    name: 'Graziele Esteves 4',
    feedback:
      'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
    instagram: '@Graziesteves4',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/Y1tmAyg.png',
    avatar: 'https://i.imgur.com/86h7xwe.png',
  },
  {
    name: 'Graziele Esteves 5',
    feedback:
      'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
    instagram: '@Graziesteves5',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/TDwbEQg.png',
    avatar: 'https://i.imgur.com/pkT2bvI.png',
  },
];

export const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Styled.Background id="feedbacks">
      <Styled.SectionContainer>
        <Styled.Container>
          <Styled.PhotoContainer>
            <Styled.Photo src={data[currentIndex].photo} />
          </Styled.PhotoContainer>

          <Styled.TextContainer1>
            <Styled.Header>
              <Styled.SvgContainer>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 0H0V6H6V0ZM6 11H0V17H6V11ZM11 0H17V6H11V0ZM17 11H11V17H17V11Z"
                    fill="white"
                  />
                </svg>
              </Styled.SvgContainer>

              <Styled.ButtonsContainer>
                <Button
                  direction="left"
                  disabled={currentIndex <= 0}
                  onClick={() => setCurrentIndex((prevState) => prevState - 1)}
                />

                <Button
                  disabled={currentIndex === data.length - 1}
                  direction="right"
                  onClick={() => setCurrentIndex((prevState) => prevState + 1)}
                />
              </Styled.ButtonsContainer>
            </Styled.Header>

            <Styled.Title1>{data[currentIndex].name}</Styled.Title1>

            <Styled.Description>
              {data[currentIndex].feedback}
            </Styled.Description>

            <Styled.Instagram target="_blank" href={data[currentIndex].link}>
              {data[currentIndex].instagram}
            </Styled.Instagram>

            <Styled.Avatars>
              {data.map(({ avatar }, key) => {
                return (
                  <Styled.AvatarContainer
                    isFocused={key === currentIndex}
                    key={key}
                  >
                    <Styled.AvatarImg
                      onClick={() => setCurrentIndex(key)}
                      src={avatar}
                    />
                  </Styled.AvatarContainer>
                );
              })}
            </Styled.Avatars>
          </Styled.TextContainer1>
        </Styled.Container>
      </Styled.SectionContainer>
    </Styled.Background>
  );
};
