import PropTypes  from "prop-types";


import { SearchBtn } from "components/Searchbar/Searchbar.styled";
import { Container } from "components/Container/Container.styled";
// import { Button } from "./Button.styled";



export const ButtonLoadMore = ({onClickBtn, disabled}) =>{
    return(
        <Container>
            <SearchBtn 
                type="button" 
                disabled={disabled} 
                onClick={onClickBtn}
                style={{marginBottom: '10px'}}
                >Load More</SearchBtn>

        </Container>   
    )
}
//<Button type="button" disabled={disabled} onClick={onClickBtn}>Load More</Button>


ButtonLoadMore.propTypes = {
    onClickBtn: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
}