import React, { useContext } from "react";
import ExperiencesService from "../../../Services/Experiences.js";
import { GlobalStateContext } from "../../Context/GlobalStateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  ButtonDelete
} from "../../../Styles/DashDelete";


const DashExperience = ({ id, title, pricePerDay }) => {
  const { state } = useContext(GlobalStateContext);

  const values = {
    token: `${state.token}`,
    expId: id,
  };

  const handleDelete = async () => {
    try {
      ExperiencesService.deleteExp(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>${pricePerDay}</td>
      <td>
        <ButtonDelete onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash}/> Eliminar
        </ButtonDelete>
      </td>
    </tr>
  );
};

export default DashExperience;
