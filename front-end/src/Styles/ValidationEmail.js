import styled from "styled-components";

export const DivEmail = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const DivContainer = styled.div`
    margin-top:100px;
    margin-left:400px;
    border:3px #2B9348 solid;
    background-color: #EAF0EE;
    width:900px;
    height:500px;
    color:#3C4444;
    display:flex;
    flex-direction:column;
    padding:20px;
    justify-content:space-evenly;
    text-align:center;
    margin-bottom:120px;
    h1{
        padding:10px;
    }
    @media (max-width:1000px){
        width:80%;
        height:500px;
        margin:0px;
        margin-left:4rem;
    
}
    @media (max-width:600px){
        width:80%;
        height:390px;
        margin:0px;
        font-size:10px;
        margin-left:1rem;
        a{
            font-size:12px;
        }
}

`

export const DivText = styled.div`
    border: 2px black solid;
    padding:20px;
    height:150px;
    padding-bottom:30px;
    @media (max-width:900px){
        padding-bottom:20px;
        height:220px;
    }
    @media (max-width:600px){
        width:70%;
        height:190px;
        margin:0px;
        font-size:12px;
        padding-bottom:20px;
        margin-left:20px;
        h2{
            font-size:14px;
        }
}

`
export const EmojiText = styled.span`
    font-size:40px;
    @media (max-width:600px){
        font-size:30px;
}
`