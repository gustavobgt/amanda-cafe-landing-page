import Link from 'next/link';
import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
  isActive?: boolean;
};

export const MenuLink = ({
  children,
  link,
  isActive = false,
}: MenuLinkProps) => {
  return (
    <Link href={link} passHref>
      <Styled.Container isActive={isActive}>{children}</Styled.Container>
    </Link>
  );
};
