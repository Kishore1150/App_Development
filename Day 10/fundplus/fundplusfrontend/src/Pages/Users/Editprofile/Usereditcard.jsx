import React from 'react'
import { Navbar } from '../../../Components/Navbar/Navbar';
import { Usersidebardescription } from '../../../Components/Usercomponents/Userprofilesidebar/Usersidebardescription';
import Usersidebar from '../../../Components/Usercomponents/Userprofilesidebar/Usersidebar';
import Usercardpaymentdetails from '../../../Components/Usercomponents/Userprofilesidebar/Usercardpaymentdetails';
import Footer from '../../../Components/Footer/Footer';

export const Usereditcard = () => {
  return (
    <>
      <div className=" ">
        <Navbar />
        <Usersidebardescription name="Profile settings" />
        <div className="xl:flex lg:flex lg:flex-col  gap-2  ">
          <Usersidebar />
          <Usercardpaymentdetails/>
        </div>
        <Footer />
      </div>
    </>
  );
}
