import styled from "styled-components";

export const DivContainer = styled.div`
  margin-top:30px;
  @media (max-width: 920px){
    margin-top:200px;
  }
`
export const TableContainer = styled.table`
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;
  margin-top: 3rem;
  background-color: #eaeaea;
  font-size: 14px;
  height: 100%;
  @media (max-width: 1200px) {
    background-color: #eaeaea;
    height: auto;
  }
  @media (max-width: 920px) {
    width: 100%;
    margin-top: 1.5rem;
    height: 100%;
  }
`;

export const TableComponent = styled.table`
  width: 70vw;
  border-collapse: collapse;
  border-radius: 1%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background-color: white;
  th,
  td {
    padding: 0.7rem;
    text-align: left;
  }
  
  th {
    border-bottom: 2px solid #8b909a;
  }

  tr:nth-child(even) {
    background-color: white;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  @media (max-width: 600px) {
    th,
    td {
      font-size: 12px;
    }
  }
`;

export const ButtonPagination = styled.button`
  padding: 8px;
  border-radius: 5%;
  margin-right: 4px;
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
  @media (max-width: 1200px){
    margin-bottom:100px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const PaginationDiv = styled.div`
  margin-top: 2rem;
  text-align: center;
  @media (max-width: 920px) {
    margin-top: 0.8rem;
    margin-bottom: 4rem;
  }
`;

export const ButtonDelete = styled.div`
  text-align: center;
  color: rgb(72, 140, 40);
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  padding: 2% 0;
  width: 110px;
  border: none;
  border-radius: 5px;

  &:hover {
    transition: background-color 0.3s ease;
    background-color: rgba(77, 150, 43, 0.8);
    color: white;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const MsjError = styled.span`
  background-color:#2B9348;
  padding:7px;
  margin-top:70px;
  border-radius:10px;
  margin-left:40px;
  text-align:center;
  color:white;
  @media (max-width: 920px) {
    margin-top: 80px;
  }
  @media (max-width: 600px) {
    font-size:13px;
  }
`
