import React, { useEffect, useState } from "react";
import empty from "../../../Assets/Images/Dashboard/empty.svg";
import Services from "../../../Service/Services";
import { useNavigate } from "react-router-dom";
import { useAdminCampaign } from "../../../States/UseStates";

export const Admincampaignsection = () => {
  const [user, setUser] = useState(true);
  const { admincampaign, updateCampaign } = useAdminCampaign();
  const navigate = useNavigate();
  const [showpopup, setShowpopup] = useState(false);

  const [Campaigns, setCampaigns] = useState([]);

  const handleEditCampaign = (campaigns) => {
    updateCampaign(campaigns);
    navigate("/admineditcampaign");
  };
  const handleShowPopup = () => {
    setShowpopup(!false);
  };
  const handleDeleteCampaign = async(id) => {
    await Services.adminDeleteCampaign(id).then((res)=>{
      console.log(res.data);
      setShowpopup(false);
      handleChange();
    })
    .catch((err)=>{
      console.log(err);
      setShowpopup(false);
      handleChange();

    })




  };

  const handleChange = async () => {
    await Services.admingetAllCampaigns()
      .then((res) => {
        setCampaigns(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div>
      <main>
        {user ? (
          <section className="grid bg-backgroundwhite ">
            <div className="xl:w-[64em] relative xl:top-[7em] lg:top-[5em]  p-8 flex flex-col gap-12  items-start xl:left-[18em]  bg-white shadow-lg rounded-xl ">
              <p className="w-full  font-bold  text-2xl">My Campaigns</p>
              <div className="w-full font-bold text-darkteal flex  border-b-[2px] py-3 border-gray ">
                <div className="flex items-start ">
                  <tr>Campaign</tr>
                </div>
                <div className="  w-full gap-8 flex items-center justify-end">
                  <tr className="mr-5">Amount</tr>
                  <tr>Status</tr>
                  <tr>action</tr>
                </div>
              </div>
              <div className="flex w-full flex-col lg:gap-20 gap-5">
                {Campaigns?.map((campaigns, index) => (
                  <>
                    <div className="flex lg:flex-col xl:w-full  xl:pb-12 items-center  justify-between ">
                      <div className="flex lg:flex-col xl:items-center gap-3">
                        <figure>
                          <img
                            className="xl:w-20 lg:w-full rounded-md"
                            src={campaigns.campaignimage}
                            alt=""
                          />
                        </figure>
                        <div className="text-darkteal  gap-2 flex flex-col">
                          <div>
                            <p className="font-bold"> {campaigns.title}</p>
                          </div>
                          <div className="flex gap-3 items-center">
                            <p className="flex gap-2 text-textgray">
                              <span>
                                <i class="fa-solid fa-leaf"></i>
                              </span>
                              <span>₹{campaigns ? "0" : ""} raised</span>
                            </p>
                            <span className="text-textgray">&#183;</span>
                            <p className="flex gap-2 text-textgray">
                              <span>
                                <i class="fa-solid fa-comments"></i>
                              </span>
                              <span>{campaigns ? "0" : ""} comments</span>
                            </p>
                            <span className="text-textgray">&#183;</span>
                            <p className="flex gap-2 text-textgray">
                              <span>
                                <i class="fa-solid fa-tag"></i>
                              </span>

                              <span>
                                {/* <div className=''
                                  dangerouslySetInnerHTML={{
                                    __html: campaigns.content,
                                  }}
                                /> */}
                                {campaigns.category}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex  lg:hidden   items-center gap-16 text-darkteal">
                        <div>
                          <span>₹0</span>
                        </div>
                        <div className="h-3 w-3   rounded-full bg-darkteal"></div>
                        <div className="flex items-center gap-5">
                          <span
                            onClick={() => handleEditCampaign(campaigns)}
                            className="">
                            <i class="fa-solid fa-pen"></i>
                          </span>
                          <span className="text-red" onClick={handleShowPopup}>
                            <i class="fa-solid fa-trash-can"></i>
                          </span>
                        </div>
                      </div>
                      {showpopup ? (
                        <div
                          class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                          id="modal-id">
                          <div class="absolute bg-black opacity-70 inset-0 z-0"></div>
                          <div class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                            <div class="">
                              <div class="text-center p-5 flex-auto justify-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-16 h-16 flex items-center text-red-500 mx-auto"
                                  viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <h3 class="text-xl font-bold py-4 ">
                                  Are you sure?
                                </h3>
                                <p class="text-sm text-gray-500 px-8">
                                  Do you really want to delete this campaign?
                                  This process cannot be undone
                                </p>
                              </div>
                              <div class="p-3  mt-2 text-center space-x-4 md:block">
                                <button
                                  onClick={() => setShowpopup(false)}
                                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 ">
                                  Cancel
                                </button>

                                <button
                                  class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white bg-red rounded-full hover:shadow-lg hover:bg-red-600"
                                  onClick={() =>
                                    handleDeleteCampaign(campaigns.id)
                                  }>
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="grid bg-backgroundwhite place-content-center h-screen">
            <div className="xl:w-[60em]  p-8 flex flex-col items-center xl:ml-52 mt-20  bg-white shadow-xl rounded-xl ">
              <p className="w-full  font-bold  px-6 text-2xl">My Campaigns</p>
              <figure>
                <img width={398.36} height={398.36} src={empty} alt="" />
              </figure>
              <p className="font-bold font-productsansb text-2xl text-teal">
                No campaigns found.
              </p>
              <p className="text-textgray text-sm">
                We're sorry, but no campaigns have been started yet.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
