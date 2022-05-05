import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Container
      href="#"
      aria-label="Vá para o topo"
      title="Vá para o topo"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
