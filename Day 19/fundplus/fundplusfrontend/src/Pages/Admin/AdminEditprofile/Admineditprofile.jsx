import React from "react";
import Usersidebar from "../../../Components/Usercomponents/Userprofilesidebar/Usersidebar";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Usereditprofilesection } from "../../../Components/Usercomponents/Userprofilesidebar/Usereditprofilesection";
import Footer from "../../../Components/Footercomponents/Footer/Footer";
import { Usersidebardescription } from "../../../Components/Usercomponents/Userprofilesidebar/Usersidebardescription";
import { Adminsidebardescription } from "../../../Components/Admincomponents/Adminprofilesidebar/Adminsidebardescription";
import Adminsidebar from "../../../Components/Admincomponents/Adminprofilesidebar/Adminsidebar";
import { Admineditprofilesection } from "../../../Components/Admincomponents/Adminprofilesidebar/Admineditprofilesection";

export const Admineditprofile = () => {
  return (
    <>
      <div className=" ">
        <Navbar />
        <Adminsidebardescription name="Admin profile settings"/>
        <div className="xl:flex lg:flex lg:flex-col  gap-2  ">
          <Adminsidebar />
          <Admineditprofilesection />
        </div>
        <Footer />
      </div>
    </>
  );
};
