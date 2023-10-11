import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GoIssueClosed } from "react-icons/go";
import { TbAlertHexagon } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/logo.svg";
import { login, selectUser } from "../../Redux/userSlice";
import Services from "../../Service/Services";
import { useUser } from "../../States/UseStates";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(selectUser);

  const { user, updateUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [successmessage, setSuccessmessage] = useState("");
  const [errormessage, setErrormessage] = useState(
    "Please check your email and password."
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmail(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPassword(true);
  };


  useEffect(()=>{





  },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    setSuccess(false);
    setIsPassword(true);
    setIsEmail(true);

    if (!email) {
      setIsEmail(false);
      setError(true);
    }
    if (!password) {
      setIsPassword(false);
      setError(true);
    } else if (isEmail && isPassword) {
      try {
        await Services.UserLogin(email, password)
          .then((res) => {
            setLoader(true);
            console.log(res.data);
              localStorage.setItem("userid", res.data.id);
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("role",res.data.role);
            setTimeout(() => {
              setSuccess(true);
              setLoader(true);
                dispatch(login(res.data));
              // console.log(res.data.token);

              console.log(users);
            }, 4000);
            setTimeout(() => {
              navigate("/home");
            }, 5000);
          })
          .catch((err) => {
            setError(true);
            setErrormessage(err.response.data);
          });
      } catch (err) {
        setError(true);
        setErrormessage("Unable to login try again later!");
      }
    }
  };
  return (
    <>
      <main>
        <section className="max-w-full    font-productsansr  ">
          {error && (
            <>
              <div className="max-w-full z-[1] fixed w-full flex items-center justify-between p-3 gap-3 bg-lightred">
                <div className="flex  items-center gap-3">
                  <span>
                    <TbAlertHexagon className="text-red" />
                  </span>
                  <p className="text-red">{errormessage}</p>
                </div>
                <button className="text-xl" onClick={() => setError(false)}>
                  <AiOutlineClose className="text-red" />
                </button>
              </div>
            </>
          )}
          {success && (
            <>
              <div className="max-w-full z-[1] fixed w-full flex items-center justify-between p-3 gap-3 bg-lightgreen">
                <div className="flex  items-center gap-3">
                  <span>
                    <GoIssueClosed className="text-brightgreen" />
                  </span>
                  <p className="text-brightgreen">Welcome back!.</p>
                </div>
                <button className="text-xl" onClick={() => setSuccess(false)}>
                  <AiOutlineClose className="text-brightgreen" />
                </button>
              </div>
            </>
          )}
          <div className="xl:w-[100%]   lg:bg-white  lg:flex-col xl:flex xl:justify-between xl:h-screen xl:bg-lightwhite lg:justify-between">
            <aside className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em] lg:h-[15em] xl:p-16 lg:p-8 lg:gap-10 ">
              <figure
                onClick={() => navigate("/home")}
                className="w-6 xl:mb-12 lg:mt-7">
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
            <div className=" xl:rounded-tl-[5em] xl:bg-white h-full xl:w-[55em] shadow-xl">
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
                <div className="xl:px-32 xl:h-[25em] xl:py-12 px-32 lg:p-8">
                  <div className="flex flex-col gap-6 xl:w-[37rem]">
                    <h1 className="text-xl  tracking-wide text-darkgray">
                      Your account details
                    </h1>
                    <div className="flex flex-col gap-2">
                      <input
                        placeholder="Email Address"
                        className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen hover:bg-lightwhite   lg:w-[100%] border ${
                          isEmail ? "border-lightgray1" : "border-borderred"
                        } rounded-xl`}
                        type="email"
                        onChange={handleEmailChange}
                      />

                      {!isEmail && (
                        <div className="flex items-center gap-3 text-borderred">
                          <span>
                            <TbAlertHexagon />
                          </span>
                          <p className="text-sm">Please enter your email.</p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <input
                        placeholder="Password"
                        className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen hover:bg-lightwhite  lg:w-[100%]  border ${
                          isPassword ? "border-lightgray1" : "border-borderred"
                        } rounded-xl`}
                        type="password"
                        onChange={handlePasswordChange}
                      />
                      {!isPassword && (
                        <div className="flex items-center gap-3 text-borderred">
                          <span>
                            <TbAlertHexagon />
                          </span>
                          <p className="text-sm">
                            Please enter valid password.
                          </p>
                        </div>
                      )}
                    </div>
                    <span
                      onClick={() => navigate("/forgotpassword")}
                      className="underline w-fit hover:no-underline cursor-pointer text-darkgray">
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
                      {loader ? (
                        <button className="bg-[#a1a0a0] xl:w-[9.5em] lg:min-w-[90vw]  p-6 rounded-2xl shadow-md  text-white font-bold relative xl:left-6 ">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                          </div>
                        </button>
                      ) : (
                        <button className="bg-brown xl:w-[9.5em] lg:min-w-[90vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl shadow-md  text-white font-bold relative xl:left-6  ">
                          Sign in
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
    </>
  );
};

export default SignIn;
