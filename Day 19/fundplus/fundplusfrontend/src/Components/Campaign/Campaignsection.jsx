import React,{useEffect, useState} from 'react'
import empty from "../../Assets/Images/Dashboard/empty.svg";
// import Campaigns from "../../Datas/Campaigns";
import Services from '../../Service/Services';


export const Campaignsection = () => {
  const [user, setUser] = useState(true);

  const [Campaigns,setCampaigns]=useState([]);


  useEffect (()=>{
    const handleChange=async()=>{
      await Services.getUser(localStorage.getItem("userid")).then((res)=>{
        // console.log(res.data.usercampaigns);
        setCampaigns(res.data.usercampaigns);

      }).catch((err)=>{
        console.log(err);
      })
        }

     handleChange();
  },[])

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
                      <div className="flex  lg:hidden   items-center gap-20 text-darkteal">
                        <div>
                          <span>₹0</span>
                        </div>
                        <div className="h-3 w-3   rounded-full bg-red"></div>
                        <div>
                          <span>
                            <i class="fa-solid fa-pen"></i>
                          </span>
                        </div>
                      </div>
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
        ;
      </main>
    </div>
  );
}



