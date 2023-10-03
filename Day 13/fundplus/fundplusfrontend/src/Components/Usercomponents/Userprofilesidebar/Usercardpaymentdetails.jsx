import React, { useState } from "react";
import visa from '../../../Assets/Images/Footer/visa.svg';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Usercardpaymentdetails = () => {
  const [cardnumber, setCardnumber] = useState("");
  const [cardmonth, setCardmonth] = useState("");
  const [cardyear, setCardyear] = useState(0);
  const [cardcvv, setCardcvv] = useState(0);
  const [cardname, setCardname] = useState("");

  return (
    <>
      <main className="xl:h-[65rem] relative ">
        <section className="relative  dark:border-lightgray xl:top-[3rem] p-5  xl:left-[2em] xl:w-[50rem] rounded-lg xl:h-[54rem] flex flex-col gap-5 ">
          <div className="  flex justify-between items-center  rounded-t-lg  pb-3">
            <h1 className="font-bold  font-productsansr text-3xl  dark:text-white">
              Payment Details
            </h1>
          </div>
          <div className=" py-5 ">
            <h1 className="font-bold font-productsansr text-2xl mb-3 dark:text-white">
              Saved Card
            </h1>
            <div className="bg-lightteal xl:w-[24rem] rounded-2xl p-10 flex flex-col gap-3 text-white">
              <figure className="flex gap-5">
                <img width="50" src={visa} />
              </figure>
              <p className="text-2xl font-extrabold font-productsansr">
                {cardnumber}
              </p>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <p>Valid thru:</p>
                  <span>
                    {cardmonth}/{cardyear}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <p className="">CVV:</p>
                  <span className="mt-1.5">***</span>
                </div>
              </div>
              {/* <div className="">
                <p className=" text-xl">{Users.cardname}</p>
              </div> */}
            </div>
          </div>
          <form>
            <div className="xl:w-[45rem] p-10  border-[1px] dark:bg-darkgray1 dark:border-none border-lightgray1  flex  flex-col gap-5 bg-white rounded-xl  ">
              <div className="flex justify-between xl:w-[40rem]   border-lightgray1  ">
                <p className="font-bold font-productsansr dark:text-white  text-2xl">
                  Add Card
                </p>
                <figure className="flex gap-5">
                  <img width="50" src={visa} />
                </figure>
              </div>
              <div className="flex flex-col gap-2 ">
                <label className=" text-lightgray font-productsansr">
                  Card Number<span> *</span>
                </label>
                <input
                  className=" form-input rounded-lg xl:w-[40rem] border-2 dark:bg-bluegray dark:text-white border-lightgray1"
                  placeholder="XXXX XXXX XXXX XXXX"
                  type="text"
                  maxLength="16"
                  onChange={(e) => setCardnumber(e.target.value)}
                />
              </div>
              <div className="flex lg:flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <label className="text-lightgray font-productsansr">
                    Expiration Date <span> *</span>
                  </label>
                  <div className="flex xl:w-[10rem]">
                    <input
                      className="form-input  lg:w-[5em]  rounded-l-lg xl:w-[10rem]  dark:bg-bluegray dark:text-white border-2 border-lightgray1"
                      placeholder="Month"
                      maxLength="2"
                      type="text"
                      onChange={(e) => setCardmonth(e.target.value)}
                    />
                    <input
                      placeholder="Year"
                      className="form-input lg:w-[5em] rounded-r-lg xl:w-[10rem]  dark:bg-bluegray dark:text-white border-2 border-lightgray1"
                      maxLength="2"
                      type="text"
                      onChange={(e) => setCardyear(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="text-lightgray">
                    CVV / CVC <span>*</span>
                  </label>
                  <input
                    className="form-input xl:w-[15rem]  dark:bg-bluegray dark:text-white border-2 border-lightgray1  rounded-lg"
                    type="text"
                    minLength="3"
                    maxLength="3"
                    placeholder="XXX"
                    onChange={(e) => setCardcvv(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="font-productsansr text-lightgray font-medium">
                  Name on Card <span>*</span>
                </label>
                <input
                  className="form-input rounded-lg  dark:bg-bluegray dark:text-white border-2 border-lightgray1"
                  type="text"
                  placeholder="Enter card holder name"
                  onChange={(e) => setCardname(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center bg-lightteal text-white p-2 font-bold rounded-lg">
                <button>Add Card</button>
              </div>
            </div>
          </form>
        </section>
        <Toaster />
      </main>
    </>
  );
};

export default Usercardpaymentdetails;
