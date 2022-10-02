import { useEffect } from "react";
import PropTypes from "prop-types";
import { Overlay,ModalStyled } from "./Modal.styled";

export function Modal({ content, onBackdrop }) {
  
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const onKeyDown = (event) => {
    if (event.code === "Escape") {
      onBackdrop();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onBackdrop();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
        <ModalStyled>
          <img src={content} alt="" />
        </ModalStyled>
    </Overlay>
  )
}

Modal.propTypes = {
  onBackdrop: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
}