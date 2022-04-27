import Head from 'next/head';

import { About } from '../../components/Sections/About';
import { Portfolio } from '../../components/Sections/Portfolio';
import { Base } from '../Base';
import config from '../../config';
import { theme } from '../../styles/theme';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: { links?: MenuLinkProps[] };
};

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
  const { menu, footerHtml, title } = data[0];
  const { links } = menu;

  return (
    <Base links={links} footerHtml={footerHtml}>
      <Head>
        <title>
          {title} | {config.siteName}
        </title>

        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta
          name="description"
          content="As landing pages mais legais da Internet."
        />
      </Head>

      <About />

      <Portfolio />
    </Base>
  );
}

export default Home;
