import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = ({ onClose, children }) => {
  const modalWrapperRef = useRef(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const backDropHandler = useCallback(
    (e) => {
      if (!modalWrapperRef?.current?.contains(e.target)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    setIsBrowser(true);

    // attach event listener to the whole windor with our handler
    window.addEventListener('click', backDropHandler);

    // remove the event listener when the modal is closed
    return () => window.removeEventListener('click', backDropHandler);
  }, [backDropHandler]);

  const modalContent = (
    <StyledModalOverlay>
      <StyledModalWrapper ref={modalWrapperRef}>
        <StyledModal>{children}</StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root'),
    );
  } else {
    return null;
  }
};

const StyledModalWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  //: auto;
`;

const StyledModal = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
`;

const StyledModalOverlay = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.85);
`;

export default Modal;
