import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Userroutes = () => {
  const admintoken = localStorage.getItem("token") !== null;
  const role = localStorage.getItem("role") === "USER";

  return admintoken && role ? <Outlet /> : <Navigate to="/signin" />;
};
