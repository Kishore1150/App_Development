import React, { useState } from "react";
import visa from "../../../Assets/Images/Footer/visa.svg";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Redux/userSlice";
import { login } from "../../../Redux/userSlice";
import Services from "../../../Service/Services";
import chip from "../../../Assets/Images/Card/chip.svg"
import { useDispatch } from "react-redux";
const Usercardpaymentdetails = () => {
  const [cardnumber, setCardnumber] = useState("");
  const [cardmonth, setCardmonth] = useState("");
    const [userId, setUserId] = useState(
      localStorage.getItem("userid") || null
    );
  const [cardyear, setCardyear] = useState(0);
  const [cardcvv, setCardcvv] = useState(0);
  const [cardname, setCardname] = useState("");
  const user = useSelector(selectUser);

  const cardColors=["bg-lightteal","bg-purple","bg-red"]
  const dispatch = useDispatch();



  const handleUpdateCardDetails = async (e) => {
    e.preventDefault();
    const updatedUserCardDetails = {
      cardNumber: cardnumber,
      cardMonth: cardmonth,
      cardYear: cardyear,
      cardName: cardname,
      cardCvv: cardcvv,
    };

    await Services.userUpdateUserCardDetails(
      updatedUserCardDetails,
      localStorage.getItem("userid")
    )
      .then((res) => {
        toast.success("Updated card details");
         if (userId) {
           Services.getUser(userId)
             .then((res) => {
               dispatch(login(res.data));
             })
             .catch((error) => {
               console.log(error);
             });
         }
      })
      .catch((err) => {
        toast.error("Unable to update card details");
      });
  };

  return (
    <>
      <main className="xl:h-full  relative ">
        <section className="relative  dark:border-lightgray xl:top-[3rem] p-5  xl:left-[2em] xl:w-[50rem] rounded-lg xl:h-full xl:mb-12 flex flex-col gap-5 ">
          <div className="  flex justify-between items-center  rounded-t-lg  pb-3">
            <h1 className="font-bold  font-productsansr text-3xl  dark:text-white">
              Payment Details
            </h1>
          </div>
          <div className="py-5 ">
            <h1 className="font-bold   text-2xl mb-3 dark:text-white">
              Saved card
            </h1>
            <div
              style={{ fontFamily: "sans-serif" }}
              className="grid xl:grid-cols-2 xl:gap-x-5  gap-y-2">
              {user?.usercarddetails?.map((usercards, index) => (
                <div
                  className={`bg-cardbg xl:w-[24rem] rounded-2xl p-8 flex flex-col gap-6 text-white`}>
                  <figure className="flex gap-5">
                    <img width="40" src={chip} />
                  </figure>
                  <p className="text-2xl flex gap-3 items-center font-extrabold font-productsansr">
                    <span>{usercards?.cardNumber.slice(0, 4)}</span>

                    <span>{usercards?.cardNumber.slice(4, 8)}</span>
                    <span>{usercards?.cardNumber.slice(8, 12)}</span>
                    <span>{usercards?.cardNumber.slice(12, 16)}</span>
                  </p>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <p>Valid thru:</p>
                      <span>
                        {usercards?.cardMonth}/{usercards?.cardYear}
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
              ))}
            </div>
          </div>
          <form onSubmit={handleUpdateCardDetails}>
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
                  required
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
                      required
                      type="text"
                      onChange={(e) => setCardmonth(e.target.value)}
                    />
                    <input
                      placeholder="Year"
                      className="form-input lg:w-[5em] rounded-r-lg xl:w-[10rem]  dark:bg-bluegray dark:text-white border-2 border-lightgray1"
                      maxLength="2"
                      type="text"
                      required
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
                    required
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
                  required
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
