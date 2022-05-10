import * as Styled from './styles';
import SocialMedia from '../../SocialMedia';
/*
const contactInfo = {
        title: 'Quer se sentir maravilhosa? Entre em contato!',
        text:
          'Substituir o final da página de contato por: Se preferir explicar sua proposta já completinha, pode enviar na caixinha ao lado! Ela vai direto pro meu whatsapp e continuamos nossa conversa por lá! ',
        srcImg: 'https://i.imgur.com/lAQud8p.png',
        background: true,
        backgroundImg: 'https://i.imgur.com/4z5367A.png',
        sectionId: 'contato',
        component: 'section.section-two-columns',
      };*/

export const Contact = () => {
  return (
    <Styled.Background id="contato">
      <Styled.SectionContainer>
        <Styled.Container>
          <Styled.TextContainer1>
            <Styled.Title1>
              Quer se sentir maravilhosa? Entre em contato!
            </Styled.Title1>

            <Styled.Whatsapp href="">(71) 9999-9999</Styled.Whatsapp>
            <Styled.Instagram
              target="_blank"
              href="https://www.instagram.com/amandacafefotografia/"
            >
              @amandacafefotografia
            </Styled.Instagram>
            <Styled.Email href="">amandacafefotografia@gmail.com</Styled.Email>

            <Styled.Description>
              Substituir o final da página de contato por: Se preferir explicar
              sua proposta já completinha, pode enviar na caixinha ao lado! Ela
              vai direto pro meu whatsapp e continuamos nossa conversa por lá!
            </Styled.Description>
          </Styled.TextContainer1>

          <Styled.TextContainer1>
            {/**
               * <Styled.Form>
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

              <Styled.Group>
                <Styled.Label>Nome</Styled.Label>

                <Styled.Input placeholder="Escrever" />
              </Styled.Group>

              <Styled.GroupRow>
                <Styled.Group>
                  <Styled.Label>Telefone</Styled.Label>

                  <Styled.Input placeholder="(DDD)" />
                </Styled.Group>

                <Styled.Group>
                  <Styled.Label>Email</Styled.Label>

                  <Styled.Input placeholder="Escrever" />
                </Styled.Group>
              </Styled.GroupRow>

              <Styled.Group>
                <Styled.Label>Assunto</Styled.Label>

                <Styled.Input placeholder="Selecionar" />
              </Styled.Group>

              <Styled.Group>
                <Styled.Label>Escreva sua mensagem</Styled.Label>

                <Styled.TextArea />
              </Styled.Group>

              <Styled.SubmitButton placeholder="Escrever">
                ENVIAR MENSAGEM
              </Styled.SubmitButton>
            </Styled.Form>
               */}
          </Styled.TextContainer1>
        </Styled.Container>

        <SocialMedia />
      </Styled.SectionContainer>
    </Styled.Background>
  );
};
