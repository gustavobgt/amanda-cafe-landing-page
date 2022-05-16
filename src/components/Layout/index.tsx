import Head from 'next/head';

import { Base } from '../../templates/Base';
import { ReactNode } from 'react';

import { data } from './data';

export type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const { menu, footerHtml, title } = data[0];
  const { links } = menu;

  return (
    <Base links={links} footerHtml={footerHtml}>
      <Head>
        <title>{title}</title>

        <meta name="theme-color" content="#9100FF" />
        <meta
          name="description"
          content="As landing pages mais legais da Internet."
        />
      </Head>

      {children}
    </Base>
  );
}

export default Layout;
