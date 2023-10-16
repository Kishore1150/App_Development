import React from 'react';
import { useNavigate } from "react-router-dom";

export const Faqsection1 = () => {
  const navigate=useNavigate();
  return (
    <>
      <main>
        <section className="w-full grid place-content-center  bg-[#fbf7ed] h-screen">
          <div className="flex lg:flex-col items-center lg:gap-12 lg:p-12 xl:justify-evenly lg:mt-64  w-screen xl:mt-32 ">
            <div className="flex flex-col gap-10 xl:w-[26em]  items-start">
              <p className="xl:text-6xl  lg:text-2xl font-bold text-darkteal ">
                The answers for your question
              </p>
              <p className="text-[#838f8c] text-2xl">
                Here is a collection of frequently asked questions from users
              </p>
              <button onClick={()=>navigate("/contact")} className="bg-lightteal rounded-xl py-3 font-bold font-productsansb px-10 text-white">
                Ask a question
              </button>
            </div>
            <div>
              <figure>
                <img
                  src="https://res.cloudinary.com/dalynypf0/image/upload/v1695494200/contact_u6lpdi.svg"
                  alt=""
                  width="600"
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
