import Head from 'next/head';

import { Base } from '../../templates/Base';
import { ReactNode } from 'react';

import { data } from './data';

export type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const { menu, footerHtml } = data[0];
  const { links } = menu;

  return (
    <Base links={links} footerHtml={footerHtml}>
      <Head>
        <title>Amanda Café Fotografia</title>

        <meta name="theme-color" content="#9100FF" />
        <meta
          name="description"
          content="Fotógrafa de Salvador e Aracaju especialista em retratos femininos"
        />
      </Head>

      {children}
    </Base>
  );
}

export default Layout;
