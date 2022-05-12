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
    name: 'Viviane Rollemberg',
    feedback:
      'Já fotografei com outras pessoas mas, a experiência de fotografar com Amanda, posso definir como inesquecível. A empolgação dela te empolga, você sente que não falha! Você é a Gisele Bündchen naquele momento!',
    instagram: '@Graziesteves1',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/TDwbEQg.png',
    avatar: 'https://i.imgur.com/MAK6oUW.png',
  },
  {
    name: 'Carol Sampaio',
    feedback:
      'Pra mim todo mundo tem que fazer um ensaio, agora fazer um ensaio com Amanda é completamente diferenciado e surreal! Ela tem paciência, é super simpática e amiga, te deixa muito a vontade e tranquila. Enfim, se antes eu indicava que todos fizessem um ensaio, eu indico 3x mais que este ensaio seja feito com Amanda',
    instagram: '@Graziesteves2',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/Y1tmAyg.png',
    avatar: 'https://i.imgur.com/pkT2bvI.png',
  },
  {
    name: 'Victoria Lima',
    feedback:
      'Fazer ensaio com Amanda foi uma jornada de autoconhecimento pra mim. Não é só a forma como ela faz você se sentir cada minuto do ensaio, é como no fim de tudo ela te mostra o resultados das fotos e te prova que você é sim, tudo aquilo que você sentiu. Depois disso, você se enxerga de uma forma totalmente diferente, da forma que você merece!',
    instagram: '@Graziesteves3',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/TDwbEQg.png',
    avatar: 'https://i.imgur.com/86h7xwe.png',
  },
];

export const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Styled.Background id="feedbacks">
      <Styled.SectionContainer>
        <Styled.Container>
          <Styled.PhotoContainer data-aos="fade-right">
            <Styled.Photo src={data[currentIndex].photo} />
          </Styled.PhotoContainer>

          <Styled.TextContainer1 data-aos="fade-left">
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
