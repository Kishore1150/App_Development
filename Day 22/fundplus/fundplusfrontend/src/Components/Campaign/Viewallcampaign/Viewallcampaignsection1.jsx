import React, { useEffect, useState } from "react";
import Services from "../../../Service/Services";

import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useShowCampaign, useUserShowCampagin } from "../../../States/UseStates";
export const Viewallcampaignsection1 = () => {
  const [users, setUsers] = useState([]);
  const { updateShowCampaign } = useShowCampaign();
  const { updateUserShowCampaign } = useUserShowCampagin();
  const navigate = useNavigate();

  const handleChange = async () => {
    await Services.getAllUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleChange();
  }, []);

  const handleCampaign = (campaigns,user) => {
    updateShowCampaign(campaigns);
    updateUserShowCampaign(user);
    navigate("/donatecampaign");
  };

  return (
    <>
      <main>
        <section className="xl:px-24 lg:px-5 pt-12 pb-12  border-b border-[#eeeeee] mt-20 ">
          <div className="flex flex-col gap-5 items-start">
            <h1 className="text-3xl font-productsansr font-bold text-darkteal">
              Campaigns
            </h1>

            <div className="w-full">
              <input
                placeholder="Type some words related to the campaign"
                className="w-full border  p-2.5 rounded-lg focus:border-brightgreen border-bordergray focus:outline-0"
                type="text"
                name="searchbar"
                id="searchbar"
              />
              <span></span>
            </div>
            <div className="flex lg:flex-col w-full xl:items-center gap-4">
              <div className="xl:w-[32em]">
                <input
                  placeholder="Address,eg,City,State,Country"
                  id="location"
                  name="location"
                  type="text"
                  className="w-full border  p-2.5 rounded-lg focus:border-brightgreen border-bordergray focus:outline-0"
                />
                <span></span>
              </div>
              <div className="xl:w-[25em]">
                <select className="w-full border  p-2.5 rounded-lg focus:border-brightgreen border-bordergray focus:outline-0">
                  <option value="">Topics</option>
                </select>
              </div>
              <div className="xl:w-[25em]">
                <select className="w-full border  p-2.5 rounded-lg focus:border-brightgreen border-bordergray focus:outline-0">
                  <option value="Category">Category</option>
                  <option value="Education">Education</option>
                  <option value="Environment">Environment</option>
                  <option value="Health">Health</option>
                  <option value="Animals">Animals</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>
              <div className="">
                <button className="bg-lightteal  lg:w-full font-bold text-white py-2.5  px-28 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-backgroundwhite pb-10">
          <div className="flex lg:pl-12  justify-between  px-28  py-5 items-center ">
            <div className="flex  items-center gap-1.5 text-sm text-darkteal">
              <span onClick={() => navigate("/home")}>
                <i class="fa-solid  fa-house-chimney"></i>
              </span>
              <span className="text-lightgray">
                <i class="fa-solid  fa-angle-right"></i>
              </span>
              <p>Campaigns</p>
            </div>
            <div className="flex  items-center gap-5">
              <div>
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <button className="text-darkteal text-sm hover:bg-hoverteal px-3 py-1.5 rounded-xl gap-2 flex items-center ">
                      <span>Date</span>
                      <span>
                        <i class="fa-solid fa-caret-down"></i>
                      </span>
                    </button>
                  </MenuHandler>
                  <MenuList className="border-none cursor-pointer text-darkteal   rounded-lg flex flex-col gap-5 p-5">
                    <p className="hover:outline-0 ">Name</p>
                    <p className="hover:outline-0 ">Title</p>
                    <p className="hover:outline-0 ">Date</p>
                    <p className="hover:outline-0 ">Views</p>
                    <p className="hover:outline-0 ">Supporters</p>
                  </MenuList>
                </Menu>
              </div>
              <div>
                <Menu placement="bottom-start ">
                  <MenuHandler>
                    <button className="text-darkteal text-sm hover:bg-hoverteal px-3 py-1.5 rounded-xl gap-2 flex items-center ">
                      <span>Descending</span>
                      <span>
                        <i class="fa-solid fa-caret-down"></i>
                      </span>
                    </button>
                  </MenuHandler>
                  <MenuList className="border-none text-sm cursor-pointer text-darkteal  w-32 rounded-lg flex flex-col gap-5 p-5">
                    <p className="hover:outline-0 ">Ascending</p>
                    <p className="hover:outline-0 ">Descending</p>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          <main>
            <section>
              <div className="grid xl:grid-cols-3  xl:gap-y-8 lg:gap-5 lg:px-5 items-center xl:px-24 justify-center">
                {users.map((user) => (
                  <>
                    {user.usercampaigns.map((campaign) => (
                      <div
                        onClick={() => handleCampaign(campaign, user)}
                        className="xl:w-[22em]  hover:transition-all relative hover:scale-[1.01]  xl:h-[36em] lg:pb-5 shadow-xl  rounded-t-xl rounded-br-xl  ">
                        <div className="flex flex-col gap-5 items-start">
                          <figure className="relative w-full">
                            <img
                              className="    w-full rounded-t-lg  xl:h-[18em] object-cover"
                              src={campaign?.campaignimage}
                              alt=""
                            />
                            {/* <div className="w-full rounded-t-lg z-1  xl:h-[18em] bg-[#373d3f]">

                            </div> */}
                          </figure>
                          <div className="px-6 py-2 xl:h-[12em] border-b-2 border-[#f2f2f2]   ">
                            <div className="flex flex-col gap-5">
                              <p className="text-xl font-extrabold font-productsansb  text-darkteal">
                                {campaign?.title}
                              </p>
                              <div
                                className="text-[#838f8c] overflow-hidden"
                                style={{
                                  maxHeight: "3em",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: campaign?.content,
                                }}
                              />
                            </div>
                          </div>
                          <div className="px-5  w-full flex items-center justify-between ">
                            <button className="text-[13px] gap-3 flex items-center text-white font-bold bg-lightteal px-3 py-1 max-w-[15em] rounded-lg">
                              <span>
                                <i class="fa-solid fa-leaf"></i>
                              </span>
                              <span className="flex gap-1 items-center">
                                <span>
                                  <i class="fa-solid text-sm fa-indian-rupee-sign"></i>
                                </span>
                                <span>300000.00</span>
                                <span className="text-sm">raised</span>
                              </span>
                            </button>
                            <button className="flex px-3 py-1 text-[12px] rounded-lg bg-[#fcf9f1] text-[#838f8c] bg- items-center gap-2">
                              <span>
                                <i class="fa-solid fa-comments"></i>
                              </span>
                              <span>100</span>
                            </button>
                            <figure className="h-8  w-8">
                              <img
                                className="rounded-full"
                                src={user.profileImage}
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="h-1 w-24 absolute bottom-0 rounded-bl-xl  bg-lightteal"></div>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </section>
          </main>
        </section>
      </main>
    </>
  );
};
