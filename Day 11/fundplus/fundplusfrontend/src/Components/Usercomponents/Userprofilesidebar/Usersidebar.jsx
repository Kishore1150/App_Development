import React from "react";
import profile from "../../../Assets/Images/Dashboard/h2.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../Redux/userSlice";

const Usersidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(logout());
    navigate("/home");
  };
  return (
    <>
      <aside className="xl:pl-24 xl:pb-12  h-full lg:w-full xl:w-fit ">
        <div className="flex lg:pl-12   pt-6 items-center gap-3 text-sm text-darkteal">
          <span>
            <i class="fa-solid fa-house-chimney"></i>
          </span>
          <span className="text-lightgray">
            <i class="fa-solid fa-angle-right"></i>
          </span>
          <p>Profile settings</p>
        </div>

        <div
          className=" xl:w-fit lg:p-5  h-full
          ">
          <figure className="xl:h-64 mt-5 relative xl:w-64">
            <button className="absolute flex items-center gap-1 right-0 p-1.5 text-darkgray text-sm bg-lavendar  ">
              <span>
                <i class="fa-solid fa-pen"></i>
              </span>
              <span>Change</span>
            </button>
            <img
              className="xl:h-64  xl:w-64 lg:w-full rounded-lg"
              src={profile}
              alt=""
            />
          </figure>

          <div className="flex flex-col gap-2 mt-3 text-darkteal ">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Dashboard</span>
              <span>
                <i class="fa-solid fa-compass"></i>
              </span>
            </button>
            <button
              onClick={() => navigate("/usereditprofile")}
              className="flex items-center bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Edit Profile</span>
              <span>
                <i class="fa-solid fa-user"></i>
              </span>
            </button>
            <button className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Preferences</span>
              <span>
                <i class="fa-solid fa-toggle-on"></i>
              </span>
            </button>
            <button
              onClick={() => navigate("/usereditpassword")}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Change Password</span>
              <span>
                <i class="fa-solid fa-lock"></i>
              </span>
            </button>
            <button
              onClick={() => navigate("/usercardpaymentdetails")}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Payment Methods</span>
              <span>
                <i class="fa-solid fa-credit-card"></i>
              </span>
            </button>
            <button
              onClick={handlelogout}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Logout</span>
              <span>
                <i class="fa-solid fa-right-from-bracket"></i>
              </span>
            </button>
            <button
              onClick={() => navigate("/userdeleteprofile")}
              className="flex items-center hover:bg-hoverteal rounded-lg p-2.5 justify-between  ">
              <span>Delete profile</span>
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
