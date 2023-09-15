import React, { useState } from "react";
import logo from "../Assets/images/logo.svg";
import "../font.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { TbInfoHexagonFilled } from "react-icons/tb";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmail(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPassword(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setIsEmail(false);
    }

    if (!password) {
      setIsPassword(false);
    }

    if (email==="" || password==="") {
      toast.error("Please Enter the email and password");
    }
    else if(email==="kk106767@gmail.com" && password==="Kishore6555$$") {

      toast.success("You are logged in successfully");
      setTimeout(()=>{
        navigate("/home");
      },5000)
    }
  };
  return (
    <>
      <main>
        <section className="max-w-full font-productsansr  ">
          <div className="xl:w-[100%] lg:bg-white lg:flex-col xl:flex xl:justify-between xl:h-screen xl: bg-lightwhite lg:justify-between">
            <aside className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em] lg:h-[15em] xl:p-16 lg:p-8 lg:gap-10 ">
              <figure className="w-6 xl:mb-12">
                <img src={logo} alt="" />
              </figure>
              <div className="lg:mt-5 xl:mt-3 flex flex-col xl:gap-8 lg:gap-5">
                <div>
                  <h1 className="text-md text-darkgray">Welcome back</h1>
                </div>
                <div>
                  <h2 className="text-[#333333] lg:text-2xl  leading-[50px] xl:text-4xl">
                    Sign in to FundPlus
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
                      Your account details
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
                    <div className="flex flex-col">
                      <input
                        placeholder="Password"
                        className={`p-4 xl:w-[37em]   lg:w-[100%]  border ${
                          isPassword ? "border-lightgray1" : "border-red"
                        } rounded-xl`}
                        type="password"
                        onChange={handlePasswordChange}
                      />
                      {!isPassword && (
                        <div className="flex items-center gap-3 text-red">
                          <span>
                            <TbInfoHexagonFilled />
                          </span>
                          <p>Please enter valid password.</p>
                        </div>
                      )}
                    </div>
                    <span onClick={()=>navigate("/forgotpassword")} className="underline hover:no-underline cursor-pointer text-darkgray">
                      Forgot your password?
                    </span>
                  </div>
                </div>
                <footer className="lg:relative xl:px-32 xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px]  xl: border-lightgray1 xl:fixed">
                  <div className="flex lg:items-center xl:items-center lg:gap-10 lg:flex-col  ">
                    <div className="text-[#838383]">
                      <p className="tracking-wide">
                        By continuing,you agree to the Fundplus
                        <span className="underline hover:no-underline cursor-pointer text-darkgray">
                          {" "}
                          terms of service{" "}
                        </span>
                        and
                        <span className="underline hover:no-underline text-darkgray ">
                          {" "}
                          privacy notice.{" "}
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <button className="bg-brown xl:w-[9.5em] lg:min-w-[90vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl shadow-md  text-white font-bold relative xl:left-6  ">
                        Sign in
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
    </>
  );
};

export default Login;
