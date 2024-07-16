import styled from "styled-components"

export const DashCategoryContainer = styled.div`
width: 85vw;
height: 80vh;
display: flex;
align-items: flex-start;
margin-top: 1.5rem;
background-color: #eaeaea;
font-size: 14px;
height: 100%;
    @media (max-width: 920px) {
        width: 100%;
        height: 100%;
        margin-top: 200px;
    }
    @media (max-width:600px){
        display:block;
        height: 100%;
        margin-top: 200px;
    }
`;

export const ListCategories = styled.div`
    width: 50%;
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:40px;
    @media (max-width:600px){
        width:80%;

    }
`;

export const AddCategories = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    button {
        padding: 7px;
        color:white;
        width:150px;
        background-color:#FF6600;
        border-radius:10px;
        cursor: pointer;
        border:white;
    }

    form {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        input{
            width: 95%;
            padding: 10px;
            margin-bottom: 30px;
        }
        textarea{
            //border-radius:10px;
            width: 95%;
            height:70px;
            padding: 10px;
            margin-bottom: 30px;
        }
    }
    @media (max-width:600px){
        width:100%;
        text-align:center;
        button{
            margin-bottom:120px;
        }
    }
`;

export const CategoryOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:10px;
    margin: 10px;
    width:100%;
    padding: 5px 25px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 15px;
    background-color: white;
    p{
        margin-right: 10px;
    }
`;