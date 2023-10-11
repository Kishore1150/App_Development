import React from "react";
import { BsHeadset } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { BsFillInboxesFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

const ContactSection1 = () => {
  const call = () => {
    window.location.href = "tel:9626209856";
  };

  return (
    <>
      <main className="xl:h-[45rem] lg:min-h-screen  bg-backgroundwhite lg:w-full">
        <section className="relative lg:p-5 lg:top-24 lg:pb-32 xl:top-32 lg:w-fit xl:left-32 xl:w-[70rem]">
          <div className="xl:w-[60rem] flex flex-col gap-2">
            <h1 className="xl:text-6xl lg:text-2xl text-darkteal font-productsansb leading-[1.2] font-bold">
              Let's connect and get to know each other
            </h1>
            <p className="text-lightgray lg:w-fit text-xl">
              Passionately leading the charge for change, our platform warmly
              welcomes you with open hearts and open arms. Your generosity knows
              no bounds, and it echoes through the digital corridors of our
              fundraiser and donation platform.``
            </p>
          </div>

          <div className="mt-10 grid xl:grid-cols-3  lg:gap-12 lg:w-fit lg:grid-cols-1 xl:w-[70rem]  ">
            <figure className="flex flex-col items-center lg:py-5 lg:px-8  dark:bg-[#191b1d] dark:text-white xl:pt-4 gap-2.5 xl:h-[15rem]  xl:w-[21rem] rounded-2xl bg-white shadow-2xl xl:py-5 ">
              <BsHeadset className="text-2xl bg-lightgreen p-4 w-14 h-14 text-brightgreen rounded-full" />
              <h1 className="font-bold  text-darkteal xl:text-xl">Call us</h1>
              <p className="w-80 text-lightgray text-center">
                Imprudence attachment him his for sympathize. Large above be to
                means.
              </p>
              <div className="flex  gap-2 items-center ">
                <button
                  onClick={call}
                  className="flex gap-2 items-center bg-hoverpurple  lg:px-2 lg:py-2 text-purple xl:px-3 xl:py-2 rounded-md font-semibold text-sm hover:bg-purple hover:text-white transition-all delay-75 ease-in-out duration-700">
                  <AiOutlineMobile />
                  <span>91+9626209856</span>
                </button>
                <button
                  onClick={call}
                  className="flex gap-2 items-center bg-gray lg:p-2 text-black xl:px-3 xl:py-2 rounded-md font-semibold text-sm hover:bg-purple hover:text-white transition-all delay-75 ease-in-out duration-700">
                  <i class="fa-solid fa-phone"></i> <span>04218384224</span>
                </button>
              </div>
            </figure>
            <figure className="flex flex-col items-center dark:bg-[#191b1d] dark:text-white gap-3 xl:h-[15rem]  xl:w-[21rem] rounded-2xl bg-white shadow-2xl py-5 ">
              <BsFillInboxesFill className=" bg-lightred  px-4 w-14 h-14  text-red rounded-full" />
              <h1 className="font-bold  text-darkteal text-xl">Email us</h1>
              <p className="w-80 text-lightgray text-center">
                Large above be to means. Him his for sympathize.
              </p>
              <div className="flex gap-2 items-center">
                <button className="flex gap-2 items-center  rounded-md font-semibold text-sm text-purple">
                  <i class="fa-solid fa-envelope"></i>
                  <span className="">
                    <a className="underline" href="mailto:fundplus15@gmail.com">
                      fundplus15@gmail.com
                    </a>
                  </span>
                </button>
              </div>
            </figure>
            <figure className="flex lg:p-5 flex-col dark:bg-[#191b1d] dark:text-white items-center pt-4 gap-4 xl:h-[15rem] xl:w-[21rem] rounded-2xl bg-white shadow-2xl  ">
              <BsGlobe
                className="text-xl bg-lightorange
               p-4 w-14 h-14 text-orange rounded-full"
              />
              <h1 className="font-bold text-darkteal text-xl">Social Media</h1>
              <p className="w-80 text-lightgray text-center">
                Sympathize Large above be to means.
              </p>
              <div className="flex gap-2 items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61551700172033&mibextid=ZbWKwL"
                  target="_blank">
                  <button className="bg-facebook px-2.5 text-md py-1 rounded-md">
                    <i class="fa-brands fa-facebook-f  text-white"></i>
                  </button>
                </a>
                <a
                  href="https://www.instagram.com/fundplus15/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                  target="_blank">
                  <button className="bg-instagram px-2.5 text-md py-1 rounded-md">
                    <i class="fa-brands fa-instagram  text-white"></i>
                  </button>
                </a>
                <a href="https://twitter.com/Fundplus380205" target="_blank">
                  <button className="bg-twitter px-2.5 text-md py-1 rounded-md">
                    <i class="fa-brands fa-twitter text-white"></i>
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/kishore-kumar-530504225/
                  "
                  target="_blank">
                  <button className="bg-linkedin px-2.5 text-md py-1 rounded-md">
                    <i class="fa-brands fa-linkedin text-white bg-transparent"></i>
                  </button>
                </a>
              </div>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactSection1;
