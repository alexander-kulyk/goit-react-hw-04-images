import { useEffect } from "react";
import PropTypes  from "prop-types";
import { Overlay, ModalBody, Img } from "./Modal.styled";




export const Modal = ({url, tags,toggle}) =>{
    
    
    const handeleKeyDown  = e =>{
        if (e.code === 'Escape') {
            console.log('Escape')
            toggle(); 
        }
    };
    
    useEffect(() => {
        
        window.addEventListener('keydown', handeleKeyDown);
    
      return () => {
        window.removeEventListener('keydown', handeleKeyDown );
      }
    }, [handeleKeyDown]);


    


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



// export class Modal extends Component{

//     componentDidMount(){
//         window.addEventListener('keydown', this.handeleKeyDown);
        
//     }

//     componentWillUnmount(){
//         window.removeEventListener('keydown',  this.handeleKeyDown );
//     }

//     handeleKeyDown = e =>{
//         if (e.code === 'Escape') {
//             this.props.toggle(); 
//         }
//     }

//     onClickOverlay = e =>{

//         if (e.target === e.currentTarget) {
//             this.props.toggle(); 
//         }

//     }



//     render(){
//         const { url, tags } = this.props

//         return(
//             <Overlay name="overlay" onClick={this.onClickOverlay}>
//                 <ModalBody>
//                     <Img src={url} alt={tags}/>
//                 </ModalBody>
//             </Overlay>
    
//         );
//     } 
// }

Modal.propTypes = {
    toggle: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};