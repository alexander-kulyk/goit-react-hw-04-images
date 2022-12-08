import { Component } from "react";
import PropTypes  from "prop-types";
import { Form, Header, Input, NameBtn, SearchBtn } from "./Searchbar.styled";


export class Searchbar extends Component{
    state = {
        query:''
    }


    handelChangeInput = e =>{
        this.setState({query: e.target.value})
    }
    handleSubmitForm = e =>{
        e.preventDefault();
        // console.log(e.currentTarget.elements.query.value)
        const { query } = this.state;
        const { onSubmit } = this.props;
        onSubmit(query);

        this.reset()

    }
    reset = () =>{
        this.setState({query: '',})
    }

    render(){
        const { query } = this.state
        
        return(
            <Header>
                <Form onSubmit={this.handleSubmitForm}>
                    <Input 
                        type='text'
                        name="query"
                        autocomplete="off"
                        placeholder="Search images and photos"

                        value={query}
                        onChange={this.handelChangeInput}
                    />
                    <SearchBtn type="submit">
                        <NameBtn>Search</NameBtn>
                    </SearchBtn>

                </Form>
            </Header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}