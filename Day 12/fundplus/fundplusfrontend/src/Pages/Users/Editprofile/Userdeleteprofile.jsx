import React from 'react'
import { Navbar } from '../../../Components/Navbar/Navbar'
import { Usersidebardescription } from '../../../Components/Usercomponents/Userprofilesidebar/Usersidebardescription';
import Usersidebar from '../../../Components/Usercomponents/Userprofilesidebar/Usersidebar';
import { Userdeleteprofilesection } from '../../../Components/Usercomponents/Userprofilesidebar/Userdeleteprofilesection';
import Footer from '../../../Components/Footer/Footer';

export const Userdeleteprofile = () => {
  return (
    <div>
      <Navbar />
      <Usersidebardescription />
      <div className="flex lg:flex-col  gap-12  ">
        <Usersidebar />
        <Userdeleteprofilesection />
      </div>
      <Footer />
    </div>
  );
}
