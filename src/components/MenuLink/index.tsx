import * as Styled from './styles';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <Styled.Container href={link} onClick={handleClick} isActive={isActive}>
      {children}
    </Styled.Container>
  );
};
