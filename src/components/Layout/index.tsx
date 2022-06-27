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
        <title>
          Amanda Café Fotografia | Ensaios femininos - Bahia e Sergipe
        </title>

        <meta name="theme-color" content="#9100FF" />
        <meta
          name="description"
          content="Fotógrafa especialista em retratos femininos | Ensaios em Salvador e Aracaju | Retratos externos e em estúdio | Casal, Gestante, formaturas, etc."
        />
      </Head>

      {children}
    </Base>
  );
}

export default Layout;
