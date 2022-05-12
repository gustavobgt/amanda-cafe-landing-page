import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
// import { GoTop } from '../../components/GoTop';
import { MenuLinkProps } from '../../components/MenuLink';

export type BaseProps = {
  children: React.ReactNode;
  links?: MenuLinkProps[];
  footerHtml: string;
};

export const Base = ({ links, footerHtml, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
    </>
  );
};
