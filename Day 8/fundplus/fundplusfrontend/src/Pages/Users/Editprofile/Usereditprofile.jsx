import React from "react";
import Usersidebar from "../../../Components/Usercomponents/Userprofilesidebar/Usersidebar";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Usereditprofilesection } from "../../../Components/Usercomponents/Userprofilesidebar/Usereditprofilesection";
import Footer from "../../../Components/Footer/Footer";
import { Usersidebardescription } from "../../../Components/Usercomponents/Userprofilesidebar/Usersidebardescription";

export const Usereditprofile = () => {
  return (
    <>
      <div className=" ">
        <Navbar />
        <Usersidebardescription name="Profile settings"/>
        <div className="xl:flex lg:flex lg:flex-col  gap-2  ">
          <Usersidebar />
          <Usereditprofilesection />
        </div>
        <Footer />
      </div>
    </>
  );
};
