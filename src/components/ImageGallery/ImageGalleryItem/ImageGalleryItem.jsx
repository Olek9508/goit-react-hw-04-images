import { ImageContainer } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";


export function ImageGalleryItem  ({id, webformatURL, onClickItem}) {
    const contentForModal = (id) => {
    onClickItem(id)
}

  return (
    <ImageContainer src={webformatURL } alt="" onClick={()=>contentForModal(id)}/>
  )
}

ImageGalleryItem.propTypes = {
    onClickItem: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
}