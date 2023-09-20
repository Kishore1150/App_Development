import React from "react";
import logo from '../../Assets/Images/logo.svg';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
      <header className="z-10 h-[4em] fixed top-0 w-full bg-white">
        <nav className="p-3 flex items-center justify-between">
          <div className="flex items-center">
            <figure className="flex gap-2 items-center">
              <img width={35} src={logo} alt="" />
              <span className="text-darkteal2 font-bold font-productsansb text-2xl">
                Fundplus
              </span>
            </figure>
          </div>
          <div className=""></div>
          <div className="flex lg:hidden items-center gap-5">
            <button className="flex gap-3 rounded-lg bg-lightteal text-white p-2 px-5">
              <span>
                <i class="fa-regular fa-pen-to-square"></i>
              </span>
              <span className="font-bold font-productsansb">
                Start a Campaign
              </span>
            </button>
            <button className="flex  items-center ">
              <span onClick={()=>navigate("/signup")} className="bg-gold mr-[-30px] text-sm font-bold rounded-l-lg font-productsansb text-white py-2 px-7">
                Sign Up
              </span>
              <span className="bg-white relative left-3 text-sm rounded-full px-2 py-1 text-textgray">
                or
              </span>
              <span onClick={()=>navigate("/")} className=" bg-lightteal text-sm  font-bold rounded-r-lg font-productsansb text-white py-2 px-7">
                Sign In
              </span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
