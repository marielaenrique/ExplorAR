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
    font-size:20px;
    margin-top: 20px;
    margin-left: 20vw;
    background: #007F5F;
    width: 450px;
    height: 65vh;
    padding: 3px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    color: white;
    @media (max-width:912px){
        width: 43vw;
        margin-left: 15vw;
        padding-bottom:4px;

    }
    @media (max-width:600px){
        font-size: 1.2em;
        width: 80vw;
        height: 70vh;
        display:flex;
        margin-left: 10%;
        align-items:center;
        
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
    @media (max-width:1025px){
        font-size: 15px;
        margin-top:20px;
    }
    @media (max-width:600px){
        width: 85px;
        font-size: 15px;
    }
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #4E6E81;
  @media (max-width:1025px){
    padding:2px;
  }
  @media (max-width:920px){
    padding:5px;
  }
  @media (max-width:320px){
    padding:0px;
  }

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
    margin-top: 12px;
    font-size:18px;
    @media (max-width:1030px){
        font-size:13px;
        margin-top: 0px;
        label{
            padding-bottom:0px;
        }
    }
    @media (max-width:920px){
        font-size:21px;
        line-height: 30px;
        padding:10px;
    }
    @media (max-width:600px){
        font-size:15px;
        line-height: 20px;
        padding:10px;
    }
    @media (max-width:300px){
        font-size:10px;
        width: 150px;
        padding:10px;
    }
`;

export const Error = styled.p`
    z-index: 100;
    position: relative;
    font-size: 10px;
    padding: 0;
    margin: 0;
    color: #FCDCBC
`;