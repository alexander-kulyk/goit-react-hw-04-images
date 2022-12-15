import PropTypes  from "prop-types";
import { useState } from "react";
import { Form, Header, Input, NameBtn, SearchBtn } from "./Searchbar.styled";



export const Searchbar = ({onSubmit}) =>{
    const [query, setQuery] = useState('');

    const handelChangeInput = e =>{
        
        setQuery(e.target.value)
    }

    const  handleSubmitForm = e =>{
        e.preventDefault();
        // console.log(e.currentTarget.elements.query.value)
        onSubmit(query);

        reset()

    };


    const  reset = () =>{
        setQuery('')
    }
    
    
    return(
        <Header>
            <Form onSubmit={handleSubmitForm}>
                <Input 
                    type='text'
                    name="query"
                    autocomplete="off"
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handelChangeInput}
                />
                <SearchBtn type="submit">
                    <NameBtn>Search</NameBtn>
                </SearchBtn>
        
            </Form>
        </Header>
    )
}








// export class Searchbar extends Component{
//     state = {
//         query:''
//     }


//     handelChangeInput = e =>{
//         this.setState({query: e.target.value})
//     }
//     handleSubmitForm = e =>{
//         e.preventDefault();
//         // console.log(e.currentTarget.elements.query.value)
//         const { query } = this.state;
//         const { onSubmit } = this.props;
//         onSubmit(query);

//         this.reset()

//     }
//     reset = () =>{
//         this.setState({query: '',})
//     }

//     render(){
//         const { query } = this.state
        
//         return(
//             <Header>
//                 <Form onSubmit={this.handleSubmitForm}>
//                     <Input 
//                         type='text'
//                         name="query"
//                         autocomplete="off"
//                         placeholder="Search images and photos"

//                         value={query}
//                         onChange={this.handelChangeInput}
//                     />
//                     <SearchBtn type="submit">
//                         <NameBtn>Search</NameBtn>
//                     </SearchBtn>

//                 </Form>
//             </Header>
//         )
//     }
// }

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}