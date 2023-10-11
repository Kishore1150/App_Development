import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import Dashboardsection from "../../Components/Dashboardsection/Dashboardsection";
import { Campaignsection } from "../../Components/Campaign/Campaignsection";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Dashboardsection/>
      <Campaignsection/>
    </div>
  );
};

export default Dashboard;
