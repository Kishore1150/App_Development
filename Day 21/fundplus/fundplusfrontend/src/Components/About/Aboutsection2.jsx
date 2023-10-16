import React from "react";

const Aboutsection2 = () => {
  return (
    <>
      <main>
        <section className="h-full bg-backgroundwhite xl:pt-24  xl:p-12">
          <div className="flex lg:flex-col  lg:p-5 xl:p-5 justify-center gap-20">
            <div className="xl:w-[22em] flex  flex-col gap-5 ">
              <p className="text-textgray">who use platform?</p>
              <p
                data-aos="fade-right"
                data-aos-duration="1500"
                className="xl:text-[3em] lg:text-xl font-productsansb xl:leading-[60px]   text-start font-extrabold text-darkteal">
                We believe that when everyone speaks out the problem of society
                and action together, the world will become a better place.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="grid lg:grid-cols-1 grid-cols-2 gap-10">
              <div
                className="flex flex-col gap-5 text-[#fffcf7]  xl:w-[20em] rounded-lg  px-5 py-8 bg-lightteal  items-center">
                <span className=" ">
                  <i class="fa-solid text-5xl rounded-full bg-[#fffcf7] px-5 py-6 text-[#b0c2bb]  fa-hand-holding-dollar"></i>
                </span>
                <span className="font-bold   text-3xl">Donors</span>
                <span className="text-center text-sm ">
                  Dedicated philanthropists like you can empower social change
                  catalysts to initiate impactful movements and unite advocates
                  within their communities.
                </span>
              </div>
              <div className="flex flex-col gap-5 text-[#fffcf7] xl:w-[20em] rounded-lg  px-5 py-8 bg-lightteal  items-center">
                <span className=" ">
                  <i class="fa-solid text-5xl rounded-full bg-[#fffcf7] px-8 py-6 text-[#b0c2bb]  fa-person"></i>
                </span>
                <span className="font-bold   text-3xl">Fundraisers</span>
                <span className="text-center text-sm ">
                  Energetic fundraisers are essential to ignite social movements
                  and secure vital resources within their communities.
                </span>
              </div>
              <div className="flex flex-col gap-5 text-[#fffcf7] xl:w-[20em] rounded-lg  px-5 py-8 bg-lightteal  items-center">
                <span className=" ">
                  <i class="fa-solid text-5xl rounded-full bg-[#fffcf7] px-5 py-[26px] text-[#b0c2bb]  fa-handshake-angle"></i>
                </span>
                <span className="font-bold   text-3xl">Volunteers</span>
                <span className="text-center text-sm ">
                  Dedicated volunteers are the driving force behind social
                  movements, providing crucial support for the community.
                </span>
              </div>
              <div className="flex flex-col gap-5 text-[#fffcf7] xl:w-[20em] rounded-lg  px-5 py-8 bg-lightteal  items-center">
                <span className=" ">
                  <i class="fa-solid text-5xl rounded-full bg-[#fffcf7] px-5 py-[26px] text-[#b0c2bb]  fa-users"></i>
                </span>
                <span className="font-bold   text-3xl">Organizations</span>
                <span className="text-center text-sm ">
                  Leading organizations are advancing their causes and
                  mobilizing new supporters.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Aboutsection2;
