import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import profile from "../../Assets/Images/Dashboard/h2.jpg";
import logo from "../../Assets/Images/logo.svg";

import { useUser } from "../../States/UseStates";
import { Drawer, Menu, MenuHandler, MenuList } from "@material-tailwind/react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { logout, selectUser } from "../../Redux/userSlice";
import { TbAlertHexagon } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import Services from "../../Service/Services";
import { login } from "../../Redux/userSlice";

export const Navbar = () => {
  const navigate = useNavigate();
  const users = useSelector(selectUser);
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userid") || null);
 const isAdmin = localStorage.getItem("role") === "ADMIN";
  const dispatch = useDispatch();
  const { user, updateUser } = useUser();

  const [errorMessage, setErrorMessage] = useState("");

  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    dispatch(logout());
    navigate("/home");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userid");
    if (userId) {
      Services.getUser(userId)
        .then((res) => {
          updateUser(res.data);
          dispatch(login(res.data));
        })
        .catch((error) => {
          console.log(error);
          // setError(true);
          // setErrorMessage("Failed to retrieve user data");
        });
    }
  }, [userId]);
  const theme = {
    drawer: {
      defaultProps: {
        size: 300,
        overlay: true,
        placement: "left",
        overlayProps: undefined,
        className: "",
        dismiss: undefined,
        onClose: undefined,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      },
      styles: {
        base: {
          drawer: {
            position: "fixed",
            zIndex: "z-[9999]",
            pointerEvents: "pointer-events-auto",
            backgroundColor: "bg-white",
            boxSizing: "box-border",
            width: "w-full",
            boxShadow: "shadow-2xl shadow-blue-gray-900/10",
          },
          overlay: {
            position: "absolute",
            inset: "inset-0",
            width: "w-full",
            height: "h-full",
            pointerEvents: "pointer-events-auto",
            zIndex: "z-[9995]",
            backgroundColor: "bg-black",
            backdropBlur: "backdrop-blur-sm",
          },
        },
      },
    },
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={closeDrawer}
        theme={theme}
        className="p-4 xl:hidden  w-72   ">
        <aside className="h-screen xl:hidden overflow-y-scroll bg-white w-[17em] fixed  ">
          <div className=" ">
            <div className="flex gap-4 cursor-pointer border-b-2 border-lightwhite p-3 w-full ">
              <figure className="w-fit  ">
                <img className="w-10 rounded-full " src={profile} alt="" />
              </figure>
              <div>
                <p className="text-sm  font-bold text-teal">Kishore Kumar</p>
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
              <div
                onClick={() => navigate("/about")}
                className="flex rounded-md p-3 hover:duration-300 hover:bg-hoverteal hover:text-hovergray text-teal items-center justify-between ">
                <p className="font-medium font-productsansr">About</p>
                <span>
                  <i class="fa-solid fa-box"></i>
                </span>
              </div>

              <div
                onClick={() => navigate("/usercampaigndonated")}
                className="flex   rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">
                  Campaign Donated
                </p>
                <span>
                  <i class="fa-solid fa-square-check"></i>
                </span>
              </div>
              <div
                onClick={() => navigate("/signin")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Sign in</p>
                <span>
                  <i class="fa-solid fa-bookmark"></i>
                </span>
              </div>
              <div
                onClick={() => navigate("/signup")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal  items-center justify-between p-3">
                <p className="font-medium font-productsansr">Sign up</p>
                <span className="">
                  <i class="fa-solid fa-user-group"></i>{" "}
                </span>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Donations</p>
                <span>
                  <i class="fa-solid fa-leaf"></i>
                </span>
              </div>
              <div
                onClick={() => navigate("/contact")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Contact</p>
                <span>
                  <i class="fa-solid fa-handshake"></i>
                </span>
              </div>
              <div
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">Blood Donated</p>
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
                onClick={() => navigate("/faqs")}
                className="flex rounded-md  hover:duration-300 hover:bg-hoverteal
              hover:text-hovergray text-teal items-center justify-between p-3">
                <p className="font-medium font-productsansr">FAQs</p>
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
                onClick={() => navigate("/usereditprofile")}
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
      </Drawer>

      <header
        className="z-10
          fixed top-0  bg-white
        w-full">
        {/* {error && (
        <>
          <div className="  z-20  w-screen flex items-center justify-between p-3 gap-3 bg-lightred">
            <div className="flex  items-center gap-3">
              <span>
                <TbAlertHexagon className="text-red" />
              </span>
              <p className="text-red">{errorMessage}</p>
            </div>
            <button className="text-xl" onClick={() => setError(false)}>
              <AiOutlineClose className="text-red" />
            </button>
          </div>
        </>
      )} */}
        <nav className=" px-4  h-[5em] text-teal bg-white flex items-center justify-between">
          <div className="flex gap-10 items-center">
            <span className="text-xl xl:hidden" onClick={openDrawer}>
              <i class="fa-solid fa-bars-staggered"></i>{" "}
            </span>
            <figure
              onClick={() => navigate("/home")}
              className="flex gap-2 items-center cursor-pointer">
              <img width={25} src={logo} alt="" />
              <span className="text-darkteal2  font-bold font-productsansb text-2xl">
                Fundplus
              </span>
            </figure>
            <button className="flex lg:hidden items-center text-darkteal border-[1px] px-5 py-1.5 rounded-full border-lightgray1 gap-2">
              <span>
                <i class="fa-solid fa-globe"></i>
              </span>
              <span>Global</span>
            </button>
          </div>
          <div className="flex lg:hidden items-center gap-5">
            <button className="flex gap-2 hover:bg-hoverteal px-3 py-1.5 items-center rounded-xl  text-darkteal ">
              <i class="fa-solid text-sm fa-magnifying-glass font-bold"></i>
              <span className="">Search</span>
            </button>
            <button
              onClick={() => navigate("/about")}
              className=" hover:bg-hoverteal px-3 py-1.5 flex gap-3 rounded-xl  text-darkteal ">
              <span className="">About</span>
            </button>
            <button className="flex hover:bg-hoverteal px-3 py-1.5 gap-3 rounded-xl  text-darkteal ">
              <span className="">Campaigns</span>
            </button>
            <Menu placement="bottom-start">
              <MenuHandler>
                <button className="text-darkteal hover:bg-hoverteal px-3 py-1.5 rounded-xl gap-2 flex items-center ">
                  <span>More</span>
                  <span>
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </button>
              </MenuHandler>
              <MenuList className="border-none cursor-pointer text-darkteal  w-32 rounded-lg flex flex-col gap-5 p-5">
                <p className="hover:outline-0 ">Supporters list</p>
                <p className="hover:outline-0 ">Donors list</p>
                <p
                  onClick={() => navigate("/contact")}
                  className="hover:outline-0 ">
                  Contact
                </p>
                <p
                  onClick={() => navigate("/faqs")}
                  className="hover:outline-0 ">
                  FAQs
                </p>
              </MenuList>
            </Menu>
          </div>
          <div className="flex lg:hidden items-center gap-5">
            {users ? (
              <>
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <button className="text-darkteal outline-0 hover:bg-hoverteal rounded-lg p-1 gap-3 flex items-center ">
                      <span>
                        <i class="fa-solid fa-caret-down"></i>
                      </span>
                      <span>{users.firstName}</span>
                      {users?.profileImage ? (
                        <figure className="w-fit  ">
                          <img
                            className="w-8 h-8 rounded-full "
                            src={users?.profileImage}
                            alt=""
                          />
                        </figure>
                      ) : (
                        <figure className="w-fit  ">
                          <img
                            className="w-8 h-8 rounded-full "
                            src={profile}
                            alt=""
                          />
                        </figure>
                      )}
                    </button>
                  </MenuHandler>
                  {isAdmin ? (
                    <MenuList className="border-none cursor-pointer text-teal w-[18em]  rounded-lg flex flex-col gap-1 bg-white items-start shadow-lg   ">
                      <p
                        onClick={() => navigate("/admindashboard")}
                        className="hover:outline-0 hover:bg-hoverteal  text-[15px] flex items-center gap-3 rounded-md px-2 py-2 w-full ">
                        <i class="fa-solid fa-cloud"></i>
                        <span className=" "> Dashboard</span>
                      </p>
                      <p
                        onClick={() => navigate("/admincreatecampaign")}
                        className="hover:outline-0 hover:bg-hoverteal text-[15px] rounded-md px-2 py-2 w-full  flex items-center gap-3 ">
                        <i class="fa-solid fa-play"></i>
                        <span className="">Start a campaign</span>
                      </p>
                      <p
                        onClick={() => navigate("/admindashboard")}
                        className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3 ">
                        <i class="fa-solid fa-folder"></i>
                        <span className="">My Campaigns</span>
                      </p>
                      <p
                        onClick={() => navigate("/usercampaigndonated")}
                        className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-square-check"></i>
                        <span className="">Users Campaign approval</span>
                      </p>
                      {/* <p className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-droplet"></i>
                        <span className="">Blood Donated</span>
                      </p> */}
                      <p className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-bookmark"></i>
                        <span className="">Bookmarks</span>
                      </p>
                      <p
                        onClick={() => navigate("/admineditprofile")}
                        className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-user"></i>
                        <span className="">Profile Settings</span>
                      </p>
                      <p
                        onClick={handleLogout}
                        className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span className="">Logout</span>
                      </p>
                    </MenuList>
                  ) : (
                    <MenuList className="border-none cursor-pointer text-teal w-[15em]  rounded-lg flex flex-col gap-1 bg-white items-start shadow-lg   ">
                      <p
                        onClick={() => navigate("/dashboard")}
                        className="hover:outline-0 hover:bg-hoverteal  text-[15px] flex items-center gap-3 rounded-md px-2 py-2 w-full ">
                        <i class="fa-solid fa-cloud"></i>
                        <span className=" ">Dashboard</span>
                      </p>
                      <p
                        onClick={() => navigate("/createcampaign")}
                        className="hover:outline-0 hover:bg-hoverteal text-[15px] rounded-md px-2 py-2 w-full  flex items-center gap-3 ">
                        <i class="fa-solid fa-play"></i>
                        <span className="">Start a campaign</span>
                      </p>
                      <p
                        onClick={() => navigate("/dashboard")}
                        className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3 ">
                        <i class="fa-solid fa-folder"></i>
                        <span className="">My Campaigns</span>
                      </p>
                      <p
                        onClick={() => navigate("/usercampaigndonated")}
                        className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-square-check"></i>
                        <span className="">Campaign Donated</span>
                      </p>
                      <p className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-droplet"></i>
                        <span className="">Blood Donated</span>
                      </p>
                      <p className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-bookmark"></i>
                        <span className="">Bookmarks</span>
                      </p>
                      <p
                        onClick={() => navigate("/usereditprofile")}
                        className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-user"></i>
                        <span className="">Profile Settings</span>
                      </p>
                      <p
                        onClick={handleLogout}
                        className="hover:outline-0 hover:bg-hoverteal rounded-md px-2 py-2 w-full text-[15px]  flex items-center gap-3  ">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span className="">Logout</span>
                      </p>
                    </MenuList>
                  )}
                </Menu>
              </>
            ) : (
              <>
                <button className="flex hover:bg-hoverteal px-3 py-1.5 gap-3 rounded-xl  text-darkteal ">
                  <span className="">Start a Campaign</span>
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="hover:bg-hoverteal px-3 py-1.5 rounded-xl ">
                  <span className="text-darkteal   ">Sign Up</span>
                </button>
                <button
                  onClick={() => navigate("/signin")}
                  className="border-[1px] border-lightgray px-5 rounded-full py-1">
                  <span className="      text-darkgray ">Sign In</span>
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
