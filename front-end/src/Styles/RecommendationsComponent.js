import styled from "styled-components";

export const BackgroundDiv = styled.div`
  background-color: rgba(52, 58, 54, 0.1);
  margin-top:30px;
`;

export const CardImgBackground = styled.div`
  height: 260px;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("${(props) => props.image}");
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const DivContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0rem 2rem 2rem 0rem;

  @media (max-width: 912px) {
    width: 100%;
  }
`;

export const ExperienceCardContainer = styled.div`
  margin: 2rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1em;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
`;

export const DivRating = styled.div`
  p {
    font-size: 25px;
  }
  color: #f9c53b;
  font-weight: 800;
`;

export const ImgRecommendation = styled.img`
  width: 400px;
  height: 300px;
`;

export const DivInformation = styled.div`
  padding: 15px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 22px;
  }
  h3 {
    margin: 2% 0;
  }
  p {
    font-size: 14px;
    margin: 3% 0;
  }
`;
export const H2Title = styled.h2`
  color: rgb(57, 57, 83);
  padding-left: 2rem;
  padding-top: 1rem;
  text-shadow: 2px 2px 2pt rgba(0, 0, 0, 0.2);
  @media (max-width: 912px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ButtonViewMore = styled.button`
  display: flex;
  justify-content: center;
  width: 190px;
  height: 60px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
  border: none;
  font-size: 16px;
  background-color: rgb(77, 150, 43);
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    transition: background-color 0.3s ease;
    background-color: rgba(77, 150, 43, 0.8);
  }
`;

export const PaginationDiv = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  padding-bottom: 3rem;
`;

export const ButtonPagination = styled.button`
  padding: 8px;
  border-radius: 5%;
  margin-right: 4px;
  margin-bottom: 1rem;
  border: none;
  background-color: #f1f2f6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  color: #2c2c2c;
  cursor: pointer;

  &:hover {
    transition: background-color 0.3s ease;
    background-color: rgb(77, 150, 43);
    color: white;
  }

  &.active {
    background-color: rgb(77, 150, 43);
    color: white;
  }
`;
