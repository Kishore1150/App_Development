import React from "react";
import profile from "../../../Assets/Images/Dashboard/h2.jpg";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../../Redux/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Admindashboardsection = () => {
  const navigate = useNavigate();
  const users = useSelector(selectUser);
  return (
    <>
      <main className="">
        <aside className="h-screen lg:hidden overflow-y-scroll bg-white  fixed  pt-24 w-[16em] ">
          <div className=" ">
            <div className="flex gap-4 cursor-pointer border-b-2 border-lightwhite p-3 w-full ">
              {users?.profileImage ? (
                <figure className="w-fit  ">
                  <img
                    className="w-10 h-10 rounded-full "
                    src={users?.profileImage}
                    alt=""
                  />
                </figure>
              ) : (
                <figure className="w-fit  ">
                  <img
                    className="w-10 h-10 rounded-full "
                    src={profile}
                    alt=""
                  />
                </figure>
              )}
              <div>
                <p className="text-sm  font-bold text-teal">
                  {users.firstName} {users.lastName}
                </p>
                <p className="text-textgray text-sm">IN</p>
              </div>
            </div>
            <div className="flex  flex-col gap-2 cursor-pointer ">
              <div
                onClick={() => navigate("/dashboard")}
                className="flex rounded-md bg-hoverteal text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">My Campaigns</p>
                <span>
                  <i class="fa-solid fa-folder"></i>
                </span>
              </div>
              <div className="flex rounded-md p-3 hover:duration-300 hover:bg-hoverteal hover:text-hovergray text-teal items-center justify-between ">
                <p className="font-medium font-productsansr">Users list</p>
                <span>
                  <i class="fa-solid fa-box"></i>
                </span>
              </div>

              <div
                className="flex   rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">
                 Users Campaign Donated
                </p>
                <span>
                  <i class="fa-solid fa-square-check"></i>
                </span>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Admin Bookmarks</p>
                <span>
                  <i class="fa-solid fa-bookmark"></i>
                </span>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal  items-center justify-between p-3">
                <p className="font-medium font-productsansr">Users campaign approval</p>
                <span className="">
                  <i class="fa-solid fa-user-group"></i>{" "}
                </span>
              </div>
              <div
                onClick={() => navigate("/userdonations")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Donors list</p>
                <span>
                  <i class="fa-solid fa-leaf"></i>
                </span>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Users Transactions</p>
                <span>
                  <i class="fa-solid fa-handshake"></i>
                </span>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Users Blood Donated</p>
                <span>
                  <i class="fa-solid fa-droplet"></i>{" "}
                </span>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">
                  Topics following
                </p>
                <span>
                  <i class="fa-solid fa-hashtag"></i>
                </span>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Withdrawals</p>
                <span>
                  <i class="fa-solid fa-rotate-left"></i>
                </span>
              </div>
              {/* <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">My Campaigns</p>
                <span>
                  <i class="fa-solid fa-folder"></i>
                </span>
              </div> */}
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Receipts</p>
                <span>
                  <i class="fa-solid fa-receipt"></i>
                </span>
              </div>
              <div
                onClick={() => navigate("/admineditprofile")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Edit profile</p>
                <span>
                  <i class="fa-solid fa-gear"></i>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Admindashboardsection;
