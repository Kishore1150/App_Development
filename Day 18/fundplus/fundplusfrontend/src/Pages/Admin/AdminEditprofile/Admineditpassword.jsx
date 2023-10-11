import React from 'react'
import { Usereditpasswordsection } from '../../../Components/Usercomponents/Userprofilesidebar/Usereditpasswordsection';
import { Usersidebardescription } from '../../../Components/Usercomponents/Userprofilesidebar/Usersidebardescription';
import { Navbar } from '../../../Components/Navbar/Navbar';
import Usersidebar from '../../../Components/Usercomponents/Userprofilesidebar/Usersidebar';
import Footer from "../../../Components/Footercomponents/Footer/Footer";
import { Adminsidebardescription } from '../../../Components/Admincomponents/Adminprofilesidebar/Adminsidebardescription';
import Adminsidebar from '../../../Components/Admincomponents/Adminprofilesidebar/Adminsidebar';
import { Admineditpasswordsection } from '../../../Components/Admincomponents/Adminprofilesidebar/Admineditpasswordsection';

export const Admineditpassword = () => {
  return (
    <>
      <Navbar />
      <Adminsidebardescription name="Admin profile settings" />
      <div className="flex lg:flex-col gap-2  ">
        <Adminsidebar />
        <Admineditpasswordsection />
      </div>
      <Footer />
    </>
  );
}
