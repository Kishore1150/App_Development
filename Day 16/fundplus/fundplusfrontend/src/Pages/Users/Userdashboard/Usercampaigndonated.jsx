import React from 'react'
import { Navbar } from '../../../Components/Navbar/Navbar'
import Dashboardsection from "../../../Components/Dashboardsection/Dashboardsection";
import { Usercampaigndonationsection } from '../../../Components/Campaign/Usercampaigndonationsection';

const Usercampaigndonated = () => {
  return (
    <>
      <Navbar />
      <Dashboardsection />
      <Usercampaigndonationsection/>
    </>
  );
}

export default Usercampaigndonated