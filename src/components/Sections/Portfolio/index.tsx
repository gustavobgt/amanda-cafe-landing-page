import * as Styled from './styles';
import Button from './components/Button';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';
// import Modal from 'react-modal';
import SocialMedia from '../../SocialMedia';
import Modal from '../../Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const data = [
  {
    id: 1,
    title: 'Praiano',
    image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652632996/portfolio/banner-praiano_bojowr.png',
    modal_images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907411/portfolio/Modal/Praiano/Praiano-1_suckkk.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908700/portfolio/Modal/Praiano/Praiano-1_2x_th6q19.jpg',
        tooltip: 'Amanda Café',
        altText: 'Primeira Foto do Portfólio Praiano',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907411/portfolio/Modal/Praiano/Praiano-2_e2w14p.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908700/portfolio/Modal/Praiano/Praiano-2_2x_ndrvks.jpg',
        tooltip: 'Amanda Café',
        altText: 'Segunda Foto do Portfólio Praiano',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907411/portfolio/Modal/Praiano/Praiano-3_trms61.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908700/portfolio/Modal/Praiano/Praiano-3_2x_alaocr.jpg',
        tooltip: 'Amanda Café',
        altText: 'Terceira Foto do Portfólio Praiano',
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907411/portfolio/Modal/Praiano/Praiano-4_bh8lf6.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908701/portfolio/Modal/Praiano/Praiano-4_2x_vaoyqw.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quarta Foto do Portfólio Praiano',
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907411/portfolio/Modal/Praiano/Praiano-5_et29ht.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908700/portfolio/Modal/Praiano/Praiano-5_2x_sopvvz.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Praiano',
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907411/portfolio/Modal/Praiano/Praiano-6_er79ra.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908701/portfolio/Modal/Praiano/Praiano-6_2x_omzgr9.jpg',
        tooltip: 'Amanda Café',
        altText: 'Sexta Foto do Portfólio Praiano',
      },
    ],
  },
  {
    id: 2,
    title: 'Casual',
    image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652632996/portfolio/banner-casual_q3m6le.png',
    modal_images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907636/portfolio/Modal/Casual/Casual-1_mycqgp.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908912/portfolio/Modal/Casual/Casual-1_2x_gm5kbr.jpg',
        tooltip: 'Amanda Café',
        altText: 'Primeira Foto do Portfólio Casual',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907636/portfolio/Modal/Casual/Casual-2_rvlhlb.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908912/portfolio/Modal/Casual/Casual-2_2x_kcryoc.jpg',
        tooltip: 'Amanda Café',
        altText: 'Segunda Foto do Portfólio Casual',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907636/portfolio/Modal/Casual/Casual-3_swvuwx.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908911/portfolio/Modal/Casual/Casual-3_2x_zspjmx.jpg',
        tooltip: 'Amanda Café',
        altText: 'Terceira Foto do Portfólio Casual',
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907636/portfolio/Modal/Casual/Casual-4_llwi3g.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908911/portfolio/Modal/Casual/Casual-4_2x_m4im8q.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quarta Foto do Portfólio Casual',
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907636/portfolio/Modal/Casual/Casual-5_l96rtv.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908911/portfolio/Modal/Casual/Casual-5_2x_cim4a5.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Casual',
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907636/portfolio/Modal/Casual/Casual-6_faxvnj.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908911/portfolio/Modal/Casual/Casual-6_2x_ki5ig7.jpg',
        tooltip: 'Amanda Café',
        altText: 'Sexta Foto do Portfólio Casual',
      },
    ],
  },
  {
    id: 3,
    title: 'Urbano',
    image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652632996/portfolio/banner-urbano_n8coy5.png',
    modal_images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907738/portfolio/Modal/Urbano/Urbano-1_hink08.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909044/portfolio/Modal/Urbano/Urbano-1_2x_h0ydtm.jpg',
        tooltip: 'Amanda Café',
        altText: 'Primeira Foto do Portfólio Urbano',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907738/portfolio/Modal/Urbano/Urbano-2_ipzonj.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909044/portfolio/Modal/Urbano/Urbano-2_2x_a4rpo6.jpg',
        tooltip: 'Amanda Café',
        altText: 'Segunda Foto do Portfólio Urbano',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907738/portfolio/Modal/Urbano/Urbano-3_ru81mm.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909044/portfolio/Modal/Urbano/Urbano-3_2x_hntjro.jpg',
        tooltip: 'Amanda Café',
        altText: 'Terceira Foto do Portfólio Urbano',
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907738/portfolio/Modal/Urbano/Urbano-4_zsqco8.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909044/portfolio/Modal/Urbano/Urbano-4_2x_tsovsn.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quarta Foto do Portfólio Urbano',
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907738/portfolio/Modal/Urbano/Urbano-5_qhpxzy.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909044/portfolio/Modal/Urbano/Urbano-5_2x_c5qpk9.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Urbano',
      },
    ],
  },
  {
    id: 4,
    title: 'Sensual',
    image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652632996/portfolio/banner-sensual_xyvwok.png',
    modal_images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907881/portfolio/Modal/Sensual/Sensual-1_wlnkha.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909146/portfolio/Modal/Sensual/Sensual-1_2x_ud0ldu.jpg',
        tooltip: 'Amanda Café',
        altText: 'Primeira Foto do Portfólio Sensual',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907881/portfolio/Modal/Sensual/Sensual-2_ik5cke.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909146/portfolio/Modal/Sensual/Sensual-2_2x_xk5ouh.jpg',
        tooltip: 'Amanda Café',
        altText: 'Segunda Foto do Portfólio Sensual',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907881/portfolio/Modal/Sensual/Sensual-3_hnmk1w.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909146/portfolio/Modal/Sensual/Sensual-3_2x_scuxye.jpg',
        tooltip: 'Amanda Café',
        altText: 'Terceira Foto do Portfólio Sensual',
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907881/portfolio/Modal/Sensual/Sensual-4_kqszxx.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909147/portfolio/Modal/Sensual/Sensual-4_2x_ghjwba.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quarta Foto do Portfólio Sensual',
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907881/portfolio/Modal/Sensual/Sensual-5_y5locj.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909147/portfolio/Modal/Sensual/Sensual-5_2x_peeazc.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Sensual',
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907881/portfolio/Modal/Sensual/Sensual-6_vgpcwn.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909146/portfolio/Modal/Sensual/Sensual-6_2x_zj8qem.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Sensual',
      },
    ],
  },
  {
    id: 5,
    title: 'Criativo',
    image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652632996/portfolio/banner-criativo_v17e5u.png',
    modal_images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907972/portfolio/Modal/Criativo/Criativo-1_hklfa8.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909302/portfolio/Modal/Criativo/Criativo-1_2x_wneyu5.jpg',
        tooltip: 'Amanda Café',
        altText: 'Primeira Foto do Portfólio Criativo',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907973/portfolio/Modal/Criativo/Criativo-2_swp9sk.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909302/portfolio/Modal/Criativo/Criativo-2_2x_ujpmkt.jpg',
        tooltip: 'Amanda Café',
        altText: 'Segunda Foto do Portfólio Criativo',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907972/portfolio/Modal/Criativo/Criativo-3_st3lwi.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909303/portfolio/Modal/Criativo/Criativo-3_2x_nblwmn.jpg',
        tooltip: 'Amanda Café',
        altText: 'Terceira Foto do Portfólio Criativo',
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907973/portfolio/Modal/Criativo/Criativo-4_ggtuhf.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909302/portfolio/Modal/Criativo/Criativo-4_2x_crrifp.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quarta Foto do Portfólio Criativo',
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907972/portfolio/Modal/Criativo/Criativo-5_lquzvi.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909302/portfolio/Modal/Criativo/Criativo-5_2x_dbx6rl.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Criativo',
      },
      {
        id: 6,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907972/portfolio/Modal/Criativo/Criativo-6_g8bnwd.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909302/portfolio/Modal/Criativo/Criativo-6_2x_ix2gcl.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Criativo',
      },
      {
        id: 7,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652907973/portfolio/Modal/Criativo/Criativo-7_j8n91a.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909303/portfolio/Modal/Criativo/Criativo-7_2x_fgvnoc.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Criativo',
      },
    ],
  },
  {
    id: 6,
    title: 'Estúdio',
    image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652632996/portfolio/banner-estudio_wjwqud.png',
    modal_images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908114/portfolio/Modal/Estudio/Est%C3%BAdio-1_tbowxy.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909439/portfolio/Modal/Estudio/Est%C3%BAdio-1_2x_fzc44w.jpg',
        tooltip: 'Amanda Café',
        altText: 'Primeira Foto do Portfólio Estúdio',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908114/portfolio/Modal/Estudio/Est%C3%BAdio-2_gy2kpn.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909439/portfolio/Modal/Estudio/Est%C3%BAdio-2_2x_gpjrtr.jpg',
        tooltip: 'Amanda Café',
        altText: 'Segunda Foto do Portfólio Estúdio',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908114/portfolio/Modal/Estudio/Est%C3%BAdio-3_oj5n5d.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909439/portfolio/Modal/Estudio/Est%C3%BAdio-3_2x_rcuexi.jpg',
        tooltip: 'Amanda Café',
        altText: 'Terceira Foto do Portfólio Estúdio',
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908114/portfolio/Modal/Estudio/Est%C3%BAdio-4_ejarrt.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909440/portfolio/Modal/Estudio/Est%C3%BAdio-4_2x_ifm1tw.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quarta Foto do Portfólio Estúdio',
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908113/portfolio/Modal/Estudio/Est%C3%BAdio-5_vsd2ph.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909439/portfolio/Modal/Estudio/Est%C3%BAdio-5_2x_jdmldr.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Estúdio',
      },
      {
        id: 6,
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909303/portfolio/Modal/Criativo/Criativo-7_2x_fgvnoc.jpg',
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909439/portfolio/Modal/Estudio/Est%C3%BAdio-6_2x_vxhavn.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Estúdio',
      },
      {
        id: 7,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908115/portfolio/Modal/Estudio/Est%C3%BAdio-7_t08ykv.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909440/portfolio/Modal/Estudio/Est%C3%BAdio-7_2x_wz9qfi.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Estúdio',
      },
    ],
  },
  {
    id: 7,
    title: 'Casal',
    image:
      'https://res.cloudinary.com/amanda-caf/image/upload/v1652632996/portfolio/banner-casal_motkfc.png',
    modal_images: [
      {
        id: 1,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908216/portfolio/Modal/Casal/Casal-1_fcbvhn.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909529/portfolio/Modal/Casal/Casal-1_2x_ncntgr.jpg',
        tooltip: 'Amanda Café',
        altText: 'Primeira Foto do Portfólio Casal',
      },
      {
        id: 2,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908217/portfolio/Modal/Casal/Casal-2_xwixlw.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909530/portfolio/Modal/Casal/Casal-2_2x_awul1w.jpg',
        tooltip: 'Amanda Café',
        altText: 'Segunda Foto do Portfólio Casal',
      },
      {
        id: 3,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908217/portfolio/Modal/Casal/Casal-3_cbmioq.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909530/portfolio/Modal/Casal/Casal-3_2x_tvaatw.jpg',
        tooltip: 'Amanda Café',
        altText: 'Terceira Foto do Portfólio Casal',
      },
      {
        id: 4,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908217/portfolio/Modal/Casal/Casal-4_glkk1m.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909530/portfolio/Modal/Casal/Casal-4_2x_sdmhjm.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quarta Foto do Portfólio Casal',
      },
      {
        id: 5,
        src: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652908217/portfolio/Modal/Casal/Casal-5_hrcsnw.jpg',
        src2: 'https://res.cloudinary.com/amanda-caf/image/upload/v1652909529/portfolio/Modal/Casal/Casal-5_2x_gdqu1y.jpg',
        tooltip: 'Amanda Café',
        altText: 'Quinta Foto do Portfólio Casal',
      },
    ],
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 380, itemsToShow: 2, itemsToScroll: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 1 },
];

