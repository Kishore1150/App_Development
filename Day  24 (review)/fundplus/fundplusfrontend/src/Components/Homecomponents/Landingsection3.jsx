import React from "react";

const Landingsection3 = () => {
  return (
    <main className="h-full  bg-backgroundwhite w-full">
      <section className="m-24">
        <div className="xl:flex lg:flex lg:flex-col  justify-center gap-8  items-center  ">
          <div className="grid grid-cols-2 lg:w-screen lg:p-2 lg:gap-5  xl:w-[80em] xl:gap-y-6 xl:gap-x-8">
            <figure className="hover:duration-300  hover:opacity-80 xl:max-w-[270px] xl:max-h-[300px]">
              <img
                className="rounded-xl  object-cover   xl:w-[270px] xl:h-[300px] "
                src="https://res.cloudinary.com/dalynypf0/image/upload/v1695546018/h1_nwl2wf.jpg"
                alt=""
              />
            </figure>
            <figure className="hover:duration-300   hover:opacity-80 xl:max-w-[270px] xl:max-h-[300px] xl:relative xl:top-12">
              <img
                className="rounded-xl  object-cover  xl:w-[270px] xl:h-[300px] "
                src="https://res.cloudinary.com/dalynypf0/image/upload/v1695546007/h2_v0ewrh.jpg"
                alt=""
              />
            </figure>
            <figure className=" hover:duration-300 hover:opacity-80 ">
              <img
                className=" object-cover  rounded-xl xl:w-[255px] xl:h-[300px] "
                src="https://res.cloudinary.com/dalynypf0/image/upload/v1695546157/h3_xj4gma.jpg"
                alt=""
              />
            </figure>
            <figure className=" xl:max-w-[255px] hover:duration-300  hover:opacity-80 xl:max-h-[300px] xl:relative xl:top-[3em]">
              <img
                className="rounded-xl   object-cover  xl:w-[255px] xl:h-[300px] "
                src="https://res.cloudinary.com/dalynypf0/image/upload/v1695547150/h4_shly8s.jpg"
                alt=""
              />
            </figure>
          </div>
          <div className="flex lg:px-4 flex-col gap-10  w-screen  xl:mt-16 lg:mt-10  xl:justify-center">
            <div className="flex flex-col gap-5">
              <p className="xl:text-5xl lg:text-3xl text-darkteal font-productsansr font-extrabold leading-[60px] w-full">
                We are the Powerful, Free Fundraising Platform
              </p>
              <p className="font-light xl:text-2xl   text-textgray">
                Proven, multi-purpose crowdfunding technology for effective
                organizational individual fundraising.
              </p>
            </div>
            <div className="flex flex-col lg:gap-7 xl:gap-10 ">
              <div className="flex  items-center  gap-3">
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
