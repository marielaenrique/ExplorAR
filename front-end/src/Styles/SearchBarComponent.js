import styled from "styled-components";
import searchBackground from "../imgs/SearchBarBackground.png"
import Calendar from "react-calendar";


export const DivSearch = styled.div`
    font-size:20px;
    text-align:center;
    margin-top:80px;
    background-color: #f1f1f1;
    background: url("${searchBackground}");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 10px;

    h1{
        color: white;
        text-shadow: 2px 2px 2pt rgba(0, 0, 0, 0.6);
        padding: 34px 0px;
    }
`;

export const Form = styled.form`
    display:flex;
    justify-content:center;
    padding: 10px;
    input{
        width:300px;
    }
`;


export const InputSelect = styled.select`
    //padding:10px;
    width:400px;
    border-radius: 25px 0px 0px 25px;
    //border: 1px solid #80B918;
    //font-weight:bold;
`;
export const InputSearch = styled.input`
    background-color:white;
    width:100%;
    padding:10px;
`
export const DivCalendar = styled.div`
    width:290px;
    //position:relative;
`
export const StyledCalendar = styled(Calendar)`
    position: absolute;
    z-index: 1;
    top:40px;
    background-color:#DCE4BC;
    .react-calendar__tile--active {
        background-color:green !important;
    }
    .react-calendar__tile--disabled{
        background-color: red;
        color: white;
        cursor: not-allowed;
    }
`;
export const ButtonSearch = styled.button`
    padding:10px;
    background-color: #0f9ea8;
    border-radius: 0px 25px 25px 0px ;
    width:200px;
    color:white;
    border: none;
    background-color:#80B918;
`;