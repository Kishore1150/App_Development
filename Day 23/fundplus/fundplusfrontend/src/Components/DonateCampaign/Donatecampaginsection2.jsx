import React, { useState } from "react";
import { useShowCampaign } from "../../States/UseStates";
import { useUserShowCampagin } from "../../States/UseStates";
import john from "../../Assets/Images/Donatecampaign/John.jpg";
import avatar from "../../Assets/Images/User/avatar.webp";

const Donatecampaginsection2 = () => {
  const { showcampaign, updateShowCampaign } = useShowCampaign();
  const { usershowcampaign, updateUserShowCampaign } = useUserShowCampagin();
  const isoTimestamp = showcampaign.createdAt;
  const dateObject = new Date(isoTimestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  const time = dateObject.toLocaleTimeString("en-US");

  const finalOutput = `${formattedDate} ${time}`;


  function timeAgo(timestamp) {
    const dateObject = new Date(timestamp);
    const currentDate = new Date();
    const timeDifference = currentDate - dateObject;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} ${years === 1 ? "year" : "years"} ago`;
    } else if (weeks > 0) {
      return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      return "Just now";
    }
  }

  const Timestamp = showcampaign.createdAt;
  const formatteddate = timeAgo(Timestamp);


  return (
    <>
      <main className="">
        <section className="xl:pl-28 lg:p-4 xl:pb-12 items-start lg:flex-col  flex gap-10">
          {/* left div */}
          <div className="flex flex-col gap-3 xl:w-[42em] items-center">
            <div className="w-full border-b-2 px-5 py-2 h-fit  border-[#fbf7ed]">
              <div className="flex text-[15px] items-center  justify-between">
                <div className=" flex gap-12 items-center text-darkteal">
                  <button>Story</button>
                  <button>Updates</button>
                  <button>Comments</button>
                </div>
                <div>
                  <span>
                    <i class="fa-regular text-darkteal fa-bookmark"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col xl:pb-24    gap-3">
                <div className="flex flex-col gap-3">
                  <figure>
                    <img
                      className="rounded-lg"
                      src={showcampaign.campaignimage}
                      alt=""
                    />
                  </figure>
                  <div className="flex justify-between">
                    <div className="text-[#838f8c] flex items-center gap-2">
                      <span>
                        <i class="fa-solid fa-location-pin"></i>
                      </span>
                      <span>{showcampaign.place}</span>
                    </div>
                    <div className="text-[#838f8c] flex items-center gap-2">
                      <span>
                        <i class="fa-solid fa-eye"></i>
                      </span>
                      <span>50 view</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="text-darkteal "
                    dangerouslySetInnerHTML={{
                      __html: showcampaign?.content,
                    }}
                  />
                </div>
                <div>
                  <button className="text-[#838f8c] py-5">Report Issue</button>
                </div>
                <div className="flex lg:flex-col lg:gap-5 xl:items-center xl:justify-between">
                  <div className="flex items-center gap-3">
                    <button className="flex font-bold px-3 py-1 text-[12px] rounded-lg bg-[#fcf9f1] text-[#838f8c] bg- items-center gap-2">
                      <span>Environment</span>
                    </button>
                    <button className="flex font-bold px-3 py-1 text-[12px] rounded-lg bg-[#fcf9f1] text-[#838f8c] bg- items-center gap-2">
                      <span>Health</span>
                    </button>
                    <button className="flex font-bold px-3 py-1 text-[12px] rounded-lg bg-[#fcf9f1] text-[#838f8c] bg- items-center gap-2">
                      <span>Animals</span>
                    </button>
                    <button className="flex font-bold px-3 py-1 text-[12px] rounded-lg bg-[#fcf9f1] text-[#838f8c] bg- items-center gap-2">
                      <span>Education</span>
                    </button>
                  </div>
                  <div>
                    <span className="font-bold text-sm text-darkteal">
                      {finalOutput}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:pb-10 xl:pb-12 gap-3">
                <div className="font-bold  border-b border-[#eeeeee] text-darkteal gap-1.5 text-lg flex items-center">
                  <span>3</span>
                  <span>Donors</span>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <figure>
                      <img className="h-10 w-10" src={avatar} alt="" />
                    </figure>
                    <div className="flex flex-col">
                      <span className="font-bold  text-darkteal">Kishore</span>
                      <span className="text-sm text-[#838f8c]">
                        From India Country, donated ₹5000.00 via Debit Donation
                        2 days ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img className="h-10 w-10" src={avatar} alt="" />
                    </figure>
                    <div className="flex flex-col">
                      <span className="font-bold  text-darkteal">Fayis</span>
                      <span className="text-sm text-[#838f8c]">
                        From India Country, donated ₹2500.00 via Paypal Donation
                        4 days ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <figure>
                      <img className="h-10 w-10" src={avatar} alt="" />
                    </figure>
                    <div className="flex flex-col">
                      <span className="font-bold  text-darkteal">Lokith</span>
                      <span className="text-sm text-[#838f8c]">
                        From India Country, donated ₹10000.00 via Debit Donation
                        1 day ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-20">
                <div className="flex p-3 items-center gap-4  bg-[#f4fbf9] rounded-lg">
                  <figure>
                    <img
                      className="h-10 w-10 rounded-full "
                      src={usershowcampaign.profileImage}
                      alt=""
                    />
                  </figure>
                  <div className="flex flex-col">
                    <span className="font-bold text-darkteal">
                      {usershowcampaign.firstName}
                    </span>
                    <span className="text-sm text-[#838f8c]">
                      Started this campaign on {formattedDate}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:pb-10 xl:pb-12 gap-3">
                <div className="font-bold  border-b border-[#eeeeee] text-darkteal gap-1.5 text-lg flex items-center">
                  <span>2</span>
                  <span>Comment</span>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3.5">
                    <figure>
                      <img className="h-10 w-10" src={avatar} alt="" />
                    </figure>
                    <div className="flex flex-col  gap-1">
                      <div className="flex gap-3 items-center">
                        <span className="font-bold text-sm text-darkteal">
                          Kishore
                        </span>
                        <span className="text-[#838f8c] text-sm ">
                          {formatteddate}
                        </span>
                        <span className="text-[#838f8c] text-sm">&middot;</span>
                        <span className="text-sm text-[#838f8c] ">0 likes</span>
                      </div>
                      <span className="text-sm">test msg</span>
                      <span className="flex text-[#838f8c] gap-1 items-center text-sm">
                        <span>
                          <i class="fa-solid fa-thumbs-up"></i>
                        </span>
                        <span>Like</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <figure>
                      <img className="h-10 w-10" src={avatar} alt="" />
                    </figure>
                    <div className="flex flex-col  gap-1">
                      <div className="flex gap-3 items-center">
                        <span className="font-bold text-sm text-darkteal">
                          Lokith
                        </span>
                        <span className="text-[#838f8c] text-sm ">
                          {formatteddate}
                        </span>
                        <span className="text-[#838f8c] text-sm">&middot;</span>
                        <span className="text-sm text-[#838f8c] ">0 likes</span>
                      </div>
                      <span className="text-sm">Donate this campaign 🙏</span>
                      <span className="flex text-[#838f8c] gap-1 items-center text-sm">
                        <span>
                          <i class="fa-solid fa-thumbs-up"></i>
                        </span>
                        <span>Like</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right div */}

          <div className="flex flex-col  right-section   xl:w-[25em] gap-4 ">
            <div className="text-3xl text-darkteal gap-3 flex items-center font-bold  ">
              <span>
                <i class="fa-solid fa-leaf"></i>
              </span>
              <span className="flex items-center">
                <span>
                  <i class="fa-solid text-2xl fa-indian-rupee-sign"></i>
                </span>

                <span>1000.00</span>
              </span>
              <span>Raised</span>
            </div>
            <div className="h-3 w-full bg-[#fcf9f1] rounded-lg">
              <div className="h-3 w-12 bg-lightteal rounded-lg"></div>
            </div>
            <div className="flex items-center border-b border-[#eeeeee] pb-2  text-[#838f8c]  font-bold gap-2 text-sm  justify-center">
              <span className="flex  items-center text-sm">
                <span>
                  <i class="fa-solid text-[12px] fa-indian-rupee-sign"></i>
                </span>
                <span>{showcampaign.goalamount - 1000}</span>
              </span>
              <span>needed to reach</span>
              <span className="flex  items-center text-sm">
                <span>
                  <i class="fa-solid text-[12px] fa-indian-rupee-sign"></i>
                </span>
                <span>{showcampaign.goalamount}</span>
              </span>
            </div>
            <div className="bg-[#fffae6]  text-darkteal px-5 py-2 rounded-xl">
              <span className="font-bold">Notice:</span>
              <span>
                Your support fuels our campaign. Thank you for contributing.
                Stay tuned for campaign updates and impact stories!
              </span>
            </div>
            <div>
              <p className="text-darkteal">
                Within an hour, this campaign could have thousands more
                supporters if everyone chipped in the price of a coffee. Can you
                help reach this campaign’s goal?
              </p>
            </div>
            <div>
              <button className="text-[#838f8c]  py-2 text-sm">
                Report Issue
              </button>
            </div>
            <div className="lg:flex lg:items-center">
              <span className="bg-[#fcf9f1]  p-3.5 rounded-l-lg">
                <i class="fa-solid text-[#838f8c] fa-indian-rupee-sign"></i>
              </span>
              <input
                type="text"
                className="border relative focus:outline-0 focus:border-lightteal right-1.5 lg:w-full xl:w-[8em] p-2.5 rounded-lg border-[#eeeeee]"
                name="minimumgoal"
                id="minimumgoal"
                value={showcampaign.minimumgoal}
              />
            </div>
            <div className="flex flex-wrap  items-center gap-2    w-[20em]">
              <button className="flex text-white bg-lightteal px-4 py-2 items-center font-bold rounded-lg">
                <span>
                  <i class="fa-solid text-sm  fa-indian-rupee-sign"></i>
                </span>
                <span>100.00</span>
              </button>
              <button className="flex w-fit  text-[#838f8c] bg-[#fcf9f1] px-4 py-2 items-center font-bold rounded-lg">
                <span>
                  <i class="fa-solid text-sm  fa-indian-rupee-sign"></i>
                </span>
                <span>200.00</span>
              </button>
              <button className="flex  w-fit text-[#838f8c] bg-[#fcf9f1] px-4 py-2 items-center font-bold rounded-lg">
                <span>
                  <i class="fa-solid text-sm  fa-indian-rupee-sign"></i>
                </span>
                <span>500.00</span>
              </button>
              <button className="flex w-fit  text-[#838f8c] bg-[#fcf9f1] px-4 py-2 items-center font-bold rounded-lg">
                <span>
                  <i class="fa-solid text-sm  fa-indian-rupee-sign"></i>
                </span>
                <span>2000.00</span>
              </button>
              <button className="flex w-fit text-[#838f8c] bg-[#fcf9f1] px-4 py-2 items-center font-bold rounded-lg">
                <span>Custom</span>
              </button>
            </div>
            <div>
              <button className="bg-lightteal w-full text-white px-5 py-2 rounded-lg font-bold">
                Contribute
              </button>
            </div>
            <div className="flex flex-col items-start gap-4">
              <button className="flex text-2xl gap-1 text-darkteal font-bold items-center bg-[#f4fbf9] w-full px-5 pt-5 pb-9 rounded-lg ">
                <span>
                  <i class="fa-solid  text-lg fa-indian-rupee-sign"></i>
                </span>
                <span>100.00</span>
              </button>
              <button className="flex text-2xl gap-1 text-darkteal font-bold items-center bg-[#f4fbf9] w-full px-5 pt-5 pb-9 rounded-lg ">
                <span>
                  <i class="fa-solid  text-lg fa-indian-rupee-sign"></i>
                </span>
                <span>200.00</span>
              </button>
              <button className="flex text-2xl gap-1 text-darkteal font-bold items-center bg-[#f4fbf9] w-full px-5 pt-5 pb-9 rounded-lg ">
                <span>
                  <i class="fa-solid  text-lg fa-indian-rupee-sign"></i>
                </span>
                <span>500.00</span>
              </button>
              <button className="flex text-2xl gap-1 text-darkteal font-bold items-center bg-[#f4fbf9] w-full px-5 pt-5 pb-9 rounded-lg ">
                <span>
                  <i class="fa-solid  text-lg fa-indian-rupee-sign"></i>
                </span>
                <span>2000.00</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Donatecampaginsection2;
