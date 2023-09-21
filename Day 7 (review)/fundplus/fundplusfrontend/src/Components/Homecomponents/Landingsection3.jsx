import React from "react";
import person1 from "../../Assets/Images/Home/h1.jpg";
import person2 from "../../Assets/Images/Home/h2.jpg";
import person3 from "../../Assets/Images/Home/h3.jpg";
import person4 from "../../Assets/Images/Home/h4.jpg";
const Landingsection3 = () => {
  return (
    <main className="h-full  bg-backgroundwhite w-full">
      <section className="m-24">
        <div className="xl:flex lg:flex lg:flex-col  justify-center gap-6  items-center  ">
          <div className="grid grid-cols-2 lg:w-screen lg:p-2 lg:gap-5  xl:w-[60em] xl:gap-y-5 xl:gap-x-8">
            <figure className="hover:duration-300  hover:opacity-80 xl:max-w-[255px] xl:max-h-[300px]">
              <img
                className="rounded-xl  object-cover   xl:w-[255px] xl:h-[300px] "
                src={person1}
                alt=""
              />
            </figure>
            <figure className="hover:duration-300   hover:opacity-80 xl:max-w-[255px] xl:max-h-[300px] xl:relative xl:top-12">
              <img
                className="rounded-xl  object-cover  xl:w-[255px] xl:h-[300px] "
                src={person2}
                alt=""
              />
            </figure>
            <figure className=" hover:duration-300 hover:opacity-80 ">
              <img
                className=" object-cover  rounded-xl xl:w-[255px] xl:h-[300px] "
                src={person3}
                alt=""
              />
            </figure>
            <figure className=" xl:max-w-[255px] hover:duration-300  hover:opacity-80 xl:max-h-[300px] xl:relative xl:top-[3em]">
              <img
                className="rounded-xl   object-cover  xl:w-[255px] xl:h-[300px] "
                src={person4}
                alt=""
              />
            </figure>
          </div>
          <div className="flex flex-col gap-10  mt-16  justify-center">
            <div className="flex flex-col gap-5">
              <p className="text-5xl text-darkteal font-productsansb font-extrabold leading-[60px] w-full">
                We are the Powerful, Free Fundraising Platform
              </p>
              <p className="font-light text-2xl   text-textgray">
                Proven, multi-purpose crowdfunding technology for effective
                organizational individual fundraising.
              </p>
            </div>
            <div className="flex flex-col gap-10 ">
              <div className="flex  items-center  gap-5">
                <span>
                  <i class="fa-solid bg-lightteal  text-white p-2  rounded-full fa-arrow-right"></i>
                </span>
                <p className="text-2xl text-darkteal font-bold">
                  Start your campaigns
                </p>
              </div>
              <div className="flex  items-center  gap-3">
                <span>
                  <i class="fa-solid bg-lightteal  text-white p-2  rounded-full fa-arrow-right"></i>
                </span>
                <p className="text-2xl text-darkteal font-bold">
                  Share with friends
                </p>
              </div>
              <div className="flex  items-center  gap-3">
                <span>
                  <i class="fa-solid bg-lightteal  text-white p-2 rounded-full fa-arrow-right"></i>
                </span>
                <p className="text-2xl text-darkteal font-bold">
                  Manage Donations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landingsection3;
