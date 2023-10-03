import React, { useState } from "react";
import { Collapse, Button } from "@material-tailwind/react";
import Faqs4 from "../../Datas/Faq4";

export const Faqsection5 = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const toggleOpen = (i) => {
    setId(i);
    setOpen((cur) => !cur);
  };
  return (
    <>
      <main>
        <section className="w-full grid place-content-center  bg-[#fbf7ed] ">
          <div className="flex lg:flex-col xl:p-5 items-center lg:gap-12 xl:justify-evenly  w-screen  ">
            <div className="flex flex-col xl:mt-32  lg:mt-12 gap-10 xl:w-[45em]  items-start">
              <p className="xl:text-5xl  lg:text-2xl font-bold text-darkteal lg:px-5">
                Donations and Contributions
              </p>
              <div>
                <div className=" xl:py-12">
                  {Faqs4.map((faqs, index) => (
                    <>
                      <div className="flex flex-col  lg:px-5 py-3 cl  w-full ">
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
                        className="text-justify flex items-center justify-center mt-4 lg:text-sm  lg:px-5 "
                        open={open && faqs.id === id}>
                        <p className="text-[#838f8c]">{faqs.answer}</p>
                      </Collapse>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <figure className="">
              <img
                src="https://res.cloudinary.com/dalynypf0/image/upload/v1695539812/2_qqkqct.svg"
                alt=""
                width="550"
              />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
};
