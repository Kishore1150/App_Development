import React, { useState } from "react";
import { Collapse, Button } from "@material-tailwind/react";
import Faqs from "../../Datas/Faq";

export const Faqsection2 = () => {
  const [open, setOpen] = useState(false);
  const [id,setId]=useState(0);
  const toggleOpen = (i) => {

      setId(i);
    setOpen((cur) => !cur);
  };


  return (
    <>
      <main className="bg-backgroundwhite">
        <section className="h-full w-screen lg:mt-32  grid place-content-center xl:py-12">
          <div>
            <p className="font-bold lg:text-3xl xl:text-6xl text-darkteal">
              General question
            </p>
          </div>
        </section>
        <div className=" py-12">
          {Faqs.map((faqs, index) => (
            <>
              <div className="flex flex-col xl:px-[20em] lg:p-5  py-3 cl  w-full ">
                <button
                  className="flex xl:items-center gap-5 text-darkteal xl:text-2xl"
                  onClick={() => toggleOpen(faqs.id)}>
                  <span>
                    {open && faqs.id === id ? (
                      <i class="fa-solid fa-angle-up"></i>
                    ) : (
                      <i class="fa-solid fa-angle-down"></i>
                    )}
                  </span>
                  <span className="font-bold text-darkteal ">
                    {faqs.question}
                  </span>
                </button>
              </div>
              <Collapse
                className="text-justify flex items-center justify-center mt-4 lg:text-sm lg:px-5 xl:px-[20em]"
                open={open && faqs.id === id}>
                <p className="text-[#838f8c]">{faqs.answer}</p>
              </Collapse>
            </>
          ))}
        </div>
      </main>
    </>
  );
};
