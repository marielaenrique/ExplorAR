import React from "react";
import DashContent from "./DashContent";
import DashNavbar from "./DashNavbar";
import { DashContainer } from "../../Styles/Dashboard";
import DasboardContextProvider from "../Context/DasboardContext"

const Dashboard = () => {
  return (
    <DasboardContextProvider>
      <DashContainer>
        <DashNavbar />
        <DashContent />
      </DashContainer>
    </DasboardContextProvider>
  );
};

export default Dashboard;
