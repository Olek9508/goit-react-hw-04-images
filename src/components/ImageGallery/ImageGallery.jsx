import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { GalleryListContainer, ItemContainer } from "./ImageGallery.styled";
import PropTypes from "prop-types";


export function ImageGallery  ({onClick, onClickItem, images}) {
    const onOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      onClick();
    }
  };
    return (
    <GalleryListContainer onClick={onOpenModal}>
        {images &&
          images.map((image) => (
            <ItemContainer key={image.id}>
              <ImageGalleryItem {...image} onClickItem={onClickItem} />
            </ItemContainer>
          ))}
    </GalleryListContainer>
        )
    }

ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    onClickItem: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };