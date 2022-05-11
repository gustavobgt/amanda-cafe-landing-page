import Head from 'next/head';

import { About } from '../../components/Sections/About';
import { Portfolio } from '../../components/Sections/Portfolio';
import { Feedback } from '../../components/Sections/Feedback';
import { Contact } from '../../components/Sections/Contact';
import { Store } from '../../components/Sections/Store';
import { Base } from '../Base';
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
        <title>{title}</title>

        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta
          name="description"
          content="As landing pages mais legais da Internet."
        />
      </Head>

      <About />

      <Portfolio />

      <Feedback />

      <Store />

      <Contact />
    </Base>
  );
}

export default Home;
