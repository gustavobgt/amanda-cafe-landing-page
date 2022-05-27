import * as Styled from './styles';
import Button from '../../Button';
import { useState } from 'react';
import SocialMedia from '../../SocialMedia';

const data = [
  {
    id: 1,
    name: 'Viviane Rollemberg',
    feedback:
      'Já fotografei com outras pessoas, mas a experiência de fotografar com Amanda, posso definir como inesquecível. A empolgação dela te empolga, você sente que não falha! Você é a Gisele Bündchen naquele momento!',
    instagram: '@viviannerolemberg',
    link: 'https://www.instagram.com/viviannerolemberg/',
    photo:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625521/Feedbacks/viviane-photo_gne8uy.png',
    avatar:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625270/Feedbacks/viviane-avatar_hmlftg.png',
  },
  {
    id: 2,
    name: 'Carol Sampaio',
    feedback:
      'Pra mim todo mundo tem que fazer um ensaio, agora fazer um ensaio com Amanda é completamente diferenciado e surreal! Ela tem paciência, é super simpática e amiga, te deixa muito à vontade e tranquila. Enfim, se antes eu indicava que todos fizessem um ensaio, eu indico 3x mais que este ensaio seja feito com Amanda.',
    instagram: '@ssampaiocarol',
    link: 'https://www.instagram.com/ssampaiocarol/',
    photo:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625526/Feedbacks/carol-photo_xiskhe.png',
    avatar:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625289/Feedbacks/carol-avatar_zpeqzk.png',
  },
  {
    id: 3,
    name: 'Victória Lima',
    feedback:
      'Fazer ensaio com Amanda foi uma jornada de autoconhecimento pra mim. Não é só a forma como ela faz você se sentir a cada minuto do ensaio, é como no fim de tudo ela te mostra os resultados das fotos e te prova que você é sim, tudo aquilo que você sentiu. Depois disso, você se enxerga de uma forma totalmente diferente, da forma que você merece!',
    instagram: '@lima_vic_oficial',
    link: 'https://www.instagram.com/lima_vic_oficial/',
    photo:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625533/Feedbacks/victoria-photo_enxuev.png',
    avatar:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625310/Feedbacks/victoria-avatar_tsp55y.png',
  },
  {
    id: 4,
    name: 'Ana Clara',
    feedback:
      'Fazer ensaios com Amanda é simplesmente sensacional. O cuidado e atenção na hora de falar com a cliente, a direção na hora do ensaio, a forma como ela deixa a cliente mega confortável... Se ver através das lentes dela é um presente que, com toda a certeza do mundo, você não vai se arrepender de se dar.',
    instagram: '@anaclaradalmeida_',
    link: 'https://www.instagram.com/anaclaradalmeida_/',
    photo:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625532/Feedbacks/ana-photo_mkwpqj.png',
    avatar:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625328/Feedbacks/ana-avatar_fdg1zh.png',
  },
  {
    id: 5,
    name: 'Laura Matos',
    feedback:
      'Ser fotografada por Amanda é sempre uma experiência única. Me senti acolhida desde o primeiro contato e todos os ensaios feitos sempre superaram minhas expectativas!!! Ela é uma pessoa ímpar e de uma energia surreal! Aguardo os próximos mil ensaios ansiosamente!!!',
    instagram: '@laumattos_',
    link: 'https://www.instagram.com/laumattos_/',
    photo:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625533/Feedbacks/laura-photo_hlzdth.png',
    avatar:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652625345/Feedbacks/laura-avatar_p7wjlr.png',
  },
];

export const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Styled.Background id="feedbacks" data-aos="fade">
      <Styled.SectionContainer>
        <Styled.Container>
          <Styled.PhotoContainer data-aos="fade-left">
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
                  onClick={() => {
                    if (currentIndex <= 0) {
                      setCurrentIndex(4);
                      return;
                    }

                    setCurrentIndex((prevState) => prevState - 1);
                  }}
                />

                <Button
                  direction="right"
                  onClick={() => {
                    if (currentIndex === data.length - 1) {
                      setCurrentIndex(0);
                      return;
                    }

                    setCurrentIndex((prevState) => prevState + 1);
                  }}
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

      <div
        style={{
          padding: '10px 5%',
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
        }}
      >
        <SocialMedia />
      </div>
    </Styled.Background>
  );
};
