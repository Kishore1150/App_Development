import React from 'react'
import { Usereditpasswordsection } from '../../../Components/Usercomponents/Userprofilesidebar/Usereditpasswordsection';
import { Usersidebardescription } from '../../../Components/Usercomponents/Userprofilesidebar/Usersidebardescription';
import { Navbar } from '../../../Components/Navbar/Navbar';
import Usersidebar from '../../../Components/Usercomponents/Userprofilesidebar/Usersidebar';
import Footer from "../../../Components/Footercomponents/Footer/Footer";

export const Usereditpassword = () => {
  return (
    <>
      <Navbar />
      <Usersidebardescription name="Profile settings" />
      <div className="flex lg:flex-col gap-2  ">
        <Usersidebar />
        <Usereditpasswordsection />
      </div>
      <Footer />
    </>
  );
}
