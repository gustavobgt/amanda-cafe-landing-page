import * as Styled from './styles';
import { GridTwoColumns } from '../../GridTwoColumns';

const aboutInfo = {
  title: 'Toda Mulher',
  text: 'deve querer se ver e se sentir cada dia melhor, e é isso que busco com minha fotografia. Quero reforçar a confiança dessas mulheres para que elas celebrem suas belezas.',
  srcImg: 'https://i.imgur.com/YKMiFVo.png',
  background: true,
  backgroundImg: 'https://i.imgur.com/ejAm74w.png',
  sectionId: 'sobre',
  component: 'section.section-two-columns',
};

export const About = () => {
  return (
    <GridTwoColumns {...aboutInfo} data-aos="fade">
      <Styled.RelativeContainer1>
        <Styled.TextContainer1>
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
          <Styled.Title1>Toda Mulher</Styled.Title1>
          <Styled.SubTitle1>
            deve querer se ver e se sentir cada dia melhor, e é isso que busco
            com minha fotografia. Quero reforçar a confiança dessas mulheres
            para que elas celebrem suas belezas.
          </Styled.SubTitle1>
        </Styled.TextContainer1>
      </Styled.RelativeContainer1>

      <Styled.AmandaImgContainer data-aos="fade">
        <Styled.AmandaImg src="https://res.cloudinary.com/amanda-caf/image/upload/v1653650768/sobre/foto-amanda-1_2_1_thld6m.png" />
      </Styled.AmandaImgContainer>

      <Styled.RelativeContainer2>
        <Styled.TextContainer2>
          <Styled.SvgContainer>
            <svg
              width="108"
              height="103"
              viewBox="0 0 108 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.4437 90.7518L73.2282 49.1211L108 72.575L70.4437 90.7518Z"
                fill="#F9F28E"
              />
              <path
                d="M66.1883 3.93587L82.347 16.2242L63.8051 24.0959L66.1883 3.93587Z"
                fill="#8EE7F9"
              />
              <path
                d="M37.0532 55.909L4.07147e-05 69.999L6.16761 31.0585L37.0532 55.909Z"
                fill="#F98EB2"
              />
            </svg>
          </Styled.SvgContainer>

          <Styled.Title2>Amanda Café</Styled.Title2>
          <Styled.SubTitle2>
            Sou fotógrafa desde 2016 e hoje celebro a beleza feminina,
            principalmente nas cidades de Aracaju e Salvador. Me considero uma
            pessoa divertida e adaptável! Quero fazer de tudo para o seu ensaio
            sair do jeito que você imaginou, senão melhor!
          </Styled.SubTitle2>
        </Styled.TextContainer2>
      </Styled.RelativeContainer2>
    </GridTwoColumns>
  );
};
