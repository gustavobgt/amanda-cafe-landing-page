import * as Styled from './styles';
import Modal from 'react-modal';
import { useState } from 'react';
import * as Yup from 'yup';
import { Spinner } from '../../Spinner';
import { Formik } from 'formik';
import { TextField } from '../../TextField';
import { TextAreaInput } from '../../TextArea';
import { ControlledDropdown } from '../../ControlledDropdown';
import { PhoneField } from '../../PhoneField';
import { FormikProps } from 'formik';
import emailjs from '@emailjs/browser';
import React from 'react';
import SocialMedia from '../../SocialMedia';

const status = [
  { name: 'Orçamento', value: 'Orçamento' },
  { name: 'Agenda', value: 'Agenda' },
  { name: 'Cursos', value: 'Cursos' },
  { name: 'Produtos', value: 'Produtos' },
  { name: 'Dúvidas Gerais', value: 'Dúvidas Gerais' },
];

interface Values {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const validate = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    phone: Yup.string()
      .min(15, 'Complete o telefone.')
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
  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function onSendClick() {
    setLoading(true);

    emailjs
      .send('emailService', 'template_mabqnzl', formValues, 'QeNvORPfHiJ6K3r6w')
      .then(
        (result) => {
          console.log('result.text = ', result.text);
          setLoading(false);
          setSuccess(true);
        },
        (error) => {
          console.log('error.text = ', error.text);
          setLoading(false);
          setError(true);
        },
      );
  }

