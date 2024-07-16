import styled from "styled-components";

export const DashNav = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  //position:fixed;
  @media (max-width: 920px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    position:absolute;
  }
`;

export const TitlteDashNav = styled.p`
background-color: white;
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 15px;
  font-weight: 700;
  @media (max-width: 900px) {
  }
  @media (max-width: 600px) {
  }
`;

export const DashOption = styled.div`
  background-color: white;
  width: 15vw;
  height: 40px;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  FontAwesomeIcon {
    padding-left: 150px;
  }

  p {
    padding-left: 5px;
  }

  &:hover {
    background-color: #c4e092;
  }

  &.active {
    background-color: #c4e092;
  }

  @media (max-width: 920px) {
    height: 40px;
    width: 100%;
  }
`;
