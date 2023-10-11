import React from "react";
import Landingsection3 from "../../Components/Homecomponents/Landingsection3";
import { Landingsection5 } from "../../Components/Homecomponents/Landingsection5";
import Landingsection6 from "../../Components/Homecomponents/Landingsection6";
import Footer from "../../Components/Footercomponents/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Landingsection1 } from "../../Components/Homecomponents/Landingsection1";
import { Landingsection4 } from "../../Components/Homecomponents/Landingsection4";
import Landingsection7 from "../../Components/Homecomponents/Landingsection7";

const Home = () => {
  return (
    <>
      <div className="bg-backgroundwhite">
        <Navbar />
        <Landingsection1/>
        <Landingsection3/>
        <Landingsection4/>
        <Landingsection5 />
        <Landingsection7/>
        <Landingsection6 />
        <Footer />
      </div>
    </>
  );
};

export default Home;
