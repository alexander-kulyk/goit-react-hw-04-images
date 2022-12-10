import { useEffect } from "react";
import PropTypes  from "prop-types";
import { Overlay, ModalBody, Img } from "./Modal.styled";




export const Modal = ({url, tags,toggle}) =>{
    
    
    
    useEffect(() => {

        const handeleKeyDown  = e =>{
            if (e.code === 'Escape') {
                toggle(); 
            }
        };
        
        window.addEventListener('keydown', handeleKeyDown);
    
      return () => {
        window.removeEventListener('keydown', handeleKeyDown );
      }
    }, [toggle]);


    


    const onClickOverlay = e =>{
        if (e.target === e.currentTarget) {
            toggle(); 
        }
    };


        return(
            <Overlay name="overlay" onClick={onClickOverlay}>
                <ModalBody>
                    <Img src={url} alt={tags}/>
                </ModalBody>
            </Overlay>
    
        );
    

}



Modal.propTypes = {
    toggle: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};