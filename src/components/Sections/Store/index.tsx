import * as Styled from './styles';
import Button from './components/Button';
import { useState } from 'react';
// import Modal from 'react-modal';
import SocialMedia from '../../SocialMedia';
import Modal from '../../Modal';
import Slider from 'react-slick';
import Carousel from 'react-elastic-carousel';

const data = [
  {
    id: 1,
    title: 'Preset: Fairytail',
    price: 'R$ 15,00',
    tooltip: 'Amanda Café',
    altText: 'Foto Preset: Fairytail',
    description1:
      'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto!',
    description2:
      'Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia.',
    buy_link: 'https://pay.hotmart.com/S70703324V',
    photo:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652837636/Loja/fairy-tail-2x-photo_i3eexm.png',
    carousel_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652635507/Loja/fairytail-carousel_cs6wut.png',
    modal_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652636299/Loja/fairy-tail-modal_qeei76.png',
    mobile_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653659225/Loja/Mobile/Image_box_-_Fairytail-Mobile_bhwutu.png',
    image_original:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653850696/Loja/Mobile/Imagem-Original_d5vcmo.png',
    image_preset:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653950289/Loja/Mobile/Image_box_-_Fairytail-Mobile_kcxvor.png',
  },
  {
    id: 2,
    title: 'Preset: Cold as your heart',
    price: 'R$ 15,00',
    tooltip: 'Amanda Café',
    altText: 'Foto Preset: Cold as your heart',
    description1:
      'Com nome de música de Diva Pop, esse preset traz tons mais frios às fotos, dando aquele aspecto de chique na neve.',
    description2:
      'Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia.',
    buy_link: 'https://pay.hotmart.com/D70704020T',
    photo:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652837660/Loja/cold-as-your-heart-2x-photo_tgwrrd.png',
    carousel_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652635507/Loja/cold-as-your-heart-carousel_snxevy.png',
    modal_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652636299/Loja/cold-as-your-heart-modal_iivukk.png',
    mobile_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653659225/Loja/Mobile/Image_box_-_Cold_as_your_heart-Mobile_tawgqb.png',
    image_original:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653850696/Loja/Mobile/Imagem-Original_d5vcmo.png',
    image_preset:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653950289/Loja/Mobile/Image_box_-_Cold_as_your_heart-Mobile_onsinr.png',
  },
  {
    id: 3,
    title: 'Preset: Greek beauty',
    price: 'R$ 15,00',
    tooltip: 'Amanda Café',
    altText: 'Foto Preset: Greek beauty',
    description1:
      'O Greek Beauty é um dos queridinhos da galera! Defini com esse nome porquê me inspirei na paleta presente em obras gregas! Misturando tons mais amarelados/envelhecidos.',
    description2:
      'Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia.',
    buy_link: 'https://pay.hotmart.com/S70704609Q',
    photo:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652837672/Loja/greek-beauty-2x-photo_pxpr18.png',
    carousel_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652635507/Loja/greek-beauty-carousel_qxrz6r.png',
    modal_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652636299/Loja/greek-beauty-modal_xdsmt3.png',
    mobile_image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653659225/Loja/Mobile/Image_box_-_Greek_beauty-Mobile_xbfmse.png',
    image_original:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653850696/Loja/Mobile/Imagem-Original_d5vcmo.png',
    image_preset:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1653950289/Loja/Mobile/Image_box_-_Greek_beauty-Mobile_hhwpnd.png',
  },
];

