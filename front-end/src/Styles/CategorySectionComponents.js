import styled from "styled-components";

export const BackgroundDiv = styled.div`
  background-color: rgba(52, 58, 54, 0.1);
  width: 100%;
  margin-top: 80px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 40px;
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

export const PaginationDiv = styled.div`
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

export const H2Title = styled.h2`
  color: rgb(57, 57, 83);
  padding-left: 3%;
  padding-top: 1.5rem;
  margin: 0;
  text-shadow: 2px 2px 2pt rgba(0, 0, 0, 0.2);
  @media (max-width: 912px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
