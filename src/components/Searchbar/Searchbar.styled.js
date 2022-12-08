
import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 150px;
    background-color: aliceblue;

    box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2);
`;

export const Form = styled.form`
  
`;

export const Input = styled.input`
    width: 200px;
    height: 30px;

    border: none;
    border-radius:5px;
`;

export const SearchBtn = styled.button`
   
   background-color: rgb(4, 120, 128);
   color: white;
   
   border: none;
   margin-left: 10px ;

    width: 80px;
    height: 30px;

    border-radius: 5px;

    cursor: pointer;

    :hover{
        transform: scale(1.1)
    }
`;
export const NameBtn = styled.span`
    
   
  
`;