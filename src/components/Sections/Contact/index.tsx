import * as Styled from './styles';
import Modal from 'react-modal';
import { useState } from 'react';
import * as Yup from 'yup';
import { Spinner } from '../../Spinner';
import { Formik } from 'formik';
import { TextField } from '../../TextField';
import { TextAreaInput } from '../../TextArea';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Contact = () => {
  const validate = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    phone: Yup.string()
      .min(9, 'Deve ter no mínimo 9 caracteres.')
      .max(9, 'Deve ter no máximo 9 caracteres.')
      .required('O telefone é obrigatório'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('O E-mail é obrigatório'),
    subject: Yup.string().required('O assunto é obrigatório'),
    message: Yup.string()
      .min(10, 'Deve ter no mínimo 10 caracteres.')
      .max(300, 'Deve ter no máximo 300 caracteres.')
      .required('A mensagem é obrigatória'),
  });

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
                Se preferir explicar sua proposta já completinha, pode enviar na
                caixinha ao lado! Ela vai direto pro meu whatsapp e continuamos
                nossa conversa por lá!
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

              <Formik
                initialValues={{
                  name: '',
                  phone: '',
                  email: '',
                  subject: '',
                  message: '',
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                  setIsOpen(true);
                }}
              >
                {() => (
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
                      <TextField
                        placeholder="Escrever"
                        label="Nome"
                        name="name"
                        type="text"
                      />
                    </Styled.Group>

                    <Styled.GroupRow>
                      <Styled.Group>
                        <TextField
                          placeholder="(DDD)"
                          label="Telefone"
                          name="phone"
                          type="text"
                        />
                      </Styled.Group>

                      <Styled.Group>
                        <TextField
                          placeholder="Escrever"
                          label="Email"
                          name="email"
                          type="email"
                        />
                      </Styled.Group>
                    </Styled.GroupRow>

                    <Styled.Group>
                      <TextField
                        placeholder="Escrever"
                        label="Assunto"
                        name="subject"
                        type="text"
                      />
                    </Styled.Group>

                    <Styled.Group>
                      <TextAreaInput
                        label="Escreva sua mensagem"
                        name="message"
                        type="text"
                      />
                    </Styled.Group>

                    <Styled.SubmitButton type="submit">
                      ENVIAR MENSAGEM
                    </Styled.SubmitButton>
                  </Styled.Form>
                )}
              </Formik>

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
