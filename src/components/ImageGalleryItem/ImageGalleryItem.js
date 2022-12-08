
import PropTypes  from "prop-types";
import {Img, Items} from "./ImageGalleryItem.styled";




export const ImageGalleryItem = ({ webformatURL,tags, onClickCard, id }) =>{
    
    return(
        <Items onClick={()=>onClickCard(id)} >
            <Img src={webformatURL} alt={tags} width="300"/>
        </Items> 
        
    );
};


ImageGalleryItem.propTypes={
    onClickCard: PropTypes.func.isRequired,
    imgData: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL:  PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        }),
    ),
}

            
