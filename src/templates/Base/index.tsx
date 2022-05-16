import * as Styled from './styles';
import { Menu } from '../../components/Menu';
// import { GoTop } from '../../components/GoTop';
import { MenuLinkProps } from '../../components/MenuLink';

export type BaseProps = {
  children: React.ReactNode;
  links?: MenuLinkProps[];
  footerHtml: string;
};

export const Base = ({ links, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} />
      <Styled.Container>{children}</Styled.Container>
    </>
  );
};
