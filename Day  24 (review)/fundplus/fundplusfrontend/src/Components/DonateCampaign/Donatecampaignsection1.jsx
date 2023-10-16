import React, { useEffect, useState } from "react";
import john from "../../Assets/Images/Donatecampaign/John.jpg";
import { useShowCampaign, useUserShowCampagin } from "../../States/UseStates";
import Services from "../../Service/Services";

const Donatecampaignsection1 = () => {
  const { showcampaign, updateShowCampaign } = useShowCampaign();
  const { usershowcampaign, updateUserShowCampaign } = useUserShowCampagin();

  const [userShowCampaign,setUserShowCampaign]=useState({});
  const [showCampaign,setShowCampaign]=useState({});





  return (
    <>
      <main>
        <section>
          <div className="xl:h-[20em] xl:mt-16 lg:mt-20 lg:p-2.5  grid place-content-center   ">
            <div className="flex flex-col items-center">
              <p className="xl:text-[2.5em] lg:text-lg xl:px-28 text-darkteal font-productsansr font-extrabold  text-center ">
                {showcampaign?.title}
              </p>
              <div className=" flex gap-2 items-center justify-center ">
                <figure>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={usershowcampaign?.profileImage}
                    alt=""
                  />
                </figure>
                <p className="font-semibold ">{usershowcampaign?.firstName}</p>
                <span>&#183;</span>
                <p className="text-sm text-lightgray">
                  {usershowcampaign?.location}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Donatecampaignsection1;
