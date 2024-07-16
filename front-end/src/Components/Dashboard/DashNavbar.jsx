import React, { useContext, useState } from "react";
import { DashNav, DashOption, TitlteDashNav } from "../../Styles/DashNavbar";
import { DasboardContext } from "../Context/DasboardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const DashNavbar = () => {
  const [currentOption, setCurrentOption] = useState(1);
  const { dispatch } = useContext(DasboardContext);

  const handleAddExperience = () => {
    dispatch({ type: "add_experience" });
    setCurrentOption(1);
  };

  const handleDeleteExperience = () => {
    dispatch({ type: "delete_experience" });
    setCurrentOption(2);
  };

  const handleEditCategories = () => {
    dispatch({ type: "edit_categories" });
    setCurrentOption(3);
  };


  return (
    <DashNav>
      <TitlteDashNav>Panel de Control</TitlteDashNav>
      <DashOption
        onClick={handleAddExperience}
        className={currentOption === 1 ? "active" : ""}
      >
        <FontAwesomeIcon icon={faCirclePlus} style={{ paddingLeft: "15px" }} />
        <p>Agregar Experiencia</p>
      </DashOption>
      <DashOption
        onClick={handleDeleteExperience}
        className={currentOption === 2 ? "active" : ""}
      >
        <FontAwesomeIcon icon={faTrashCan} style={{ paddingLeft: "15px" }} />{" "}
        <p>Eliminar Experiencia</p>
      </DashOption>
      <DashOption
        onClick={handleEditCategories}
        className={currentOption === 3 ? "active" : ""}
      >
        <FontAwesomeIcon icon={faPenToSquare} style={{ paddingLeft: "15px" }} />{" "}
        <p>Editar Categorias</p>
      </DashOption>
    </DashNav>
  );
};

export default DashNavbar;
