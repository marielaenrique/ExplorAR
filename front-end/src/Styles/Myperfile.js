import styled from "styled-components";

export const DivContainer = styled.div`
    text-align:center;
    font-size: 18px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DivInformation = styled.div`
    margin-top: 150px;
    background-color: #F5F5F5;
    border-radius:30px;
    padding:20px;
    padding-bottom:70px;
    width: 500px;
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
    span {
        border: solid 2px #2B9348;
        border-radius:5px;
        padding: 10px;
    }
    @media (max-width:600px){
        padding-bottom:30px;
        width:280px;
        font-size:14px;
    }
`
