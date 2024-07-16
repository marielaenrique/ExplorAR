import styled from 'styled-components';
import Calendar from "react-calendar";

export const Arrow = styled.button`
  display: flex;
  position: absolute;
  right: 150px;
  bottom: 100px;
  scale: 1.65;
    @media (max-width:912px){
        display: flex;
        position: absolute;
        right: 50px;
        bottom: 86%;
        scale: 1.65;
    }
    @media (max-width:600px){
        position: static;
        margin-top: 100px;
        margin-left: 260px;
        font-size:12px;
    }
    @media (max-width:350px){
      position: static;
        margin-top: 100px;
        margin-left: 160px;
        font-size:10px;

    }
`;

export const Container = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 90vh;
  @media (max-width: 912px) {
    display: block;
    padding: 0;
  }
  @media (max-width: 600px) {
    display: block;
    padding: 0;
  }
`;

export const Content = styled.div`
  width: 45%;
  padding: 40px;
  @media (max-width:1300px){
    padding: 20px;
  }
  @media (max-width: 912px) {
    padding: 5px;
    width: 100%;
  }
  @media (max-width: 600px) {
    padding: 0;
    width: 100%;
  }
`;

export const DivCalendar = styled.div`
    display:flex;
    padding:10px;
    @media (max-width:1100px){
      padding:0px;
  }
    @media (max-width:920px){
        margin-left:30px;
    }
    @media (max-width:600px){
        display:block;
        width:80%;
    }
`
export const ButtonReservation = styled.button`
    background-color: ${props => props.disabled ? 'gray' : 'green'};
    color:white;
    width:500px;
    margin-top:20px;
    border-radius:15px;
    padding:10px;
    margin-left: 90px;
    margin-bottom:60px;
    @media (max-width:1300px){
      margin-left:40px;
    }
    @media (max-width:920px){
        margin-left:130px;
    }
    @media (max-width:600px){
        width:250px;
        margin-left:70px;
    }
`
export const StyledCalendar = styled(Calendar)`
  .react-calendar__tile--active {
    background-color:green !important;
  }
  .react-calendar__tile--disabled {
    background-color: #ccc !important;
    opacity: 0.6;
  }
  @media (max-width:1025px){
      width:230px;
  }
  @media (max-width:920px){
    width:350px;
`;


export const TextContent = styled.div`
    padding-top:1rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    @media (max-width:600px){
        display:block;
        padding-top:10px;
        padding:10px;
    }
`;

export const Carousel = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: linear-gradient(
      87deg,
      rgba(255, 255, 255, 1) 12%,
      rgba(255, 255, 255, 0.7868524118631828) 19%,
      rgba(255, 255, 255, 0) 48%
    ),
    url("${(props) => props.value}");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 769px) {
    justify-content: start;
    width: 100%;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 12%,
        rgba(255, 255, 255, 0.7868524118631828) 19%,
        rgba(255, 255, 255, 0) 48%
      ),
      url("${(props) => props.value}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;

export const SilderContainer = styled.div`
  width: 28%;
  @media (max-width: 769px) {
    width: 98%;
  }
`;

export const Image = styled.img`
  max-width: 200px;
  height: 150px;
  margin-bottom: 15px;
  border-radius: 15px;
  box-shadow: 10px 10px 11px -6px rgba(0, 0, 0, 0.49);

  @media (max-width: 769px) {
    width: 170px !important;
  }
`;


export const VerMasStyle = styled.div`
  &::before {
    color: black;
  }
  rotate: 90deg;
  scale: 2;
  position: relative;
  left: 23%;
  @media (max-width: 769px) {
    display: none;
  }
`;

export const Name = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 0;
`;

export const Price = styled.p`
  margin-right: 1rem;
`;

export const Description = styled.p`
  @media (max-width: 600px) {
    display: block;
    font-size: 16px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  p {
    margin: 1%;
    font-size: 14px;
  }
  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Rating = styled.p`
  margin-left: 1rem;
`;

export const Location = styled.p`
  margin-top: 0;
`;
