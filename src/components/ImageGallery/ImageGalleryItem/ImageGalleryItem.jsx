import { Component } from "react";
import { ImageContainer } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";


export class ImageGalleryItem extends Component {
  static propTypes = {
    onClickItem: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  };

    contentForModal(id) {
    this.props.onClickItem(id)
}

    render() {
        const { id, webformatURL  } = this.props;
        return (
          <ImageContainer src={webformatURL } alt="" onClick={()=>this.contentForModal(id)}/>
        )
    }
}