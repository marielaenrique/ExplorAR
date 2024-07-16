import styled from "styled-components";

export const Nav = styled.nav`
z-index: 9999;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #FFFFFF;
position:fixed;
top:0;
width: 100%;
height:85px;
box-shadow: 0px 7px 5px -3px rgba(0,0,0,0.51);
z-index: 10000;
a{
    text-decoration: none;
    color:black;

}
li{
    display: flex;
    justify-content: space-evenly;
    margin-right: 15px;
}
`;

export const Ul = styled.ul`
    display: flex;
    list-style: none;
    @media (max-width:600px){
        width:40%;
        height:100vh;
        position:absolute;
        top:65px;
        padding-top:10px;
        border-radius:20px 0 0 20px;
        right:${({click}) => click ? 0 : "-100%"};
        flex-direction:column;
        align-items:end;
        transition: 0.5s all ease-in;
        background-color: rgba(50, 168, 130, 1);
}
`

export const SectionLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SectionRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
padding:20px;
img{
    width: 85px;
}

@media (max-width:912px){
    img{
        width: 70px;
    }
}
@media (max-width:600px){
    img{
        width: 60px;
    }
}
`;

export const ButtonHamburger = styled.div`
    display:none;
    cursor: pointer;
    margin-right:20px;
    @media (max-width:600px){
        display:flex;
        justify-content: end;
        align-items: center;
        margin-left:220px;
        margin-right:40px;
        
    }
`;

export const ButtonNav = styled.button`
padding: 15px; 
margin-right: 20px;
width: 140px;
border-radius: 4px;
background-color: #2B9348;
color: white;
font-weight:bold;

box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
border: none;


@media (max-width:912px){
    font-size: 12px;
    height: 30px;
    height: 40px;
    border-radius: 4px;
    
}
@media (max-width:600px){
    margin-bottom:20px;
    cursor: pointer;
    margin-top:10px;
}
`;

export const Slogan =  styled.span`
    color:#2B9348;
    @media (max-width:912px){
        display: none;
    }

    @media (max-width:600px){
        display: none;
    }
`;

export const Perfil = styled.div`
    border-radius:20px;
    margin-right:30px;
    cursor: pointer;
    h3{
        background-color: #2B9348;
        padding: 10px;
        color:white;
        border-radius: 40px;
    }
    
`;

export const DropdownMenu = styled.div`
    position:absolute;
    top:82px;
    right:20px;
    border-radius:10px;
    padding: 10px 20px;
    width:200px;
    background-color:#2B9348;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const UlDropDown = styled.ul`
    display:flex;
    flex-direction:column;
`;

export const LidropDown = styled.li`
    color:white;
    background-color: #2B9348;
    padding:10px 0;
    border-top: 1px solid;
    cursor: pointer;
    &:hover {
        background-color: #80B918;
      }
`;