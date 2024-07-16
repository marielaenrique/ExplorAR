import styled from "styled-components";

export const DashContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0px 0px 0px;
  background-color: #eaeaea;
  height: 100vh;
  width: 100%;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    //height:auto;
  }
  @media (max-width: 920px) {
    flex-direction: column;
    height: 100vh;
  }
  @media (max-width: 600px) {
    height:auto;
  }
`;
