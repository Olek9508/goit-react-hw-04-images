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



//===================================WAS============================//


// import { Component } from "react";
// import PropTypes from "prop-types";
// import { Overlay,ModalStyled } from "./Modal.styled";

// export class Modal extends Component{
//   static propTypes = {
//     onBackdrop: PropTypes.func.isRequired,
//     content: PropTypes.string.isRequired,
//   };

//     componentDidMount() { 
//         window.addEventListener("keydown",this.onKeyDown)
//     }
    
//     componentWillUnmount() {
//         window.removeEventListener("keydown",this.onKeyDown)
//     }

//   onKeyDown = (event) => {
//     if (event.code === "Escape") {
//       this.props.onBackdrop();
//     }
//   };

//   handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.onBackdrop();
//     }
//   };

//     render() {
//     const { content } = this.props;
//         return (
//     <Overlay onClick={this.handleBackdropClick}>
//         <ModalStyled>
//           <img src={content} alt="" />
//         </ModalStyled>
//     </Overlay>
//         )
//     }
// }