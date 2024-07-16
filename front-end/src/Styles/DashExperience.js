import styled from "styled-components";

export const DashExperienceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  width: 70%;
  height: 50px;
  margin: 10px;
  padding: 5px 25px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 15px;
  @media (max-width:600px){
    font-size:15px;
  }
`;

export const Title = styled.p`
 width: 40%;
` 

export const Price = styled.p`
`

export const ButtonExperience = styled.button`
  background-color: #BD9576;
  border: 2px solid #BD9576;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  height: 35px;
`