function SampleNextArrow(props: any) {
  const { onClick } = props;

  return (
    <Styled.SlideNextButton
      //className={className}
      //style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    >
      <svg
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.33011 0.277478C-0.0398602 0.647448 -0.0398602 1.24729 0.33011 1.61726L4.71285 6L0.33011 10.3827C-0.0398602 10.7527 -0.0398602 11.3526 0.33011 11.7225C0.70008 12.0925 1.29992 12.0925 1.66989 11.7225L6.72252 6.66989C7.09249 6.29992 7.09249 5.70008 6.72252 5.33011L1.66989 0.277478C1.29992 -0.0924926 0.70008 -0.0924926 0.33011 0.277478Z"
          fill="white"
        />
      </svg>
    </Styled.SlideNextButton>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <Styled.SlideBackButton
      //className={className}
      //style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    >
      <svg
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.66989 0.277478C7.03986 0.647448 7.03986 1.24729 6.66989 1.61726L2.28715 6L6.66989 10.3827C7.03986 10.7527 7.03986 11.3526 6.66989 11.7225C6.29992 12.0925 5.70008 12.0925 5.33011 11.7225L0.277478 6.66989C-0.0924926 6.29992 -0.0924926 5.70008 0.277478 5.33011L5.33011 0.277478C5.70008 -0.0924926 6.29992 -0.0924926 6.66989 0.277478Z"
          fill="white"
        />
      </svg>
    </Styled.SlideBackButton>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  adaptiveHeight: true,
  //lazyLoad: true,
  //fade: true,
  //variableWidth: true,
  /*
  customPaging: function (i) {
    console.log(' i = ', i);
    return (
      <Styled.DotContainer>
        <Styled.Dot active />
      </Styled.DotContainer>
    );
  },*/
  appendDots: (dots) => {
    return (
      <Styled.Pagination2>
        {dots.map((item, index) => {
          return (
            <Styled.DotContainer2
              onClick={item.props.children.props.onClick}
              key={index}
            >
              <Styled.Dot2 active={item.props.className === 'slick-active'} />
            </Styled.DotContainer2>
          );
        })}
      </Styled.Pagination2>
    );
  },
};

export const Store = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(0);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onChange = ({ index }) => {
    setModalIndex(index);
  };

  const onChange1 = ({ index }) => {
    setCurrentIndex(index);
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === 'PREV' ? 'left' : 'right';

    return (
      <Styled.ButtonContainer>
        <Button onClick={onClick} direction={pointer} disabled={isEdge} />
      </Styled.ButtonContainer>
    );
  };

  return (
    <>
      <Styled.Background id="portfolio" data-aos="fade">
        <Styled.SectionContainer>
          <Styled.Container>
            <Styled.TextContainer1
              data-aos="fade-left"
              //key={data[currentIndex].id}
              //initial={{ opacity: 0 }}
              //animate={{ opacity: 1 }}
              //transition={{ duration: 0.1 }}
            >
              <Styled.SvgContainer1>
                <div>
                  <svg
                    width="72"
                    height="76"
                    viewBox="0 0 72 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M59.4761 75.3354L-7.53773e-05 27.5365L71.5896 -1.67089e-07L59.4761 75.3354Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Styled.SvgContainer1>

              <Styled.Title1>{data[currentIndex].title}</Styled.Title1>

              <Styled.SvgContainer2>
                <div>
                  <svg
                    width="36"
                    height="34"
                    viewBox="0 0 36 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5144 23.4615L26.3802 -6.0436e-05L5.04847 10.2326L24.5144 23.4615Z"
                      fill="#F98EB2"
                    />
                    <path
                      d="M2.07575 30.3233L9.91717 30.1052L5.76569 23.4009L2.07575 30.3233Z"
                      fill="#8EE7F9"
                    />
                  </svg>
                </div>
              </Styled.SvgContainer2>

              <Styled.SubTitle>{data[currentIndex].price}</Styled.SubTitle>

              {/**
                 * <Styled.MobilePhotoContainer>
                <Styled.MobilePhotoImg src={data[currentIndex].mobile_image} />
              </Styled.MobilePhotoContainer>
                 *
                 */}

              <Styled.CustomCarousel
                showArrows={false}
                onChange={onChange1}
                itemsToShow={1}
                //renderArrow={myArrow}
                renderPagination={({ pages, activePage, onClick }) => {
                  return (
                    <Styled.Pagination>
                      <Styled.NextButton
                        visible={!(activePage === 0)}
                        onClick={() => onClick(activePage - 1)}
                      >
                        <svg
                          width="25"
                          height="18"
                          viewBox="0 0 25 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2239 15.5741C10.7705 16.1291 10.7705 17.0288 10.2239 17.5838C9.67729 18.1387 8.79107 18.1387 8.24447 17.5838L0.779585 10.0048C0.232981 9.44988 0.232981 8.55012 0.779585 7.99516L8.24447 0.416217C8.79107 -0.138738 9.67729 -0.138738 10.2239 0.416217C10.7705 0.971173 10.7705 1.87093 10.2239 2.42589L5.14839 7.57895L23.2308 7.57895C24.0038 7.57895 24.6305 8.21518 24.6305 9C24.6305 9.78483 24.0038 10.4211 23.2308 10.4211L5.14839 10.4211L10.2239 15.5741Z"
                            fill="white"
                          />
                        </svg>
                      </Styled.NextButton>

                      {pages.map((page) => {
                        const isActivePage = activePage === page;
                        return (
                          <Styled.DotContainer
                            key={page}
                            onClick={() => onClick(page)}
                          >
                            <Styled.Dot active={isActivePage} />
                          </Styled.DotContainer>
                        );
                      })}

                      <Styled.NextButton
                        visible={!(pages.length === activePage + 1)}
                        onClick={() => onClick(activePage + 1)}
                      >
                        <svg
                          width="25"
                          height="18"
                          viewBox="0 0 25 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.7762 2.42589C14.2296 1.87093 14.2296 0.971172 14.7762 0.416217C15.3228 -0.138739 16.2091 -0.138739 16.7557 0.416217L24.2205 7.99516C24.7671 8.55012 24.7671 9.44988 24.2205 10.0048L16.7557 17.5838C16.2091 18.1387 15.3228 18.1387 14.7762 17.5838C14.2296 17.0288 14.2296 16.1291 14.7762 15.5741L19.8517 10.4211L1.76929 10.4211C0.996281 10.4211 0.369629 9.78483 0.369629 9C0.369629 8.21517 0.996281 7.57895 1.76929 7.57895L19.8517 7.57895L14.7762 2.42589Z"
                            fill="white"
                          />
                        </svg>
                      </Styled.NextButton>
                    </Styled.Pagination>
                  );
                }}
              >
                {data.map((item, index) => (
                  <Styled.CarouselImageContainer
                    onClick={() => {
                      setCurrentIndex(index);
                      setModalIndex(index);
                      openModal();
                    }}
                    key={item.id}
                  >
                    <Styled.CarouselImage src={item.image_preset} />
                  </Styled.CarouselImageContainer>
                ))}
              </Styled.CustomCarousel>

              <Styled.BuyButton2
                target="_blank"
                href={data[currentIndex].buy_link}
              >
                COMPRAR{' '}
                <svg
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: 10 }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.199703 0.88134C-0.0665641 1.14761 -0.0665641 1.57931 0.199703 1.84558L3.35395 4.99982L0.199703 8.15406C-0.0665641 8.42033 -0.0665641 8.85203 0.199703 9.1183C0.465969 9.38457 0.897672 9.38457 1.16394 9.1183L4.8003 5.48194C5.06657 5.21567 5.06657 4.78397 4.8003 4.5177L1.16394 0.88134C0.897672 0.615074 0.465969 0.615074 0.199703 0.88134Z"
                    fill="white"
                  />
                </svg>
              </Styled.BuyButton2>

              <Styled.Description>
                {data[currentIndex].description1}
              </Styled.Description>

              <Styled.Description2>
                {data[currentIndex].description2}
              </Styled.Description2>

              <Styled.ButtonsContainer2>
                <Styled.BuyButton
                  target="_blank"
                  href={data[currentIndex].buy_link}
                >
                  COMPRAR{' '}
                  <svg
                    width="5"
                    height="10"
                    viewBox="0 0 5 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: 10 }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.199703 0.88134C-0.0665641 1.14761 -0.0665641 1.57931 0.199703 1.84558L3.35395 4.99982L0.199703 8.15406C-0.0665641 8.42033 -0.0665641 8.85203 0.199703 9.1183C0.465969 9.38457 0.897672 9.38457 1.16394 9.1183L4.8003 5.48194C5.06657 5.21567 5.06657 4.78397 4.8003 4.5177L1.16394 0.88134C0.897672 0.615074 0.465969 0.615074 0.199703 0.88134Z"
                      fill="white"
                    />
                  </svg>
                </Styled.BuyButton>

                <Styled.DetailsButton onClick={() => setIsOpen(true)}>
                  VER MAIS
                </Styled.DetailsButton>
              </Styled.ButtonsContainer2>

              <Styled.SvgContainer3>
                <div>
                  <svg
                    width="108"
                    height="103"
                    viewBox="0 0 108 103"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M70.4437 90.7516L73.2282 49.1208L108 72.5747L70.4437 90.7516Z"
                      fill="#F9F28E"
                    />
                    <path
                      d="M66.1882 3.93571L82.347 16.224L63.8051 24.0958L66.1882 3.93571Z"
                      fill="#8EE7F9"
                    />
                    <path
                      d="M37.0531 55.9092L1.01972e-05 69.9992L6.16758 31.0587L37.0531 55.9092Z"
                      fill="#F98EB2"
                    />
                  </svg>
                </div>
              </Styled.SvgContainer3>
            </Styled.TextContainer1>

            <Styled.CarouselContainer data-aos="fade-left">
              <Styled.PrincipalImageContainer onClick={() => setIsOpen(true)}>
                <Styled.PrincipalImage src={data[currentIndex].photo} />
              </Styled.PrincipalImageContainer>

              <Styled.ImageBundle>
                {data.map((item, index) => (
                  <Styled.ItemContainer
                    isActive={index === currentIndex}
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
                    key={item.id}
                  >
                    <Styled.CarouselImageContainer2>
                      <Styled.CarouselImage2 src={item.carousel_image} />

                      <Styled.CarouselImageOverlay2>
                        <Styled.CarouselImageText2>
                          {item.title}
                        </Styled.CarouselImageText2>
                      </Styled.CarouselImageOverlay2>
                    </Styled.CarouselImageContainer2>
                  </Styled.ItemContainer>
                ))}
              </Styled.ImageBundle>
            </Styled.CarouselContainer>
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

      {modalIsOpen ? (
        <Modal onClose={closeModal}>
          <Styled.ModalTitle onClick={closeModal}>
            {data[modalIndex].title}
          </Styled.ModalTitle>
          <Styled.ModalClose onClick={closeModal}>
            <Styled.ModalCloseButton onClick={closeModal}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02301 0.0369911C0.245449 0.197192 -0.19608 1.05681 0.132136 1.77576C0.225913 1.97894 0.429094 2.20166 1.73024 3.5028L3.21894 4.99932L1.69117 6.53099C0.272801 7.95717 0.159488 8.08221 0.0813409 8.2932C-0.02025 8.57063 -0.0280647 8.93401 0.0657115 9.20362C0.15558 9.46541 0.534593 9.84442 0.796384 9.93429C1.06599 10.0281 1.42937 10.0203 1.7068 9.91866C1.91779 9.84051 2.04283 9.7272 3.46901 8.30883L5.00068 6.78106L6.4972 8.26976C8.19298 9.96164 8.20861 9.97336 8.7361 9.97336C9.6387 9.97336 10.2443 9.03951 9.86923 8.22287C9.77546 8.01969 9.57227 7.79697 8.27113 6.49583L6.78243 4.99932L8.3102 3.46764C9.74811 2.02192 9.84188 1.91642 9.92393 1.69761C10.0333 1.39284 10.0216 0.963032 9.89268 0.70124C9.78327 0.470707 9.5332 0.216729 9.30267 0.107324C9.03697 -0.0216188 8.61107 -0.0372477 8.30239 0.0760651C8.08358 0.158119 7.97808 0.251895 6.53236 1.6898L5.00068 3.21757L3.50417 1.72887C2.2421 0.466799 1.98031 0.220636 1.79666 0.138582C1.54659 0.0291767 1.26136 -0.00989628 1.02301 0.0369911Z"
                  fill="white"
                />
              </svg>
            </Styled.ModalCloseButton>
          </Styled.ModalClose>

          <Slider
            afterChange={(index) => setModalIndex(index)}
            initialSlide={currentIndex}
            {...settings}
          >
            {data.map((item) => (
              <Styled.ModalImageContainerWrapper key={item.id}>
                <Styled.ModalImageContainer>
                  <Styled.CarouselImage
                    src={item.modal_image}
                    alt={item.altText}
                    title={item.tooltip}
                  />
                </Styled.ModalImageContainer>
              </Styled.ModalImageContainerWrapper>
            ))}
          </Slider>
        </Modal>
      ) : null}
    </>
  );
};
