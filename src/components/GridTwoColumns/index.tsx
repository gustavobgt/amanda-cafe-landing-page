import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import SocialMedia from '../SocialMedia';

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
  ...rest
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground
      {...rest}
      background={background}
      backgroundImg={backgroundImg}
      sectionId={sectionId}
    >
      <Styled.Container>{children}</Styled.Container>

      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
        }}
      >
        <SocialMedia />
      </div>
    </SectionBackground>
  );
};
