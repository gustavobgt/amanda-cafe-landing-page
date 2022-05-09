import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { NavLinks } from '../NavLinks';
import { useState } from 'react';
import { MenuLinkProps } from '../MenuLink';

export type MenuProps = {
  links?: MenuLinkProps[];
};

export const Menu = ({ links = [] }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.MobileContainer>
        <Styled.Button
          visible={visible}
          onClick={() => setVisible((prevState) => !prevState)}
          aria-label="Open/Close menu"
        >
          {visible ? (
            <svg
              aria-label="Close menu"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 1L1 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              aria-label="Open menu"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 17.5H1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 9.5H1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 1.5H1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Styled.Button>
      </Styled.MobileContainer>

      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <NavLinks links={links} />
          </Styled.MenuContainer>

          <Styled.Footer>
            <Styled.Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5571992787948"
            >
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5949 0.00688405C9.89669 0.134643 8.24237 0.607658 6.73327 1.39696C4.37366 2.62099 2.46693 4.567 1.2913 6.9511C0.899676 7.7071 0.596805 8.50587 0.388723 9.33147C0.111366 10.3326 -0.0188402 11.3687 0.00219576 12.4074C0.00219576 13.0336 0.0266724 13.7087 0.0613476 13.9728C0.293537 15.881 0.959903 17.7105 2.00928 19.321L2.36113 19.8646L1.58298 22.1593C1.1526 23.427 0.809925 24.4641 0.819104 24.4743C0.828282 24.4845 1.89608 24.151 3.19742 23.7349C4.49876 23.3188 5.58083 22.9762 5.60531 22.9762C5.75974 23.0501 5.90869 23.1349 6.05099 23.2301C6.27637 23.3668 6.74551 23.6217 7.09328 23.788C8.64861 24.5363 10.3421 24.9544 12.067 25.0158C13.7919 25.0773 15.5108 24.7807 17.1154 24.1449C18.9373 23.4142 20.5635 22.2685 21.865 20.7991C23.1664 19.3296 24.1072 17.5769 24.6124 15.6801C24.902 14.6474 25.0306 13.5762 24.9939 12.5042C25.0306 11.4323 24.902 10.3611 24.6124 9.32839C24.0236 7.1184 22.8452 5.11003 21.2031 3.51807C19.561 1.92611 17.5171 0.81044 15.2899 0.290389C14.4626 0.105028 13.6176 0.00998102 12.7698 0.00688405C12.2313 -0.00229468 11.702 -0.00229468 11.5949 0.00688405ZM8.60981 5.81092C8.7159 5.87803 8.80354 5.97056 8.86478 6.08014C9.00654 6.33918 10.2008 9.20194 10.2345 9.37837C10.2783 9.59866 10.058 9.97501 9.57358 10.5237C9.06365 11.0958 8.96166 11.2774 9.00144 11.4824C9.50578 12.4204 10.151 13.2754 10.9147 14.0177C11.8747 14.9769 13.0588 15.6815 14.3598 16.0676C14.7361 16.0921 14.8697 15.9891 15.4459 15.2263C15.705 14.8785 15.9793 14.5317 16.0579 14.4532C16.1619 14.3578 16.2924 14.296 16.4321 14.276C16.5719 14.2559 16.7144 14.2786 16.8411 14.341C17.2419 14.493 19.7038 15.6913 19.8803 15.8239L20.0465 15.9463L20.0169 16.4654C20.0369 17.0338 19.8763 17.5938 19.558 18.0651C19.2397 18.5364 18.7801 18.8947 18.2455 19.0885C17.0706 19.6606 16.1507 19.6463 14.3547 19.0252C12.2768 18.3988 10.4025 17.2321 8.92291 15.6444C8.1098 14.8422 7.37554 13.9638 6.73021 13.0213C5.72298 11.8369 5.19577 10.3182 5.25243 8.76443C5.32549 7.79015 5.75804 6.8778 6.46607 6.20457C6.67049 6.01766 6.91343 5.87786 7.17774 5.79504C7.44206 5.71222 7.72133 5.6884 7.99586 5.72523C8.20395 5.71759 8.41176 5.7466 8.60981 5.81092V5.81092Z"
                  fill="white"
                />
              </svg>
            </Styled.Link>

            <Styled.Link
              target="_blank"
              href="https://www.instagram.com/amandacafefotografia/"
            >
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.9321 0.0729286C4.58029 0.256661 3.31443 0.840828 2.29752 1.75024C1.28061 2.65965 0.559202 3.85266 0.226198 5.17563C0.151203 5.47321 0.0940428 5.775 0.0550212 6.0794C-0.0183404 6.68463 -0.0183404 18.3165 0.0550212 18.9177C0.211854 20.2987 0.786204 21.5991 1.70141 22.6452C2.61661 23.6913 3.82912 24.4334 5.17709 24.7723C5.47477 24.8469 5.77654 24.904 6.08086 24.9435C6.68609 25.0169 18.318 25.0169 18.9191 24.9435C20.1722 24.7978 21.3611 24.3103 22.3558 23.5344C23.3505 22.7584 24.1126 21.7239 24.5588 20.5439C24.7419 20.0148 24.8712 19.4686 24.945 18.9136C25.0183 18.3084 25.0183 6.67648 24.945 6.07532C24.7993 4.82222 24.3118 3.63331 23.5358 2.63865C22.7599 1.64398 21.7253 0.881857 20.5453 0.435648C20.0162 0.252577 19.4701 0.123205 18.9151 0.0494832C18.2507 -0.0299919 6.51186 -0.00756539 5.9321 0.0729286ZM20.3904 3.25703C20.7043 3.36384 20.9894 3.54129 21.2238 3.77572C21.4583 4.01014 21.6357 4.29527 21.7425 4.60912C21.8464 5.00965 21.8499 5.42959 21.7527 5.83179C21.6582 6.13993 21.4932 6.42179 21.2707 6.65496C21.0482 6.88813 20.7744 7.06621 20.471 7.17502C20.1676 7.28383 19.843 7.32038 19.5231 7.28177C19.2031 7.24316 18.8965 7.13045 18.6277 6.9526C18.2998 6.73817 18.04 6.43437 17.8791 6.07707C17.7183 5.71976 17.663 5.32387 17.7199 4.93617C17.7778 4.55822 17.9375 4.20316 18.1818 3.90899C18.4261 3.61481 18.7458 3.39263 19.1066 3.2662C19.5257 3.14987 19.968 3.14531 20.3894 3.25295L20.3904 3.25703ZM13.5739 5.73807C15.0006 5.96426 16.3178 6.64 17.3337 7.66688C17.9759 8.29614 18.4842 9.04866 18.8283 9.87929C19.1723 10.7099 19.345 11.6015 19.3359 12.5006C19.345 13.3996 19.1723 14.2912 18.8283 15.1218C18.4842 15.9525 17.9759 16.705 17.3337 17.3343C16.7044 17.9764 15.9519 18.4848 15.1213 18.8289C14.2906 19.1729 13.399 19.3456 12.5 19.3364C11.6006 19.3458 10.7086 19.1733 9.87763 18.8293C9.04663 18.4852 8.29375 17.9767 7.66425 17.3343C7.0221 16.705 6.51373 15.9525 6.16967 15.1218C5.82561 14.2912 5.65297 13.3996 5.66209 12.5006C5.65283 11.6014 5.82541 10.7096 6.16947 9.87877C6.51353 9.04794 7.02197 8.29523 7.66425 7.66585C8.67136 6.65379 9.96813 5.97977 11.3751 5.73705C12.1056 5.65146 12.8435 5.65146 13.5739 5.73705V5.73807Z"
                  fill="white"
                />
                <path
                  d="M19.4765 4.71098C19.338 4.79264 19.2372 4.92557 19.196 5.08101C19.1548 5.23644 19.1765 5.40185 19.2564 5.54139C19.3251 5.6514 19.4278 5.73603 19.5489 5.7825C19.67 5.82897 19.803 5.83475 19.9276 5.79895C20.0523 5.76315 20.1619 5.68773 20.2399 5.58409C20.3179 5.48045 20.36 5.35422 20.3599 5.22451C20.3567 5.12234 20.3276 5.02268 20.2752 4.93489C20.2228 4.8471 20.149 4.77407 20.0606 4.7227C19.9723 4.67133 19.8723 4.64328 19.7701 4.64123C19.6679 4.63918 19.5669 4.66319 19.4765 4.71098Z"
                  fill="white"
                />
                <path
                  d="M11.5514 7.20721C10.3123 7.43492 9.19184 8.08869 8.38392 9.05533C7.576 10.022 7.13147 11.2407 7.12726 12.5005C7.12984 13.2821 7.30236 14.0537 7.63289 14.762C7.96341 15.4703 8.44403 16.0982 9.0414 16.6023C9.63877 17.1063 10.3386 17.4743 11.0924 17.681C11.8462 17.8876 12.6359 17.9278 13.4068 17.7988C14.2384 17.654 15.0243 17.3157 15.701 16.811C16.3777 16.3064 16.9263 15.6497 17.3023 14.8939C17.6783 14.1381 17.8712 13.3045 17.8655 12.4604C17.8598 11.6163 17.6556 10.7853 17.2695 10.0347C16.7385 9.01868 15.8988 8.19741 14.8711 7.68927C13.8435 7.18113 12.6811 7.01233 11.5514 7.20721Z"
                  fill="white"
                />
              </svg>
            </Styled.Link>

            <Styled.Link
              target="_blank"
              href="mailto: amandacafefotografia@gmail.com"
            >
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.78715 3.08464C1.19181 3.22823 0.677022 3.60514 0.355746 4.13266C0.0344694 4.66018 -0.0670547 5.29524 0.07345 5.89848C0.164978 6.25908 0.344732 6.59052 0.596119 6.8622C0.816191 7.0892 11.2156 14.1356 11.5997 14.309C11.8942 14.4408 12.2132 14.5067 12.5351 14.5025C12.857 14.4982 13.1742 14.4237 13.4652 14.2842C13.9288 14.0613 24.1183 7.1542 24.3771 6.88695C24.6507 6.59009 24.8415 6.22495 24.9301 5.82889C25.0187 5.43282 25.0018 5.02006 24.8811 4.63277C24.7605 4.24549 24.5405 3.89759 24.2435 3.62468C23.9466 3.35177 23.5834 3.16364 23.1911 3.07951C22.7276 2.97014 2.23647 2.97527 1.78715 3.08464Z"
                  fill="white"
                />
                <path
                  d="M0 14.1008C0 18.1064 0.0142639 19.9399 0.053999 20.1236C0.150889 20.5598 0.367131 20.9596 0.67796 21.2771C0.988789 21.5946 1.38164 21.8171 1.81151 21.919C2.26999 22.0273 22.6449 22.0273 23.1574 21.919C23.5941 21.8251 23.9948 21.6059 24.3117 21.2875C24.6287 20.9691 24.8483 20.5651 24.9445 20.1236C25.0076 19.8223 25.0229 8.3256 24.9587 8.35553C24.9394 8.35553 22.5807 9.9528 19.7147 11.8906C16.8487 13.8284 14.3495 15.4948 14.1538 15.5887C13.6438 15.8586 13.0733 15.9898 12.4982 15.9694C11.9231 15.9898 11.3526 15.8586 10.8426 15.5887C10.647 15.4948 8.14773 13.8284 5.28171 11.8906C2.41569 9.9528 0.0590932 8.35657 0.0387162 8.35657C0.0183393 8.35657 0 10.9361 0 14.1008Z"
                  fill="white"
                />
              </svg>
            </Styled.Link>
          </Styled.Footer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
