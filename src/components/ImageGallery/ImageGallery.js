import PropTypes  from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import ImgList from "./ImageGallery.styled"




export const ImageGallery = ({ imgData, onClickCard }) =>{
    return(
            <ImgList >
                {imgData.map(({ id,webformatURL,tags }) =>(
                    <ImageGalleryItem 
                        key={id} 
                        webformatURL={webformatURL} 
                        tags={tags} 
                        id={id}
                        onClickCard={onClickCard} 
                        />
                ) )}
            </ImgList>

    )
};


ImageGallery.propTypes = {
    onClickCard: PropTypes.func.isRequired,
    imgData: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          largeImageURL:  PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        }),
    ),
}

