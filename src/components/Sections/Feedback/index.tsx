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
    instagram: '@Graziesteves',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/TDwbEQg.png',
    avatar: 'https://i.imgur.com/MAK6oUW.png',
  },
  {
    name: 'Graziele Esteves 2',
    feedback:
      'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
    instagram: '@Graziesteves',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/Y1tmAyg.png',
    avatar: 'https://i.imgur.com/pkT2bvI.png',
  },
  {
    name: 'Graziele Esteves 3',
    feedback:
      'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
    instagram: '@Graziesteves',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/TDwbEQg.png',
    avatar: 'https://i.imgur.com/86h7xwe.png',
  },
  {
    name: 'Graziele Esteves 4',
    feedback:
      'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
    instagram: '@Graziesteves',
    link: 'https://www.instagram.com/grazisteves/',
    photo: 'https://i.imgur.com/Y1tmAyg.png',
    avatar: 'https://i.imgur.com/86h7xwe.png',
  },
  {
    name: 'Graziele Esteves 5',
    feedback:
      'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
    instagram: '@Graziesteves',
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
                <Button direction="left" disabled={true} />

                <Button direction="right" />
              </Styled.ButtonsContainer>
            </Styled.Header>

            <Styled.Title1>{data[currentIndex].name}</Styled.Title1>

            <Styled.SubTitle1>{data[currentIndex].feedback}</Styled.SubTitle1>

            <Styled.Instagram target="_blank" href={data[currentIndex].link}>
              {data[currentIndex].instagram}
            </Styled.Instagram>

            <Styled.Avatars>
              {data.map(({ avatar }, key) => {
                return (
                  <Styled.AvatarContainer key={key}>
                    <Styled.AvatarImg src={avatar} />
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
