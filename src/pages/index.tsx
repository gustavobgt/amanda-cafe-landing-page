import Home from '../templates/Home';

const data = [
  {
    title: 'Amanda Café',
    footerHtml:
      '<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>',
    slug: 'landing-page',
    menu: {
      text: 'Landing Page',
      link: '#home',
      links: [
        {
          children: 'intro',
          link: '#intro',
        },
        {
          children: 'grid-one',
          link: '#grid-one',
        },
        {
          children: 'gallery',
          link: '#gallery',
        },
      ],
    },
    sections: [
      {
        title: 'January brings us Firefox 85',
        text:
          'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
        srcImg:
          'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
        background: true,
        sectionId: 'home',
        component: 'section.section-two-columns',
      },
      {
        title: 'news coverage and some surprises',
        html:
          '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.</p><p>We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.</p><p>We’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.</p>',
        background: false,
        sectionId: 'intro',
        component: 'section.section-content',
      },
      {
        background: true,
        title: 'My Grid',
        description:
          'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
        grid: [
          {
            title: 'Teste 1',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          },
          {
            title: 'Teste 2',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          },
          {
            title: 'Teste 3',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          },
        ],
        sectionId: 'grid-one',
        component: 'section.section-grid-text',
      },
      {
        background: false,
        title: 'Gallery',
        description:
          'Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        grid: [
          {
            altText: 'Uma paisagem com céu claro e montanhas bonitas',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_6a2049d13a.jpg',
          },
          {
            altText: 'Um livro grande aberto',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
          },
          {
            altText: 'Imagem do topo de uma cidade grande',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg',
          },
          {
            altText: 'Filme para câmeras antigas',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_9d32ada1f9.jpg',
          },
          {
            altText: 'Tela de notebook com Webull',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_a1_973b2a68c9.jpg',
          },
          {
            altText: 'Filme Kodak para câmeras antigas',
            srcImg:
              'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg',
          },
        ],
        sectionId: 'gallery',
        component: 'section.section-grid-image',
      },
    ],
  },
];

export default function Index() {
  return <Home data={data} />;
}
