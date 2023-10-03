import React, { useState } from "react";
import { Collapse, Button } from "@material-tailwind/react";
import Faqs3 from "../../Datas/Faq3";

export const Faqsection4 = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const toggleOpen = (i) => {
    setId(i);
    setOpen((cur) => !cur);
  };

  return (
    <>
      <main className="bg-backgroundwhite">
        <section className="h-full w-screen  grid place-content-center py-12">
          <div>
            <p className="font-bold lg:text-3xl xl:text-6xl text-darkteal">Campaign question</p>
          </div>
        </section>
        <div className=" py-12">
          {Faqs3.map((faqs, index) => (
            <>
              <div className="flex flex-col xl:px-[15em] lg:p-5  py-3 cl  w-full ">
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
                  <span className="font-bold lg:text-left text-darkteal ">
                    {faqs.question}
                  </span>
                </button>
              </div>
              <Collapse
                className="text-justify flex items-center justify-center mt-4 lg:px-5 lg:text-sm xl:px-[15em]"
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
