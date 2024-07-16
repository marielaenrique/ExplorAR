import React, { useContext } from "react";
import DashDelete from "./DashOptions/DashDelete";
import DashAdd from "./DashOptions/DashAdd";
import DashCategories from "./DashOptions/DashCategories";
import { DasboardContext } from "../Context/DasboardContext";

const componentMap = {
  addExperience: DashAdd,
  deleteExperience: DashDelete,
  editCategories: DashCategories,
};

const DefaultComponent = () => <DashAdd/>; 

const DashContent = () => {

  const { state } = useContext(DasboardContext);
  
  const ComponentToRender = componentMap[state?.content] || DefaultComponent;

  return <ComponentToRender />;
};

export default DashContent;