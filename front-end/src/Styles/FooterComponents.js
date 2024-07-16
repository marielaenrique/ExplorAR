
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #2B9348;
    position:fixed;
    bottom:0;
    width:100%;
    
`

export const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    
`
export const Copyright = styled.p`
    color: white;
    margin-left:10px;
`

export const IconsDiv = styled.div`
    padding:2px;
    margin-right:20px;
    color:white;
    width: 10%;
    display:flex;
    justify-content: space-around;
    align-items:center;
    

    @media (max-width:912px){
        width: 30%;
        
    }


    @media (max-width:600px){
        display:none;
    }
    `