import React from "react";
import Usersidebar from "../../../Components/Usercomponents/Userprofilesidebar/Usersidebar";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Usereditprofilesection } from "../../../Components/Usercomponents/Userprofilesidebar/Usereditprofilesection";

export const Usereditprofile = () => {
  return (
    <>
      <div className="">
        <Navbar  />
        <Usersidebar />
        <Usereditprofilesection/>
      </div>
    </>
  );
};
