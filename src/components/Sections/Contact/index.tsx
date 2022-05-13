import * as Styled from './styles';
import SocialMedia from '../../SocialMedia';
import Modal from 'react-modal';
import { useState } from 'react';
import { Spinner } from '../../Spinner';

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

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Contact = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function onSendClick() {
    setLoading(true);

    wait(2000).then(() => {
      setSuccess(true);
      setLoading(false);
    });
  }

  return (
    <>
      <Styled.Background id="contato">
        <Styled.SectionContainer>
          <Styled.Container>
            <Styled.TextContainer1 data-aos="fade-right">
              <Styled.Title1>
                Quer se sentir maravilhosa? Entre em contato!
              </Styled.Title1>

              <Styled.Whatsapp
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5571992787948"
              >
                (71) 99278-7948
              </Styled.Whatsapp>
              <Styled.Instagram
                target="_blank"
                href="https://www.instagram.com/amandacafefotografia/"
              >
                @amandacafefotografia
              </Styled.Instagram>
              <Styled.Email
                target="_blank"
                href="mailto: amandacafefotografia@gmail.com"
              >
                amandacafefotografia@gmail.com
              </Styled.Email>

              <Styled.Description>
                Substituir o final da página de contato por: Se preferir
                explicar sua proposta já completinha, pode enviar na caixinha ao
                lado! Ela vai direto pro meu whatsapp e continuamos nossa
                conversa por lá!
              </Styled.Description>
            </Styled.TextContainer1>

            <div data-aos="fade-left">
              <Styled.SvgContainer2>
                <div>
                  <svg
                    width="133"
                    height="120"
                    viewBox="0 0 133 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M117.571 82.1203L38.9999 94.5736L67.8761 20L117.571 82.1203Z"
                      fill="#F9F28E"
                    />
                    <path
                      d="M30.6196 39.4368L0.859673 13.2488L38.1748 0.521721L30.6196 39.4368Z"
                      fill="#F98EB2"
                    />
                  </svg>
                </div>
              </Styled.SvgContainer2>

              <Styled.Form>
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

                <Styled.SubmitButton onClick={onClick} placeholder="Escrever">
                  ENVIAR MENSAGEM
                </Styled.SubmitButton>
              </Styled.Form>

              <Styled.SvgContainer1>
                <div>
                  <svg
                    width="34"
                    height="38"
                    viewBox="0 0 34 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.9669 0.693545L33.0065 37.2678L-2.09591e-05 21.8807L29.9669 0.693545Z"
                      fill="#8EE7F9"
                    />
                  </svg>
                </div>
              </Styled.SvgContainer1>

              <Styled.SvgContainer3>
                <div>
                  <svg
                    width="58"
                    height="62"
                    viewBox="0 0 58 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.9546 0.885618L46.5211 61.3534L3.22793e-05 21.5822L57.9546 0.885618Z"
                      fill="#F98EB2"
                    />
                  </svg>
                </div>
              </Styled.SvgContainer3>
            </div>
          </Styled.Container>

          <SocialMedia />
        </Styled.SectionContainer>
      </Styled.Background>
      <Modal
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: !loading
            ? {
                background:
                  'linear-gradient(109.13deg, #9100ff 5.77%, #bc00ff 77.99%)',
                boxShadow: '0px 63px 40px -20px rgba(0, 0, 0, 0.8)',
                borderRadius: '8px',
                inset: 'auto',
                margin: '0 20px',
              }
            : {
                inset: 'auto',
                background: 'transparent',
                border: 'none',
              },
        }}
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
      >
        {(function () {
          if (loading) {
            return <Spinner />;
          }

          if (success) {
            return (
              <Styled.ModalContainer>
                <Styled.ModalTitle>
                  Sua mensagem foi encaminha com sucesso!
                </Styled.ModalTitle>

                <Styled.OkCotainer>
                  <Styled.OkButton
                    onClick={() => {
                      closeModal();
                      setSuccess(false);
                    }}
                  >
                    OK
                  </Styled.OkButton>
                </Styled.OkCotainer>
              </Styled.ModalContainer>
            );
          }

          return (
            <Styled.ModalContainer>
              <Styled.ModalTitle>
                Gostaria de encaminhar essa mensagem?
              </Styled.ModalTitle>

              <Styled.ModalButtons>
                <Styled.DetailsButton onClick={closeModal}>
                  Cancelar
                </Styled.DetailsButton>
                <Styled.BuyButton onClick={onSendClick}>
                  Enviar
                </Styled.BuyButton>
              </Styled.ModalButtons>
            </Styled.ModalContainer>
          );
        })()}
      </Modal>
    </>
  );
};
