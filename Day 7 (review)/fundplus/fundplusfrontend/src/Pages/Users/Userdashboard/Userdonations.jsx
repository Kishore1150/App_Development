import React from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Userdonationsection } from "../../../Components/Campaign/Userdonationsection";
import Dashboardsection from "../../../Components/Dashboardsection/Dashboardsection";

export const Userdonations = () => {
  return (
    <div>
      <Navbar />
      <Dashboardsection />
      <Userdonationsection/>
    </div>
  );
};
