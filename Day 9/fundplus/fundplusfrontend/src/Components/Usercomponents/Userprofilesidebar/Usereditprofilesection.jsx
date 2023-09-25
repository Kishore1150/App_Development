import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Redux/userSlice";


export const Usereditprofilesection = () => {
  const user=useSelector(selectUser);
  return (
    <main className="xl:h-full  p-5 xl:w-full  ">
      <div className="pt-10 text-darkteal">
        <p className="text-2xl font-productsansb font-extrabold text-darkteal ">
          Edit profile
        </p>
      </div>

      <section className="text-darkteal xl:w-fit  lg:w-full flex flex-col gap-3 mt-5">
        <div className="flex lg:flex-col xl:items-center  lg:w-full xl:w-fit gap-5">
          <div className="flex-col flex gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">First Name</span>
              <span className="text-red">*</span>
            </div>
            <input
              value={user?.firstName}
              className=" focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 py-2.5 border-[1px] w-[20em] lg:w-full rounded-lg border-lightgray2"
              placeholder="Enter first name"
            />
          </div>
          <div className="flex-col flex gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Last Name</span>
              <span className="text-red">*</span>
            </div>
            <input
              value={user?.lastName}
              className="focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 border-[1px] xl:w-[20em] rounded-lg lg:w-full border-lightgray2"
              placeholder="Enter last name"
            />
          </div>
        </div>
        <div className="flex lg:flex-col xl:items-center lg:w-full w-fit gap-5">
          <div className="flex-col flex gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Display Name</span>
              <span className="text-red">*</span>
            </div>
            <input
              value={user?.firstName}
              className=" focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 py-2.5 border-[1px] w-[20em] lg:w-full rounded-lg border-lightgray2"
              placeholder=""
            />
          </div>
          <div className="flex-col xl:w-fit flex gap-2">
            <div className="flex text-sm">
              <span className="font-bold font-productsansb">Gender</span>
              <span className="text-red">*</span>
            </div>
            <select
              className="focus:outline-0 focus:focus:border-brightgreen  p-2.5  border-[1px] w-[20em] rounded-lg lg:w-full border-lightgray2"
              placeholder="">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-sm">
            <span className="font-bold font-productsansb">Email</span>
            <span className="text-red">*</span>
          </div>
          <input
            value={user?.email}
            className="focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] rounded-lg lg:w-full border-lightgray2"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-sm">
            <span className="font-bold font-productsansb">Birthday</span>
            <span className="text-red">*</span>
          </div>
          <input
            type="date"
            className="focus:outline-0  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] rounded-lg lg:w-full border-lightgray2"
            placeholder=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-sm">
            <span className="font-bold font-productsansb">Location</span>
            <span className="text-red">*</span>
          </div>
          <input
            className="focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] rounded-lg lg:w-full border-lightgray2"
            placeholder="Enter your address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-sm">
            <span className="font-bold font-productsansb">Country</span>
            <span className="text-red">*</span>
          </div>
          <select
            className="focus:outline-0  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] rounded-lg lg:w-full border-lightgray2"
            placeholder="">
            <option value="India">India</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-sm">
            <span className="font-bold font-productsansb">Phone Number</span>
            <span className="text-red">*</span>
          </div>
          <input
            className="focus:outline-0  focus:focus:border-brightgreen px-4   p-2.5 border-[1px]  w-[41.5em] lg:w-full rounded-lg border-lightgray2"
            placeholder="+91"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-sm">
            <span className="font-bold font-productsansb">Website</span>
            <span className="text-red">*</span>
          </div>
          <input
            className="focus:outline-0    focus:focus:border-brightgreen px-4 p-2.5 border-[1px]  w-[41.5em] lg:w-full rounded-lg border-lightgray2"
            placeholder="http://"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex text-sm">
            <span className="font-bold font-productsansb">Biographical</span>
            <span className="text-red">*</span>
          </div>
          <textarea
            className="focus:outline-0  resize-none   focus:focus:border-brightgreen px-4 p-2.5 border-[1px]  w-[41.5em] lg:w-full h-[7.5em] rounded-lg border-lightgray2"
            placeholder="Introduce about yourself..."
          />
        </div>
        <div className="flex justify-end mt-2 mb-24">
          <button className="bg-lightteal rounded-md flex gap-3 text-white px-8 py-2">
            <span>Save Profile</span>
            <span>
              <i class="fa-solid fa-floppy-disk"></i>
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};
