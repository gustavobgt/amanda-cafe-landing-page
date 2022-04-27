import * as Styled from './styles';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import { useRouter } from 'next/router';

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  const router = useRouter();

  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => {
        const isActive = router.asPath === link.link;
        console.log('isActive = ', isActive);
        console.log('router.asPath = ', router.asPath);
        console.log('link.link = ', link.link);
        return <MenuLink isActive={isActive} key={link.link} {...link} />;
      })}
    </Styled.Container>
  );
};