const breakPoints2 = [
  { width: 1, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2, itemsToScroll: 1 },
  { width: 700, itemsToShow: 3, itemsToScroll: 1 },
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

export const Portfolio = () => {
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
            <Styled.TextContainer1 data-aos="fade-left">
              <Styled.SvgContainer>
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

                <div>
                  <svg
                    width="50"
                    height="48"
                    viewBox="0 0 50 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1002 33.2154L12.4588 2.91944e-05L42.6588 14.4868L15.1002 33.2154Z"
                      fill="#F98EB2"
                    />
                    <path
                      d="M46.8673 42.9298L35.766 42.621L41.6434 33.1295L46.8673 42.9298Z"
                      fill="#8EE7F9"
                    />
                  </svg>
                </div>
              </Styled.SvgContainer>

              <Styled.Title1>Celebrando belezas femininas</Styled.Title1>
              <Styled.SubTitle1>
                Hoje meu foco é valorizar mulheres em todos os momentos. Seja
                para uma comemoração, ou simplesmente por querer se amar e se
                sentir maravilhosa. Aqui você vai encontrar um pouco do que eu
                faço, e se identificar com qual estilo você gostaria de fazer o
                seu ensaio!
              </Styled.SubTitle1>
            </Styled.TextContainer1>

            <Styled.MobileIndicatorContainer data-aos="fade-left">
              <svg
                width="22"
                height="36"
                viewBox="0 0 22 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M10.7641 0C11.1935 0.0855161 11.6257 0.15632 12.0514 0.257468C16.1139 1.22941 19.0215 4.42937 19.5842 8.56632C19.8757 10.7116 19.472 12.7327 18.4357 14.6352C18.3235 14.8421 18.2362 14.8734 18.0256 14.7658C17.3424 14.4182 16.6003 14.306 15.8371 14.3161C15.8371 14.1754 15.9291 14.1092 15.9815 14.0283C16.6072 13.1096 17.0191 12.0623 17.1867 10.9635C17.3543 9.86462 17.2735 8.74217 16.9502 7.67866C16.6269 6.61516 16.0694 5.63765 15.3185 4.81803C14.5676 3.9984 13.6426 3.35751 12.6114 2.94249C7.63955 0.914011 2.15732 4.79074 2.41663 10.1507C2.52145 12.3134 3.41156 14.0954 5.04464 15.506C5.12461 15.5666 5.18825 15.6462 5.22982 15.7375C5.2714 15.8289 5.2896 15.9291 5.2828 16.0292C5.26992 16.7281 5.2782 17.4278 5.27728 18.1276C5.27728 18.5083 5.22762 18.5395 4.89292 18.3391C2.55088 16.9395 0.99044 14.9313 0.314587 12.2867C-1.03804 6.99669 2.09387 1.71216 7.38576 0.31172C7.86391 0.183906 8.3531 0.102987 8.83769 0H9.31952C9.38481 0.0277447 9.45502 0.0420443 9.52596 0.0420443C9.5969 0.0420443 9.66711 0.0277447 9.73239 0L9.93837 0C10.0037 0.0277447 10.0739 0.0420443 10.1448 0.0420443C10.2157 0.0420443 10.2859 0.0277447 10.3512 0L10.7641 0Z"
                    fill="white"
                  />
                  <path
                    d="M9.73226 0C9.67556 0.0509203 9.60204 0.0790872 9.52583 0.0790872C9.44962 0.0790872 9.3761 0.0509203 9.3194 0L9.73226 0Z"
                    fill="white"
                  />
                  <path
                    d="M10.3511 0C10.2944 0.0509203 10.2209 0.0790872 10.1447 0.0790872C10.0685 0.0790872 9.99493 0.0509203 9.93823 0L10.3511 0Z"
                    fill="white"
                  />
                  <path
                    d="M7.24955 21.1179V20.7133C7.24955 17.4459 7.24955 14.1785 7.24955 10.9111C7.24955 9.53183 8.15161 8.48908 9.48952 8.30334C10.9359 8.10196 12.3134 9.23942 12.3401 10.6987C12.3686 12.1194 12.3575 13.5419 12.3401 14.9635C12.3401 15.2439 12.4109 15.2954 12.6803 15.266C13.6357 15.1603 14.4062 15.518 14.9883 16.2775C15.0922 16.4127 15.163 16.4614 15.3478 16.4062C16.7988 16.0035 18.1478 16.7621 18.5579 18.2057C18.6094 18.3896 18.6499 18.4604 18.8696 18.4292C20.3813 18.2067 21.7386 19.2871 21.7726 20.8199C21.8204 22.9514 21.7891 25.0847 21.7956 27.2171C21.784 27.3652 21.7322 27.5074 21.6457 27.6281C20.8393 29.0506 20.0374 30.4787 19.2273 31.8966C19.1242 32.0733 19.0721 32.275 19.0765 32.4796C19.0848 33.3173 19.0765 34.154 19.0848 34.9908C19.0848 35.1821 19.0388 35.24 18.8411 35.24C15.5161 35.2332 12.1911 35.2332 8.86608 35.24C8.65183 35.24 8.60034 35.183 8.60309 34.9733C8.61597 34.1136 8.6031 33.2538 8.61229 32.3986C8.61813 32.2971 8.60247 32.1955 8.56635 32.1004C8.53022 32.0053 8.47443 31.919 8.40264 31.8469C7.6146 31 6.79071 30.1844 6.05049 29.2925C5.02889 28.0456 4.4312 26.5927 3.965 25.0746C3.7581 24.3978 3.45742 23.7477 3.33144 23.0516C3.24402 22.5865 3.30695 22.1055 3.51112 21.6785C3.7153 21.2515 4.05011 20.9005 4.46706 20.6765C4.87523 20.4492 5.34389 20.3542 5.80836 20.4046C6.27284 20.455 6.71021 20.6483 7.06013 20.9579L7.24955 21.1179Z"
                    fill="white"
                  />
                  <path
                    d="M14.3446 12.7722C14.3005 11.9189 14.3786 11.1171 14.2913 10.3153C14.0531 8.18932 12.2472 6.4367 10.1663 6.33095C7.83527 6.20774 5.85737 7.67622 5.39025 9.8693C5.21094 10.7097 5.2983 11.5594 5.27715 12.4054C5.27715 12.4725 5.27163 12.5396 5.26795 12.6205C4.17647 11.1713 3.94107 8.21231 5.89691 6.14429C6.84564 5.12862 8.14986 4.51843 9.53755 4.44099C10.9252 4.36356 12.2892 4.82485 13.3451 5.72866C15.6669 7.72404 15.6733 10.8973 14.3446 12.7722Z"
                    fill="white"
                  />
                </g>
              </svg>

              <Styled.MobileIndicatorTitle>
                Toque para visualizar
              </Styled.MobileIndicatorTitle>
            </Styled.MobileIndicatorContainer>

            <Styled.CarouselContainer data-aos="fade-left">
              <Carousel
                disableArrowsOnEnd={false}
                onChange={onChange}
                breakPoints={breakPoints}
                renderArrow={myArrow}
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
                    <Styled.CarouselImage src={item.image} />

                    <Styled.CarouselImageOverlay>
                      <Styled.CarouselImageText>
                        {item.title}
                      </Styled.CarouselImageText>
                    </Styled.CarouselImageOverlay>
                  </Styled.CarouselImageContainer>
                ))}
              </Carousel>
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

          <Styled.Sliderr {...settings}>
            {data[currentIndex].modal_images.map((item) => (
              <Styled.ModalImageContainerWrapper key={item.id}>
                <Styled.ModalImageContainer>
                  <Styled.CarouselImage
                    src={item.src2}
                    alt={item.altText}
                    title={item.tooltip}
                  />
                </Styled.ModalImageContainer>
              </Styled.ModalImageContainerWrapper>
            ))}
          </Styled.Sliderr>
        </Modal>
      ) : null}
    </>
  );
};
