import React from "react";
import { MdPeople } from "react-icons/md";
import { FaBoxOpen, FaDonate } from "react-icons/fa";

export const Landingsection4 = () => {
  return (
    <>
      <div class="box4 relative  gap-5 flex flex-col lg:flex-col items-center text-center  mt-[40px]">
        <p class="box4-head text-darkteal font-productsansb font-extrabold text-6xl">
          Our Features
        </p>
        <p class="box4-subhead  text-textgray xl:text-[1.8rem] lg:text-[0.8rem]">
          We believe that we can save more life with you.
        </p>
      </div>

      <div class="flex relative lg:flex-col justify-evenly xl:h-[565.14px] lg:h-[1200.55px] items-center pl-[100px] pr-[100px]">
        <div class="box4-f1 xl:w-[350px] bg-[#fbf7ed] rounded-xl lg:w-[320px] h-[369.5px]  p-4 text-center">
          <button class="box4-f1-icon text-6xl mt-[30px] mb-[5px] p-[20px] bg-[#396c61] text-white rounded-[100px]">
            <MdPeople />
          </button>
          <span class="box4-f1-head text-2xl">
            <p className="text-3xl font-productsansb font-extrabold text-lightteal">
              <br />
              Become Volunteer
              <br />
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

        <div class="box4-f2 xl:w-[350px] bg-[#fbf7ed] rounded-xl lg:w-[320px] h-[369.5px]  p-4 text-center">
          <button class="box4-f2-icon text-6xl  mt-[30px] p-[20px] bg-[#396c61] text-white rounded-[100px]">
            <FaBoxOpen />
          </button>
          <span class="box4-f2-head text-2xl">
            <p className="text-3xl font-productsansb font-extrabold text-lightteal">
              <br />
              Quick Fundraise
              <br />
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

        <div class="box4-f3 xl:w-[350px] bg-[#fbf7ed] rounded-xl lg:w-[320px] h-[369.5px]  p-4 text-center">
          <button class="box4-f3-icon text-6xl mt-[30px]  p-[20px] bg-[#396c61] text-white rounded-[100px]">
            <FaDonate />
          </button>
          <span class="box4-f3-head text-2xl">
            <p className="text-3xl font-productsansb font-extrabold text-lightteal">
              <br />
              Start a Donation
              <br />
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
