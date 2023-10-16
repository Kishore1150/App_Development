import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import ContactSection3 from "../../Components/Contactcomponents/ContactSection3";
import ContactSection1 from "../../Components/Contactcomponents/ContactSection1";
import ContactSection2 from "../../Components/Contactcomponents/ContactSection2";
import Footer from "../../Components/Footercomponents/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className=" dark:bg-bluegray ">
        <Navbar/>
        <ContactSection1/>
        <ContactSection2/>
        <ContactSection3/>
        <Footer/>
      </div>
    </>
  );
};

export default Contact;
