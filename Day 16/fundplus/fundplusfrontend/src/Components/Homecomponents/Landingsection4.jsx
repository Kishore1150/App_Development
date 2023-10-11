import React from "react";
import { MdPeople } from "react-icons/md";
import { FaBoxOpen, FaDonate } from "react-icons/fa";

export const Landingsection4 = () => {
  return (
    <>
      <div class="box4 relative lg:gap-3 bg-backgroundwhite xl:gap-5 flex flex-col lg:flex-col items-center text-center xl:mt-[200px]">
        <p class="box4-head text-darkteal font-productsansb font-extrabold xl:text-6xl lg:text-4xl">
          Our Features
        </p>
        <p class="box4-subhead  text-textgray xl:text-[1.8rem] lg:text-[1em]">
          We believe that we can save more life with you.
        </p>
      </div>

      <div class="flex relative lg:flex-col justify-evenly xl:h-[565.14px] lg:gap-5 items-center xl:pl-[100px] lg:p-5 xl:pr-[100px]">
        <div class="flex flex-col gap-5 lg:items-start xl:items-center xl:w-[350px] bg-[#fbf7ed] rounded-xl lg:w-full xl:h-[369.5px] lg:py-8 lg:px-5  xl:p-4 xl:text-center">
          <button class="box4-f1-icon lg:text-4xl xl:text-6xl xl:mt-[30px] xl:mb-[5px] xl:p-[20px] lg:p-3 bg-[#396c61] text-white rounded-[100px]">
            <MdPeople />
          </button>
          <span class="box4-f1-head text-2xl">
            <p className="text-3xl font-productsansb font-extrabold text-lightteal">
              Become Volunteer
            </p>
          </span>
          <span class="box4-f1-subhead text-textgray">
            Beoame a volunteer if you are
            <br />
            motivated & ready to support people
            <br />
            and the community.
            <br />
          </span>
        </div>

        <div class="box4-f2 xl:w-[350px] flex flex-col gap-5 xl:items-center lg:items-start bg-[#fbf7ed] rounded-xl lg:w-full xl:h-[369.5px] lg:py-8 lg:px-5   xl:p-4 xl:text-center">
          <button class="box4-f2-icon  lg:text-4xl lg:p-3 xl:text-6xl xl:mt-[30px] xl:p-[20px] bg-[#396c61] text-white rounded-[100px]">
            <FaBoxOpen />
          </button>
          <span class="box4-f2-head text-2xl">
            <p className="text-3xl font-productsansb font-extrabold text-lightteal">
              Quick Fundraise
            </p>
          </span>
          <span class="box4-f2-subhead text-textgray">
            The simplest and quickest way to
            <br />
            make a donation, so you can support
            <br />
            people in need.
            <br />
          </span>
        </div>

        <div class="box4-f3 xl:w-[350px] flex gap-5 flex-col xl:items-center lg:items-start bg-[#fbf7ed] rounded-xl lg:w-full lg:py-8 lg:px-5  xl:h-[369.5px]  p-4 xl:text-center">
          <button class="box4-f3-icon xl:text-6xl  lg:p-4 lg:text-3xl xl:mt-[30px]  xl:p-[20px] bg-[#396c61] text-white rounded-[100px]">
            <FaDonate />
          </button>
          <span class="box4-f3-head text-2xl">
            <p className="text-3xl font-productsansb font-extrabold text-lightteal">
              Start a Donation
            </p>
          </span>
          <span class="box4-f3-subhead text-textgray">
            Start donating for our campaigns to
            <br />
            support poor people and our
            <br />
            children’s to school.
            <br />
          </span>
        </div>
      </div>
    </>
  );
};
