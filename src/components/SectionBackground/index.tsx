import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  backgroundImg?: string;
  sectionId?: string;
};

export const SectionBackground = ({
  children,
  background = false,
  backgroundImg = '',
  sectionId = '',
  ...rest
}: SectionBackgroundProps) => {
  return (
    <Styled.Container
      {...rest}
      background={background}
      backgroundImg={backgroundImg}
      id={sectionId}
    >
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
