import styled from "styled-components";

export const DivContainer = styled.div`
  margin-top:100px;
  margin-left:460px;
  width: 100%;
  max-width: 900px;
  height: 500px;
  background-color: #EAF0EE;
  color: #3C4444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p{
    font-size:18px;
  }
  button {
    width: 150px;
    height: 40px;
    margin-top: 20px;
    background-color: #FFA200;
    color: #FFF;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #E67F00;
    }
  }
  @media (max-width:1000px){
    width:90%;
    height:70%;
    margin:0px;
    margin-left:3rem;
    margin-top:100px;
    button{
      margin-bottom:20px;
    }
  }
  @media (max-width:600px){
    width:90%;
    height:70%;
    margin-top:100px;
    margin-left:1rem;
    h1 {
      font-size: 20px;
      margin-bottom: 10px;
      padding:5px;
    }
    h2{
      font-size:18px;
    }
    p{
      font-size:15px;
    }
    button{
      width: 110px;
      height: 35px;
      margin-bottom:30px;
    }
  }
`;

export const DivText = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

export const DivMsjError = styled.div`
  display:flex;
  justify-content:center;

`;
export const MsjError = styled.h2`
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
  margin-top: 120px;
  margin-left: 30px;
  width:500px;
  padding-left:30px;
  border: 1px solid #ff0000;

`
export const EmojiTextError = styled.span`
  color:red;
  font-size: 30px;
`;

export const EmojiText = styled.span`
  font-size: 40px;
  color: #4CAF50;
  margin-right: 10px;
  @media (max-width:600px){
    font-size:30px;
}
`;

