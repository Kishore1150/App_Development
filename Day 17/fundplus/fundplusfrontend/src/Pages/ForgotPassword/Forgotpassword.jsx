import React, { useState } from "react";
import logo from "../../Assets/Images/logo.svg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { TbAlertHexagon } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineLeft } from "react-icons/ai";
import Services from "../../Service/Services";
import { useOtp, useVerifyEmail } from "../../States/UseStates";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const { verifyemail, updateverifyEmail } = useVerifyEmail();
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errormessage, setErrormessage] = useState(
    "Unable to signup,please try again!."
  );

  const { otp, updateOtp } = useOtp();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmail(true);
  };

  const handleReturn=()=>{
    navigate("/signin");
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoader(true);
    if (!email) {
      setIsEmail(false);
      setError(true);
      setLoader(false);
    } else {
      await Services.sendVerifyOtp(email)
        .then((res) => {
          setLoader(true);
          setTimeout(() => {
            updateOtp(res.data);
            updateverifyEmail(email);
            setSuccess(true);
            setLoader(false);
            navigate("/forgotpasswordotpverification");
          }, 6000);
        })
        .catch((err) => {
          setLoader(true);
          setTimeout(() => {
            setError(true);
            setLoader(false);
            setErrormessage(err.response.data);
          }, 6000);
        });
    }
  };

  return (
    <div>
      <main>
        <section className="max-w-full  font-productsansr  ">
          {error && (
            <>
              <div className="max-w-full z-[1] fixed w-full flex items-center justify-between p-3 gap-3 bg-lightred">
                <div className="flex  items-center gap-3">
                  <span>
                    <TbAlertHexagon className="text-red" />
                  </span>
                  <p className="text-red">Please recheck your email !</p>
                </div>
                <button className="text-xl" onClick={() => setError(false)}>
                  <AiOutlineClose className="text-red" />
                </button>
              </div>
            </>
          )}
          {success && (
            <>
              <div className="max-w-full w-full  z-[1] fixed  flex items-center justify-between p-3 gap-3 bg-lightgreen">
                <div className="flex  items-center gap-3">
                  <span>
                    <GoIssueClosed className="text-brightgreen" />
                  </span>
                  <p className="text-brightgreen">
                    Please check your email for verification!
                  </p>
                </div>
                <button className="text-xl" onClick={() => setSuccess(false)}>
                  <AiOutlineClose className="text-brightgreen" />
                </button>
              </div>
            </>
          )}
          <div className=" xl:w-[100%] z-[2] lg:bg-white lg:flex-col xl:flex xl:justify-between xl:h-screen  xl:bg-lightwhite lg:h-screen  lg:justify-between">
            <aside className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em]   xl:p-16 lg:p-8 lg:gap-10 ">
              <figure className="w-6 xl:mb-12 lg:mt-10">
                <img src={logo} alt="" />
              </figure>
              <div className="lg:mt-5 xl:mt-16  flex flex-col xl:gap-8 lg:gap-5">
                <div>
                  <h2 className="text-[#333333] lg:text-2xl  leading-[50px] xl:text-4xl">
                    Let's find your Fundplus account
                  </h2>
                </div>
              </div>
            </aside>
            <div className="  xl:rounded-tl-[5em] bg-white flex flex-col  xl:w-[55em] shadow-xl">
              <header className="">
                <p className="text-darkgray xl:text-end lg:text-start xl:p-12 lg:p-0 lg:px-8 tracking-wider">
                  Don't have an account?
                  <span
                    className="underline cursor-pointer hover:no-underline"
                    onClick={() => navigate("/signup")}>
                    Sign up
                  </span>
                </p>
              </header>
              <form onSubmit={handleSubmit}>
                <div className="xl:px-32 xl:h-[25em]   xl:py-12 px-32 lg:p-8">
                  <div className="flex flex-col gap-6  xl:w-[37rem]">
                    <h1 className="text-xl  tracking-wide text-darkgray">
                      Enter your email address
                    </h1>
                    <h1 className="text-md  tracking-wide text-darkgray">
                      We'll send you instructions to reset your password.
                    </h1>
                    <div className="flex flex-col gap-2">
                      <input
                        placeholder="Email Address"
                        className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen hover:bg-lightwhite  lg:w-[100%] border ${
                          isEmail ? "border-lightgray1" : "border-red"
                        } rounded-xl`}
                        type="email"
                        onChange={handleEmailChange}
                      />

                      {!isEmail && (
                        <div className="flex items-center gap-3 text-red">
                          <span>
                            <TbAlertHexagon />
                          </span>
                          <p className="text-sm">Please enter your email.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <footer className="lg:relative xl:px-32  xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px]  xl: border-lightgray1 xl:fixed">
                  <div className="flex xl:justify-between  lg:items-center xl:items-center lg:gap-5 lg:flex-col  ">
                    <div
                      onClick={handleReturn}
                      className="text-darkgray  flex  border-[1px] lg:min-w-[85vw]  border-lightgray1 p-3.5 px-12   hover:bg-[#f5f5f5] lg:justify-center rounded-xl font-bold items-center gap-5">
                      <span className="lg:hidden">
                        <AiOutlineLeft />
                      </span>
                      <button className="">Return to sign in </button>
                    </div>
                    <div className="">
                      {loader ? (
                        <button className="bg-[#a1a0a0] xl:w-[15em] lg:min-w-[85vw]  p-6 rounded-2xl shadow-md  text-white font-bold relative xl:left-6 ">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                          </div>
                        </button>
                      ) : (
                        <button className="bg-brown xl:w-[15em] lg:min-w-[85vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl shadow-md  text-white font-bold relative xl:left-6  ">
                          Request password reset
                        </button>
                      )}
                    </div>
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Forgotpassword;
