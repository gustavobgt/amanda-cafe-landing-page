import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';

export type GridTwoColumnsProps = {
  background?: boolean;
  backgroundImg?: string;
  sectionId?: string;
  component?: string;
  children?: React.ReactNode;
};

export const GridTwoColumns = ({
  background = false,
  backgroundImg = '',
  sectionId = '',
  children,
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground
      background={background}
      backgroundImg={backgroundImg}
      sectionId={sectionId}
    >
      <Styled.Container>{children}</Styled.Container>
    </SectionBackground>
  );
};
