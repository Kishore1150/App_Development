import React, { useState } from "react";
import { TbAlertHexagon } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { PiCheckLight } from "react-icons/pi";
import { FaRegCircleDot } from "react-icons/fa6";
import logo from "../../Assets/Images/logo.svg";
import Services from "../../Service/Services";
import { useOtp, useUser, useVerifyEmail } from "../../States/UseStates";
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import "../../Assets/Styles/App.css";
const Forgotpasswordotpverify = () => {
  const isEmail = true;
  const { verifyemail, updateverifyEmail } = useVerifyEmail();

  const { otp, updateOtp } = useOtp();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [loader, setLoader] = useState(true);
  const [successmessage, setSuccessmessage] = useState("");
  const [errormessage, setErrormessage] = useState("Please enter valid otp");
  const [showInput, setShowInput] = useState(true);

  const [inputvalues, setInputvalues] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, element, backspace) => {
    if (backspace) {
      const updatedValues = [...inputvalues];
      updatedValues[index] = "";
      setInputvalues(updatedValues);
      if (element.previousSibling && index > 0) {
        element.previousSibling.focus();
      }
    } else if (!isNaN(element.value)) {
      const updatedValues = [...inputvalues];
      updatedValues[index] = element.value;
      setInputvalues(updatedValues);
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(false);
    setError(false);
    setSuccess(false);
    const combinedValue = inputvalues.join("");

    if (!combinedValue || combinedValue.length < 6) {
      setLoader(true);
      setError(true);
    }
    if (otp == combinedValue) {
      console.log(otp);
      setLoader(false);
      setTimeout(() => {
        setSuccess(true);
        setSuccessmessage("Validation completed successfully");
        setShowInput(false);
        setLoader(true);
      }, 5000);
    } else {
      setError(true);
      setErrormessage("Unable to validate email address");
    }
  };

  const handlePasswordChange = (e) => {
    setNewpassword(e.target.value);
    setIsPassword(false);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmpassword(e.target.value);
    setIsConfirmPassword(false);
  };

  const validateConfirmPassword = () => {
    if (newpassword && newpassword == confirmpassword) {
      return true;
    }
    return false;
  };

  const validatePassword = () => {
    if (newpassword?.length < 12) {
      return false;
    }

    if (!/[A-Z]/.test(newpassword)) {
      return false;
    }

    if (!/[a-z]/.test(newpassword)) {
      return false;
    }

    if (!/\d/.test(newpassword)) {
      return false;
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(newpassword)) {
      return false;
    }

    return true;
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!newpassword) {
      setIsPassword(true);
    }
    if (!confirmpassword) {
      setIsConfirmPassword(true);
    }

    const ispasswordValid = validatePassword();
    const isconfirmpasswordValid = validateConfirmPassword();
    setIsPassword(!ispasswordValid);
    setIsConfirmPassword(!isconfirmpasswordValid);

    if (ispasswordValid && isconfirmpasswordValid) {
      await Services.userUpdatePassword(verifyemail, newpassword)
        .then((res) => {
          setSuccess(true);
          setSuccessmessage(res.data);
          console.log(res.data);
            setTimeout(() => {
              navigate("/");
            }, 3000);
        })
        .catch((err) => {
          setError(true);
          setErrormessage(err.response.data);
          console.log(err.response.data);


        });
    }
  };
  return (
    <>
      <main>
        <section className="max-w-full font-productsansr">
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
              <div className="max-w-full  z-[1] fixed w-full  flex items-center justify-between p-3 gap-3 bg-lightgreen">
                <div className="flex  items-center gap-3">
                  <span>
                    <GoIssueClosed className="text-brightgreen" />
                  </span>
                  <p className="text-brightgreen">{successmessage}</p>
                </div>
                <button className="text-xl" onClick={() => setSuccess(false)}>
                  <AiOutlineClose className="text-brightgreen" />
                </button>
              </div>
            </>
          )}
          <div className="xl:w-[100%] lg:bg-white lg:flex-col xl:flex xl:justify-between xl:h-screen xl: bg-lightwhite lg:justify-between">
            <aside className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em] lg:h-[15em] xl:p-16 lg:p-8 lg:gap-10 ">
              <figure className="w-6 xl:mb-12">
                <img src={logo} alt="" />
              </figure>
              <div className="lg:mt-5 xl:mt-16  flex flex-col  xl:gap-8 lg:gap-5">
                <div className="flex flex-col gap-5">
                  <p className="text-darkgray2 lg:text-2xl  leading-[50px] xl:text-4xl">
                    Verify your account
                  </p>
                  <p className="text-darkgray2 ">
                    We've sent a verification code to the email{" "}
                    <span>{verifyemail}</span>
                  </p>
                </div>
              </div>
            </aside>
            <div className=" rounded-tl-[5em]  bg-white lg:w-full xl:w-[55em] shadow-xl">
              {showInput ? (
                <form onSubmit={handleSubmit}>
                  <div className="xl:px-32 xl:h-[33em]  lg:h-[20em] grid place-content-center relative xl:top-24  xl:py-12 lg:min-w-full lg:p-8">
                    <div className="flex flex-col p-5  lg:gap-4 xl:gap-6 lg:w-full xl:w-[37rem]">
                      <h1 className="text-xl  tracking-wide text-darkgray2">
                        Verification code
                      </h1>
                      <div className="flex flex-col xl:gap-5 lg:gap-8">
                        <div className="flex xl:w-full lg:gap-2 xl:justify-between">
                          {inputvalues.map((value, index) => (
                            <input
                              key={index}
                              value={value}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  e.target,
                                  e.target.value === ""
                                )
                              }
                              className={`xl:px-[2em] xl:py-[2em] lg:w-[2.5em] lg:h-[2.5em] lg:px-[14px]   xl:w-[5em]  xl:h-[4.5em] focus:outline-0 focus:border-brightgreen hover:bg-lightwhite   border ${
                                isEmail ? "border-lightgray1" : "border-red"
                              } rounded-xl`}
                              type="text"
                              maxLength={1}
                            />
                          ))}
                        </div>

                        {!isEmail && (
                          <div className="flex items-center gap-3 text-red">
                            <span>
                              <TbAlertHexagon />
                            </span>
                            <p className="text-sm">Please enter your email.</p>
                          </div>
                        )}
                        <p className="text-darkgray2">
                          This code will expire in 10 minutes.Need a new code?
                        </p>
                        <p className="underline hover:no-underline cursor-pointer">
                          Resend code
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer className="lg:relative xl:px-32 xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px]  xl:border-lightgray1 w-full xl:fixed">
                    <div className=" flex lg:items-center xl:items-center lg:gap-10 lg:flex-col  ">
                      {loader ? (
                        <button className="bg-brown xl:w-[10em] lg:min-w-[90vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl  shadow-md  text-white font-bold relative xl:left-[32em] ">
                          verify
                        </button>
                      ) : (
                        <button className=" xl:w-[8em]   bg-[#e4e4e4] lg:min-w-[90vw]  hover:duration-100 p-5 rounded-xl  shadow-md  text-white font-bold relative  xl:left-[32em] ">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                            <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                          </div>
                        </button>
                      )}
                    </div>
                  </footer>
                </form>
              ) : (
                //confirm password division
                <>
                  <form onSubmit={handleUpdatePassword}>
                    <div className="xl:px-32 xl:h-[30em] xl:mt-12 xl:py-12 px-32 lg:p-8">
                      <div className="flex flex-col gap-6 xl:w-[37rem]">
                        <h1 className="text-xl  tracking-wide text-darkgray2">
                          Update password
                        </h1>
                        <div className="flex flex-col xl:gap-5 lg:gap-8">
                          <div className="flex gap-5 flex-col xl:w-full lg:w-full  lg:gap-2 xl:justify-between">
                            <div className="flex flex-col gap-3">
                              <input
                                placeholder="New password"
                                className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen   hover:bg-lightwhite  lg:w-[100%] border ${
                                  isPassword
                                    ? "border-borderred"
                                    : "border-lightgray1"
                                } rounded-xl`}
                                type="password"
                                onChange={handlePasswordChange}
                              />{" "}
                              {isPassword && (
                                <div className="flex items-center gap-3 text-red">
                                  <span>
                                    <TbAlertHexagon />
                                  </span>
                                  <p className="text-sm">
                                    Please enter valid password.
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col gap-3">
                              <input
                                placeholder="Confirm Password"
                                className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen   hover:bg-lightwhite  lg:w-[100%] border ${
                                  isConfirmPassword
                                    ? "border-borderred"
                                    : "border-lightgray1"
                                } rounded-xl`}
                                type="password"
                                onChange={handleConfirmPasswordChange}
                              />

                              {isConfirmPassword && (
                                <div className="flex items-center gap-3 text-red">
                                  <span>
                                    <TbAlertHexagon />
                                  </span>
                                  <p className="text-sm">
                                    Please enter Confirmpassword.
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-darkgray2 xl:w-[37em] bg-lightblue rounded-xl p-5">
                            <p>Your password must have:</p>
                            <ul className="text-sm">
                              <li className="flex items-center gap-3">
                                <span
                                  className={`text-xl ${
                                    newpassword.length >= 12
                                      ? "text-brightgreen"
                                      : "text-black"
                                  }`}>
                                  {newpassword.length >= 12 ? (
                                    <PiCheckLight />
                                  ) : (
                                    <FaRegCircleDot className="text-sm" />
                                  )}
                                </span>
                                <p>At least 12 characters</p>
                              </li>
                              <li className="flex items-center gap-3">
                                <span
                                  className={`text-xl ${
                                    /[A-Z]/.test(newpassword)
                                      ? "text-brightgreen"
                                      : "text-black"
                                  }`}>
                                  {/[A-Z]/.test(newpassword) ? (
                                    <PiCheckLight />
                                  ) : (
                                    <FaRegCircleDot className="text-sm" />
                                  )}
                                </span>
                                <p>1 uppercase letter</p>
                              </li>
                              <li className="flex items-center gap-3">
                                <span
                                  className={`text-xl ${
                                    /[a-z]/.test(newpassword)
                                      ? "text-brightgreen"
                                      : "text-black"
                                  }`}>
                                  {/[a-z]/.test(newpassword) ? (
                                    <PiCheckLight />
                                  ) : (
                                    <FaRegCircleDot className="text-sm" />
                                  )}
                                </span>
                                <p>1 lowercase letter</p>
                              </li>
                              <li className="flex items-center gap-3">
                                <span
                                  className={`text-xl ${
                                    /[0-9]/.test(newpassword)
                                      ? "text-brightgreen"
                                      : "text-black"
                                  }`}>
                                  {/[0-9]/.test(newpassword) ? (
                                    <PiCheckLight />
                                  ) : (
                                    <FaRegCircleDot className="text-sm" />
                                  )}
                                </span>
                                <p>1 number</p>
                              </li>
                              <li className="flex items-center gap-3">
                                <span
                                  className={`text-xl ${
                                    /[!@#$%^&*]/.test(newpassword)
                                      ? "text-brightgreen"
                                      : "text-black"
                                  }`}>
                                  {/[!@#$%^&*]/.test(newpassword) ? (
                                    <PiCheckLight />
                                  ) : (
                                    <FaRegCircleDot className="text-sm" />
                                  )}
                                </span>
                                <p>1 symbol</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <footer className="lg:relative xl:px-32 xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px]  xl:border-lightgray1 w-full xl:fixed">
                      <div className=" flex lg:items-center xl:items-center lg:gap-10 lg:flex-col  ">
                        {loader ? (
                          <button className="bg-brown xl:w-[10em] lg:min-w-[80vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl  shadow-md  text-white font-bold relative xl:left-[32em] ">
                            Update password
                          </button>
                        ) : (
                          <button className=" xl:w-[8em]   bg-[#e4e4e4] lg:min-w-[80vw]  hover:duration-100 p-5 rounded-xl  shadow-md  text-white font-bold relative  xl:left-[32em] ">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                              <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                              <div className="w-2 h-2 rounded-full animate-pulse bg-white"></div>
                            </div>
                          </button>
                        )}
                      </div>
                    </footer>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Forgotpasswordotpverify;