  return (
    <>
      <Styled.Background id="contato" data-aos="fade">
        <Styled.SectionContainer>
          <Styled.Container>
            <Styled.TextContainer1 data-aos="fade-left">
              <Styled.Title1>
                Quer se sentir maravilhosa? Entre em contato!
              </Styled.Title1>

              <Styled.Whatsapp
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5571992787948"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: '5px' }}
                >
                  <path
                    d="M5.9886 0.00765038C4.224 0.172922 2.68061 0.950974 1.56947 2.2401C0.745651 3.19359 0.237121 4.29964 0.0489651 5.54809C-0.0146012 5.97271 -0.0171438 6.88043 0.0464224 7.2898C0.153214 7.98649 0.346455 8.60944 0.649031 9.23239L0.778706 9.49682L0.394766 11.2436C0.183726 12.2047 0.013368 12.9955 0.0184533 12.9981C0.0235386 13.0031 0.0718489 12.9981 0.127787 12.9853C0.183726 12.9726 0.979575 12.7896 1.89493 12.5811L3.56037 12.2022L3.80192 12.3115C4.44521 12.6014 5.14189 12.7896 5.83095 12.8607C6.25812 12.904 7.16839 12.8785 7.54724 12.8099C8.70669 12.6039 9.69832 12.159 10.5908 11.4445C10.8679 11.2207 11.3434 10.7453 11.5672 10.4681C12.3376 9.50445 12.8258 8.33737 12.9555 7.1525C12.9911 6.8245 12.9911 6.07441 12.9555 5.7515C12.7393 3.80637 11.618 2.04431 9.90682 0.958602C9.22285 0.526351 8.29987 0.193264 7.41248 0.0559607C7.15313 0.0178213 6.23269 -0.015234 5.9886 0.00765038ZM7.02091 1.03742C8.21596 1.15439 9.33727 1.65529 10.1967 2.45622C11.1502 3.34615 11.7477 4.47 11.9257 5.71844C11.9791 6.10493 11.9791 6.80161 11.9257 7.17792C11.7808 8.16702 11.3714 9.10271 10.751 9.86296C10.5628 10.0893 10.1535 10.4961 9.92971 10.6741C9.16437 11.2868 8.19053 11.7013 7.21415 11.8284C6.88107 11.8717 6.13353 11.8793 5.84367 11.8411C5.208 11.7547 4.62319 11.5793 4.06127 11.3072L3.69767 11.1292L2.52551 11.3962C1.87967 11.5437 1.3508 11.6606 1.34826 11.6581C1.34572 11.653 1.45505 11.147 1.59235 10.5317C1.72966 9.91636 1.84153 9.38749 1.84153 9.35698C1.84408 9.32646 1.80339 9.22984 1.75254 9.14339C1.17027 8.14922 0.910924 6.95671 1.0406 5.84558C1.38386 2.89102 4.0511 0.747561 7.02091 1.03742Z"
                    fill="white"
                  />
                  <path
                    d="M4.21383 3.65677C4.08161 3.72288 3.87312 3.94917 3.74344 4.16784C3.47646 4.61535 3.45358 5.19253 3.67733 5.76208C3.9494 6.4486 4.77067 7.49617 5.5055 8.09369C6.07251 8.55645 6.74631 8.88191 7.59047 9.10058C7.96424 9.19975 8.34564 9.20737 8.60753 9.12347C8.91265 9.02685 9.28642 8.75987 9.40592 8.55391C9.53306 8.3327 9.60425 7.83434 9.52289 7.73518C9.48475 7.68941 8.43463 7.16563 8.24139 7.09697C8.04561 7.02578 8.01764 7.03849 7.81168 7.2953C7.38197 7.83688 7.34129 7.87248 7.18873 7.82163C7.06668 7.78349 6.62172 7.56228 6.45899 7.46057C5.96572 7.15545 5.4521 6.62658 5.13681 6.1028C5.00714 5.88667 5.01477 5.85362 5.24106 5.61207C5.35802 5.48748 5.45973 5.34763 5.50041 5.26118L5.56398 5.11879L5.51313 4.9764C5.48516 4.90012 5.36565 4.60263 5.24869 4.31786C5.0885 3.92883 5.01222 3.77373 4.94357 3.69999L4.85204 3.60337H4.5876C4.36893 3.60337 4.30282 3.61354 4.21383 3.65677Z"
                    fill="white"
                  />
                </svg>
                (71) 99278-7948
              </Styled.Whatsapp>
              <Styled.Instagram
                target="_blank"
                href="https://www.instagram.com/amandacafefotografia/"
              >
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: '5px' }}
                >
                  <path
                    d="M4.73802 0.023198C3.49285 0.066398 3.06339 0.11468 2.57802 0.277316C1.81059 0.533974 1.16513 1.01172 0.748376 1.6343C0.390071 2.17049 0.191859 2.73463 0.0876706 3.51732C-0.0292235 4.38894 -0.0292235 8.61237 0.0876706 9.484C0.207106 10.3785 0.440894 10.9782 0.900847 11.5703C1.46499 12.2945 2.40014 12.7952 3.39882 12.9019C4.49407 13.0213 7.84588 13.034 9.33755 12.9273C10.5497 12.8409 11.5179 12.353 12.1532 11.5093C12.5648 10.9655 12.8139 10.3099 12.9206 9.48654C13.0375 8.60983 13.0375 4.39148 12.9206 3.51478C12.8977 3.34706 12.852 3.08278 12.8139 2.9303C12.5064 1.62668 11.6653 0.688986 10.4303 0.277316C9.92711 0.109598 9.53322 0.066398 8.16861 0.0206568C7.30969 -0.00729611 5.57915 -0.00729611 4.73802 0.023198ZM8.85473 1.06254C9.12155 1.07525 9.43158 1.10066 9.54593 1.11336C10.6869 1.25821 11.5128 1.97482 11.8025 3.07515C11.9499 3.63675 11.9905 4.3991 11.9905 6.50066C11.9905 8.60221 11.9499 9.36456 11.8025 9.92616C11.5128 11.0214 10.6945 11.738 9.55355 11.8854C9.06819 11.9489 8.13049 11.9769 6.44061 11.9744C4.61351 11.9718 3.60466 11.9337 3.22094 11.8498C2.28833 11.6465 1.59459 11.0519 1.28456 10.193C1.12193 9.73557 1.07111 9.3544 1.03807 8.30489C1.00504 7.33162 1.02536 4.39656 1.06602 3.92136C1.11431 3.3623 1.24136 2.8439 1.41416 2.4983C1.75214 1.82743 2.40522 1.33445 3.1752 1.16165C3.40899 1.11082 3.92485 1.07016 4.76344 1.03713C5.44955 1.00917 8.22452 1.02696 8.85473 1.06254Z"
                    fill="white"
                  />
                  <path
                    d="M9.76447 2.35337C9.12663 2.58207 9.07327 3.45115 9.67553 3.74847C9.88136 3.85012 10.1406 3.85012 10.3464 3.74847C10.6183 3.61379 10.7606 3.38254 10.7606 3.06998C10.7606 2.85398 10.7072 2.70913 10.5726 2.55412C10.3896 2.34828 10.0313 2.2568 9.76447 2.35337Z"
                    fill="white"
                  />
                  <path
                    d="M6.00861 3.36237C5.18273 3.49197 4.428 3.9443 3.93247 4.60755C3.75205 4.84896 3.50301 5.34703 3.42932 5.61131C3.17012 6.54901 3.32259 7.48924 3.86132 8.29479C4.03412 8.55145 4.428 8.94534 4.68466 9.11814C5.49021 9.65686 6.43045 9.80934 7.36814 9.55014C7.63497 9.47644 8.1305 9.22741 8.37445 9.04444C8.4888 8.96058 8.66923 8.79795 8.7785 8.68359C9.81276 7.58326 9.94236 5.96199 9.09614 4.70919C8.92334 4.45254 8.62857 4.14505 8.37191 3.95446C8.1305 3.77404 7.63243 3.52501 7.36814 3.45131C6.92344 3.32933 6.42537 3.2963 6.00861 3.36237ZM7.07083 4.42712C7.80014 4.64312 8.32871 5.16915 8.55487 5.90863C8.61332 6.10684 8.62094 6.17291 8.62094 6.50072C8.62094 6.82854 8.61332 6.89461 8.55487 7.09282C8.32871 7.8323 7.81031 8.3507 7.07083 8.57686C6.87261 8.63531 6.80654 8.64294 6.47873 8.64294C6.15092 8.64294 6.08485 8.63531 5.88664 8.57686C4.99214 8.30242 4.38734 7.55277 4.32635 6.63795C4.2552 5.53254 5.02264 4.56943 6.14075 4.36613C6.36438 4.32548 6.82433 4.35597 7.07083 4.42712Z"
                    fill="white"
                  />
                </svg>
                @amandacafefotografia
              </Styled.Instagram>
              <Styled.Email
                target="_blank"
                href="mailto: amandacafefotografia@gmail.com"
              >
                <svg
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: '5px' }}
                >
                  <path
                    d="M1.62926 0.0574551C0.865601 0.219863 0.219424 0.872951 0.0570156 1.64353C-0.0190052 2.00635 -0.0190052 10.9906 0.0570156 11.3535C0.219424 12.1309 0.869056 12.7806 1.64654 12.943C2.00937 13.019 15.6931 13.019 16.0559 12.943C16.8334 12.7806 17.4831 12.1309 17.6455 11.3535C17.7215 10.9906 17.7215 2.00635 17.6455 1.64353C17.4831 0.86604 16.8334 0.216408 16.0559 0.0539989C15.7035 -0.0185661 1.97481 -0.0185661 1.62926 0.0574551ZM15.4132 1.44656C15.3683 1.48457 13.8721 2.59379 12.0925 3.9207L8.85124 6.32917L5.61345 3.9207C3.83041 2.59379 2.33418 1.48457 2.28926 1.44656C2.20979 1.38782 2.39293 1.38436 8.85124 1.38436C15.3096 1.38436 15.4927 1.38782 15.4132 1.44656ZM5.13659 5.28907L8.85124 8.05001L12.5659 5.28907C14.6081 3.76865 16.2875 2.52468 16.2978 2.52468C16.3082 2.52468 16.3116 4.46666 16.3082 6.83713L16.2978 11.153L16.2045 11.2878C16.1527 11.3604 16.0525 11.4606 15.9799 11.509L15.8521 11.5953H8.85124H1.85042L1.72256 11.509C1.65 11.4606 1.54979 11.3604 1.49796 11.2878L1.40466 11.153L1.39429 6.83713C1.39084 4.46666 1.39429 2.52468 1.40466 2.52468C1.41502 2.52468 3.09439 3.76865 5.13659 5.28907Z"
                    fill="white"
                  />
                </svg>
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
                  setFormValues(values);
                }}
              >
                {(props: FormikProps<Values>) => (
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
                        <PhoneField
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
                      <ControlledDropdown
                        onChange={(value: string) => {
                          props.setFieldValue('subject', value);
                        }}
                        placeholder="Escrever"
                        label="Assunto"
                        name="subject"
                        type="text"
                      >
                        {status.map((item, index) => {
                          return (
                            <ControlledDropdown.Item
                              key={index}
                              value={item.value}
                            >
                              {item.name}
                            </ControlledDropdown.Item>
                          );
                        })}
                      </ControlledDropdown>
                    </Styled.Group>

                    <Styled.TextAreaGroup>
                      <TextAreaInput
                        label="Escreva sua mensagem"
                        name="message"
                        type="text"
                      />
                    </Styled.TextAreaGroup>

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
                      setError(false);
                    }}
                  >
                    OK
                  </Styled.OkButton>
                </Styled.OkCotainer>
              </Styled.ModalContainer>
            );
          }

          if (error) {
            return (
              <Styled.ModalContainer>
                <Styled.ModalTitle>
                  Aconteceu algum problema ao enviar sua mensagem. Por favor
                  tente novamente.
                </Styled.ModalTitle>

                <Styled.OkCotainer>
                  <Styled.OkButton
                    onClick={() => {
                      closeModal();
                      setSuccess(false);
                      setError(false);
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
