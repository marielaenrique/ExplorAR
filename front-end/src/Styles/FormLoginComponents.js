import styled from "styled-components"
import background from "../imgs/registerBG.png"

export const FormManager = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: start;
    align-items: center;
    background: url("${background}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

`;

export const FormContainer = styled.div`
    
    margin-top: 20px;
    margin-left: 20vw;
    background: #007F5F;
    width: 430px;
    height: 58vh;
    padding: 3px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    color: white;
    @media (max-width:1100px){
        width: 43vw;
        margin-left: 15vw;
        font-size:16px;
    }
    @media (max-width:912px){
        width: 43vw;
        margin-left: 15vw;
        height: 54vh

    }
    @media (max-width:600px){
        width: 80vw;
        display:flex;
        margin-left: 10%;
        align-items:center;
        height: 63vh;
        h2{
            font-size:26px;
        }
        
    }
`;

export const Button = styled.button`
    margin-top: 30px;
    background: #FF6600;
    color: #FFFFFF;
    width: 100px;
    height: 30px;
    border: 0;
    font-size: 18px;
    border-radius: 4px;
    font-family: 'Raleway', sans-serif;
    transition: .8s;
    overflow: hidden;
    margin-bottom:5px;
    &:focus{
        outline: 0;
    }
    &:hover{
        background: #FE8332;
        cursor: pointer;
        &:before{
        transform: translateX(300px)  skewX(-15deg);  
        opacity: 0.6;
        transition: .7s;
        }
        &:after{
        transform: translateX(300px) skewX(-15deg);  
        opacity: 1;
        transition: .7s;
        }
    }
    @media (max-width:600px){
        width: 65px;
        font-size: 15px;
        margin-bottom:30px;
    }
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #4E6E81;
`;

export const ContainerDatos = styled.div`
width: 450px;
display: flex;
flex-direction: column;
margin: 5px 30px;
`;

export const Container = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

export const Error = styled.p`
    z-index: 100;
    position: relative;
    font-size: 10px;
    padding: 0;
    margin: 0;
    color: #419fbd;
`;
export const WrongValuesText = styled.p`
    text-align:center;
    @media (max-width:920px){
        font-size:17px;
    }
    @media (max-width:600px){
        font-size:15px;
}

`