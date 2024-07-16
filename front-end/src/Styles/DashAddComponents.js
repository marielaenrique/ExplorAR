import styled from "styled-components";

export const DashAddContainer = styled.div`
    width: 85vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EAEAEA;
    padding:20px;
    @media (max-width:920px){
        width:100%;
        margin-top:200px;
        margin-left:0px;
        padding:0px;
    }
`;

export const Content = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items:center;
    height: 81vh;
    margin-top: 70px;
    input{
        margin-bottom:10px;
        padding:6px;
        width: 90%;
    }
    textarea{
        margin-bottom:10px;
        height:60px;
        width: 91%;
    }
    select{
        margin-bottom:10px;
        padding:6px;
        width: 91%;
    }
    button{
        width:280px;
        padding:7px;
        border-radius:10px;
        color:white;
        background-color:#FF6600;
        cursor: pointer;
        border:white;
    }
    @media (max-width:900px){
        width:100%;
    }
    @media (max-width:600px){
        //margin-bottom:50px;
        button{
            width:200px;
        }

    }

`;


export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;

export const DDSection = styled.div`
    background-color: #c5c5c554;
    color: #9e9e9ebd;
    height: 100px;
    border: 1px dashed #000;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; // Para asegurarnos de que la imagen no exceda el contenedor

`;

export const ImageSelected = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain; // Ajusta la imagen al contenedor manteniendo las proporciones
`;

export const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`;

export const RightSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ErrorMsj = styled.span`
    color:red;
    padding-bottom:15px;
`