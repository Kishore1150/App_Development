import React from "react";
import i1 from "../../Assets/Images/Home/i1.svg";

export const Landingsection5 = () => {
  return (
    <>
      <main>
        <section className="h-full w-full bg-backgroundwhite">
          <div className="flex flex-col gap-3 xl:px-32 lg:p-7 ">
            <p className="xl:text-[3.5em] lg:text-2xl font-extrabold font-productsansb text-darkteal">
              The mission and goal of our organization
            </p>
            <p className="text-textgray xl:text-2xl font-productsansr ">
              We provide a trusted platform for peoples of worldwide to support
              people and organizers.
            </p>
          </div>
          <div className="xl:flex lg:flex lg:flex-col  items-center xl:mt-32 ">
            <div className=" flex xl:ml-28 lg:p-7 flex-col gap-16">
              <div className="flex items-start  gap-10">
                <span className=" ">
                  <i class="fa-solid rounded-full py-5 xl:px-[22px] lg:px-[20px] bg-lightteal xl:text-4xl text-white fa-chart-area"></i>
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-bold xl:text-2xl">Manage your campaigns</p>
                  <p className="font-productsansr xl:text-lg text-textgray">
                    Track how many people signed the petition by week, month,
                    year.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-10">
                <span className=" ">
                  <i class="fa-solid rounded-full py-5 xl:px-[22px] lg:px-[20px] bg-lightteal xl:text-4xl text-white fa-circle-dollar-to-slot"></i>
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-bold xl:text-2xl">Collecting donation</p>
                  <p className="font-productsansr xl:text-lg text-textgray">
                    Campaign owners can set up to receive donations from
                    supporters.
                  </p>
                </div>
              </div>
              <div className="flex items-start  gap-10">
                <span className=" ">
                  <i class="rounded-full py-5 xl:px-[20px] lg:px-[18px] bg-lightteal xl:text-4xl text-white fa-solid fa-money-check"></i>
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-bold xl:text-2xl">Withdraw your money</p>
                  <p className="font-productsansr text-lg text-textgray">
                    Withdraw your money to bank account or Paypal easily with
                    few set up.
                  </p>
                </div>
              </div>
            </div>
            <figure className="">
              <img src={i1} className="xl:max-w-[700px] h-[460.96px]" alt="" />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
};
