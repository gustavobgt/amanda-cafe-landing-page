import Home from '../templates/Home';

const data = [
  {
    title: 'Amanda Café',
    footerHtml:
      '<p><a href="https://beacons.page/otaviomiranda">Feito por Gustavo Bruno</a></p>',
    slug: 'landing-page',
    menu: {
      links: [
        {
          children: 'Sobre',
          link: '/#sobre',
        },
        {
          children: 'Portfólio',
          link: '/#portfolio',
        },
        {
          children: 'Feedbacks',
          link: '/#feedbacks',
        },
        {
          children: 'Loja',
          link: '/#loja',
        },
        {
          children: 'Contato',
          link: '/#contato',
        },
      ],
    },
    sections: [
      {
        title: 'Toda Mulher',
        text:
          'deve querer se ver e se sentir cada dia melhor, e é isso que busco com minha fotografia. Quero reforçar a confiança dessas mulheres para que elas celebrem suas belezas.',
        srcImg: 'https://i.imgur.com/YKMiFVo.png',
        background: true,
        backgroundImg: 'https://i.imgur.com/ejAm74w.png',
        sectionId: 'sobre',
        component: 'section.section-two-columns',
      },
      {
        title: 'Celebrando belezas femininas',
        text:
          'Hoje meu foco é valorizar mulheres em todos os momentos. Seja para uma comemoração, ou simplesmente por querer se amar e se sentir maravilhosa. Aqui você vai encontrar um pouco do que eu faço, e se identificar com qual estilo você gostaria de fazer o seu ensaio! ',
        srcImg: 'https://i.imgur.com/XLWS72x.png',
        background: true,
        backgroundImg: 'https://i.imgur.com/HiKn6r3.png',
        sectionId: 'portfolio',
        component: 'section.section-two-columns',
      },
      {
        title: 'Graziele Esteves',
        text:
          'Quando conheci Amanda lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere velit risus ut dignissim lectus. Bibendum porta lorem venenatis ante sit augue metus.',
        srcImg: 'https://i.imgur.com/TDwbEQg.png',
        background: true,
        backgroundImg: 'https://i.imgur.com/rndYNNe.png',
        sectionId: 'feedbacks',
        component: 'section.section-two-columns',
      },
      {
        title: 'Preset: Fairytail',
        text:
          'Um dos meus presets favoritos! Mistura tons quentes e traz aquela sensação de agradabilidade quando se olha pra foto! Lembrando que presets são configurações de cores prontas, sendo necessário adaptar para cada fotografia',
        srcImg: 'https://i.imgur.com/wSxbbVz.png',
        background: true,
        backgroundImg: 'https://i.imgur.com/euiAPwX.png',
        sectionId: 'loja',
        component: 'section.section-two-columns',
      },
      {
        title: 'Quer se sentir maravilhosa? Entre em contato!',
        text:
          'Substituir o final da página de contato por: Se preferir explicar sua proposta já completinha, pode enviar na caixinha ao lado! Ela vai direto pro meu whatsapp e continuamos nossa conversa por lá! ',
        srcImg: 'https://i.imgur.com/lAQud8p.png',
        background: true,
        backgroundImg: 'https://i.imgur.com/4z5367A.png',
        sectionId: 'contato',
        component: 'section.section-two-columns',
      },
    ],
  },
];

export default function Index() {
  return <Home data={data} />;
}
