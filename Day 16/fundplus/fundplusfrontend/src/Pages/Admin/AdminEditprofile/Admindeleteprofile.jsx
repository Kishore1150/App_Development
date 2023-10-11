import React from 'react'
import { Navbar } from '../../../Components/Navbar/Navbar'

import Footer from "../../../Components/Footercomponents/Footer/Footer";
import { Adminsidebardescription } from '../../../Components/Admincomponents/Adminprofilesidebar/Adminsidebardescription';
import { Admindeleteprofilesection } from '../../../Components/Admincomponents/Adminprofilesidebar/Admindeleteprofilesection';
import Adminsidebar from '../../../Components/Admincomponents/Adminprofilesidebar/Adminsidebar';

export const Admindeleteprofile = () => {
  return (
    <div>
      <Navbar />
      <Adminsidebardescription name={"Admin profile settings"} />
      <div className="flex lg:flex-col  gap-12  ">
        <Adminsidebar />
        <Admindeleteprofilesection />
      </div>
      <Footer />
    </div>
  );
}
