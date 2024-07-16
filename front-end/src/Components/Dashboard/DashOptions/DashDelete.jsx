import React, { useState, useEffect, useContext } from "react";
import {
  TableContainer,
  TableComponent,
  PaginationDiv,
  ButtonPagination,
  ButtonDelete,
  MsjError,
  DivContainer
} from "../../../Styles/DashDelete";
import ExperiencesService from "../../../Services/Experiences.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { GlobalStateContext } from "../../Context/GlobalStateContext";

const DashDelete = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [deletedExperienceId, setDeletedExperienceId] = useState(null);
  const [totalElements, setTotalElements] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const { state } = useContext(GlobalStateContext);

  const fetchData = async (pageNumber) => {
    try {
      const response = await ExperiencesService.list(pageNumber);
      setData(response.content);
      setTotalElements(response.totalElements);
      setTotalPages(response.totalPages);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleDelete = async (id) => {
    const values = {
      token: `${state.token}`,
      expId: id,
    };

    try {
      await ExperiencesService.deleteExp(values);
      setDeletedExperienceId(id);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, refresh]);

  return (
    <DivContainer>
    {deletedExperienceId && (
      <MsjError>SE HA BORRADO LA EXPERIENCIA CON ID: {deletedExperienceId}</MsjError>
    )}
    <TableContainer>
      <TableComponent>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {totalElements === 0 ? (
            <p>No hay experiencias disponibles.</p>
          ) : (
            data.map((experience) => (
              <tr key={experience.id}>
                <td>{experience.id}</td>
                <td>{experience.title}</td>
                <td>${experience.pricePerDay}</td>
                <td>
                  <ButtonDelete onClick={() => handleDelete(experience.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Eliminar
                  </ButtonDelete>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </TableComponent>
      <PaginationDiv>
        <ButtonPagination onClick={() => handlePageChange(0)}>
          Primera
        </ButtonPagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <ButtonPagination
            key={index}
            onClick={() => handlePageChange(index)}
            className={currentPage === index ? "active" : ""}
          >
            {index + 1}
          </ButtonPagination>
        ))}
        <ButtonPagination
          onClick={() =>
            handlePageChange(totalPages > 0 ? totalPages - 1 : totalPages)
          }
        >
          Última
        </ButtonPagination>
      </PaginationDiv>
    </TableContainer>
    </DivContainer>
  );
};

export default DashDelete;
