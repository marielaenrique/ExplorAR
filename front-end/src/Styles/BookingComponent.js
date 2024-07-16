import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    background-color:#ECECEC;
    padding:20px;
    @media (max-width:920px){
        display:block;
    }
`

export const DivForm = styled.div`
    margin-top:80px;
    width:35%;
    height:100vh;
    h2{
        text-align:center;
    }
    @media (max-width:920px){
        margin-top:120px;
        width:100%;
        height:auto;
        text-align:center;
    }
    @media (max-width:600px){
        height:auto;
    }
`
export const Form = styled.form`
    width:500px;
    input{
        width:100%;
        padding:6px;
    }
    @media (max-width:1300px){
        width:80%;
    }
    @media (max-width:920px){
        text-align:center;
        width:100%;
        padding-bottom: 20px;
        input{
            width:60%;
        }
    }
`
export const DivDetail = styled.form`
    margin-top:50px;
    display: flex;
    flex-direction: column;
    width:35%;
    padding:30px;
    h3{
        padding-left:10px;
    }
    p{
        padding:0px 70px 10px 10px;
    }
    img{
        width:550px;
        @media (max-width:1300px){
            width:300px;
        }

    }
    @media (max-width:920px){
        width:100%;
        padding:0px;
        img{
            width:500px;
            margin-left:120px;
        }
        p{
            padding:10px;
        }
    }
    @media (max-width:600px){
        text-align:center;
        img{
            width:90%;
            margin-left:20px;
        }
        p{
            padding:10px;
        }
    }
`

export const DivReservation = styled.div`
    margin-top:80px; 
    margin-bottom:40px; 
    @media (max-width:920px){
        text-align:center; 
    }
    @media (max-width:600px){
        text-align:center; 
        p{
            margin-bottom:30px;
        }
    }

`
export const ButtonReservation = styled.button`
    background-color: ${props => props.disabled ? 'gray' : '#FF6600'};
    color:white;
    padding:7px;
    width:200px;
    border-radius:10px;
    text-align:center;
    margin-top:20px;
    display:block;
    cursor: pointer;
    @media (max-width:920px){
        display: unset;
    }
`
export const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const DivReservationDone = styled.div`
    width:30%;
    padding:15px;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    p{
        font-size:24px;
        text-align:center;
    }
    @media (max-width:920px){
        width:70%;
        p{
            font-size:26px;
        }
    }
    @media (max-width:600px){
        width:60%;
        p{
            font-size:22px;
        }
    }
`
export const DivReservationError = styled.div`
    width:30%;
    padding:15px;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    p{
        font-size:24px;
        text-align:center;
    }
    @media (max-width:920px){
        width:70%;
        p{
            font-size:26px;
        }
    }
    @media (max-width:600px){
        width:60%;
        p{
            font-size:22px;
        }
}
`
export const Emoji = styled.span`
    font-size: 60px;
    color:green;
    @media (max-width:920px){
        font-size: 50px;
    }
    @media (max-width:600px){
        font-size: 40px;
    }
`
export const EmojiError = styled.span`
    font-size: 60px;
    color:red;
    @media (max-width:920px){
        font-size: 50px;
    }
    @media (max-width:600px){
        font-size: 40px;
    }
`