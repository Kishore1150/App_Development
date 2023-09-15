import React, { useState } from "react";
import logo from "../Assets/images/logo.svg";
import "../font.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { TbInfoHexagonFilled } from "react-icons/tb";
import {AiOutlineLeft} from "react-icons/ai"

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setIsEmail(false);
    }
    if (email) {
      toast.success("Request sent successfully");
    } else {
      toast.error("unable to send request");
    }
  };

  return (
    <div>
      <main>
        <section className="max-w-full font-productsansr  ">
          <div className="xl:w-[100%] lg:bg-white lg:flex-col xl:flex xl:justify-between xl:h-screen xl: bg-lightwhite lg:justify-between">
            <aside className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em] lg:h-[15em] xl:p-16 lg:p-8 lg:gap-10 ">
              <figure className="w-6 xl:mb-12">
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
            <div className=" rounded-tl-[5em] bg-white  xl:w-[55em] shadow-xl">
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
                <div className="xl:px-32 h-[25em] xl:py-12 px-32 lg:p-8">
                  <div className="flex flex-col gap-6 xl:w-[37rem]">
                    <h1 className="text-xl  tracking-wide text-darkgray">
                      Enter your email address
                    </h1>
                    <h1 className="text-md  tracking-wide text-darkgray">
                      We'll send you instructions to reset your password.
                    </h1>
                    <div>
                      <input
                        placeholder="Email Address"
                        className={`p-4 xl:w-[37em]  lg:w-[100%] border ${
                          isEmail ? "border-lightgray1" : "border-red"
                        } rounded-xl`}
                        type="email"
                        onChange={handleEmailChange}
                      />

                      {!isEmail && (
                        <div className="flex items-center gap-3 text-red">
                          <span>
                            <TbInfoHexagonFilled />
                          </span>
                          <p>Please enter your email.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <footer className="lg:relative xl:px-32 xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px]  xl: border-lightgray1 xl:fixed">
                  <div className="flex xl:justify-between  lg:items-center xl:items-center lg:gap-10 lg:flex-col  ">
                    <div
                      onClick={() => navigate("/")}
                      className="text-darkgray  flex  border-[1px] lg:min-w-[90vw]  border-lightgray1 px-5 hover:bg-[#f5f5f5] py-3 rounded-xl font-bold items-center gap-5">
                      <span>
                        <AiOutlineLeft />
                      </span>
                      <button className="">Return to sign in </button>
                    </div>
                    <div className="">
                      <button className="bg-brown xl:w-[15em] lg:min-w-[90vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl shadow-md  text-white font-bold relative xl:left-6  ">
                        Request password reset
                      </button>
                    </div>
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Toaster
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Forgotpassword;
