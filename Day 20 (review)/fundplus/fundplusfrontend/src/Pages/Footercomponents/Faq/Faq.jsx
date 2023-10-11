import React from "react";

import { Navbar } from "../../../Components/Navbar/Navbar.jsx";
import Footer from "../../../Components/Footercomponents/Footer/Footer";
import {Faqsection1} from "../../../Components/Footercomponents/FAQ/Faqsection1.jsx"
import {Faqsection2} from "../../../Components/Footercomponents/FAQ/Faqsection2.jsx"
import {Faqsection3} from "../../../Components/Footercomponents/FAQ/Faqsection3.jsx"
import {Faqsection4} from "../../../Components/Footercomponents/FAQ/Faqsection4.jsx"
import {Faqsection5} from "../../../Components/Footercomponents/FAQ/Faqsection5.jsx"

export const Faq = () => {
  return (
    <>
      <Navbar />
      <Faqsection1 />
      <Faqsection2 />
      <Faqsection3 />
      <Faqsection4 />
      <Faqsection5 />
      <Footer />
    </>
  );
};
