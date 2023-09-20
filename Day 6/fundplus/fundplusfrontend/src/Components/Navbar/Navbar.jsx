import React, { useState, useEffect } from "react";
import logo from "../../Assets/Images/logo.svg";
import { useNavigate } from "react-router-dom";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header
        className="z-10 px-4
          fixed top-0  bg-white
        w-full">
        <nav
          className="  h-[4em] bg-white flex items-center justify-between">
          <div className="flex gap-10 items-center">
            <figure className="flex gap-2 items-center">
              <img width={25} src={logo} alt="" />
              <span className="text-darkteal2 font-bold font-productsansb text-2xl">
                Fundplus
              </span>
            </figure>
            <button className="flex items-center text-darkteal border-[1px] px-5 py-1.5 rounded-full border-lightgray1 gap-2">
              <span>
                <i class="fa-solid fa-globe"></i>
              </span>
              <span>Global</span>
            </button>
          </div>
          <div className="flex lg:hidden items-center gap-5">
            <button className="flex gap-2 items-center rounded-lg  text-darkteal ">
              <i class="fa-solid fa-magnifying-glass font-bold"></i>
              <span className="">Search</span>
            </button>
            <button className="flex gap-3 rounded-lg  text-darkteal ">
              <span className="">About</span>
            </button>
            <button className="flex gap-3 rounded-lg  text-darkteal ">
              <span className="">Campaigns</span>
            </button>
            <Menu placement="bottom-start">
              <MenuHandler>
                <button className="text-darkteal gap-2 flex items-center ">
                  <span>More</span>
                  <span>
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </button>
              </MenuHandler>
              <MenuList className="border-none cursor-pointer text-darkteal  w-32 rounded-lg flex flex-col gap-5 p-5">
                <p className="hover:outline-0 ">Supporters list</p>
                <p className="hover:outline-0 ">Donors list</p>
                <p className="hover:outline-0 ">Contact</p>
              </MenuList>
            </Menu>
          </div>
          <div className="flex lg:hidden items-center gap-5">
            <button className="flex gap-3 rounded-lg  text-darkteal ">
              <span className="">Start a Campaign</span>
            </button>
            <button onClick={() => navigate("/signup")} className=" ">
              <span className="text-darkteal   ">Sign Up</span>
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="border-[1px] border-lightgray px-5 rounded-full py-1">
              <span className="      text-darkgray ">Sign In</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
