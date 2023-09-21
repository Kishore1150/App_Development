import React from "react";
import profile from "../../../Assets/Images/Dashboard/h2.jpg";
import { useNavigate } from "react-router-dom";

const Usersidebar = () => {
  const navigate=useNavigate();
  return (
    <>
        <div className="h-full   bg-lightteal2">
          <div className=" h-[20em] pt-48 pl-24 w-full ">
            <p className="text-[40px]   text-darkteal  font-bold font-productsansb">
              Profile Settings
            </p>
          </div>
        </div>
        <aside className="pl-24  w-fit ">
          <div className="flex   pt-6 items-center gap-3 text-sm text-darkteal">
            <span>
              <i class="fa-solid fa-house-chimney"></i>
            </span>
            <span className="text-lightgray">
              <i class="fa-solid fa-angle-right"></i>
            </span>
            <p>Profile settings</p>
          </div>

          <div
            className=" w-fit h-full
          ">
            <figure className="h-64 mt-5 relative w-64">
              <button className="absolute flex items-center gap-1 right-0 p-1.5 text-darkgray text-sm bg-lavendar  ">
                <span>
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span>Change</span>
              </button>
              <img className="h-64 w-64 rounded-lg" src={profile} alt="" />
            </figure>

            <div className="flex flex-col gap-2 mt-3 text-darkteal ">
              <button onClick={()=>navigate("/dashboard")} className="flex items-center p-2 justify-between  ">
                <span>Dashboard</span>
                <span>
                  <i class="fa-solid fa-compass"></i>
                </span>
              </button>
              <button className="flex items-center p-2 justify-between  ">
                <span>Edit Profile</span>
                <span>
                  <i class="fa-solid fa-user"></i>
                </span>
              </button>
              <button className="flex items-center p-2 justify-between  ">
                <span>Preferences</span>
                <span>
                  <i class="fa-solid fa-toggle-on"></i>
                </span>
              </button>
              <button className="flex items-center p-2 justify-between  ">
                <span>Change Password</span>
                <span>
                  <i class="fa-solid fa-lock"></i>
                </span>
              </button>
              <button className="flex items-center p-2 justify-between  ">
                <span>Payment Methods</span>
                <span>
                  <i class="fa-solid fa-credit-card"></i>
                </span>
              </button>
              <button className="flex items-center p-2 justify-between  ">
                <span>Logout</span>
                <span>
                  <i class="fa-solid fa-right-from-bracket"></i>
                </span>
              </button>
              <button className="flex items-center p-2 justify-between  ">
                <span>Delete account</span>
                <span>
                  <i class="fa-solid fa-trash"></i>
                </span>
              </button>
            </div>
          </div>
        </aside>
    </>
  );
};

export default Usersidebar;
