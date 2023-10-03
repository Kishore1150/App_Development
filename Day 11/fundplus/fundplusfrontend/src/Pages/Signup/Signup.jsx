import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegCircleDot } from "react-icons/fa6";
import { GoIssueClosed } from "react-icons/go";
import { PiCheckLight } from "react-icons/pi";
import { TbAlertHexagon } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/logo.svg";
import Services from "../../Service/Services";
import { useOtp, useUser } from "../../States/UseStates";
const Signup = () => {
  const { otp, updateOtp } = useOtp();
  const { user, updateUser } = useUser();

  const navigate = useNavigate();
  const[showpassword,setShowpassword]=useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFirstName, setIsFirstName] = useState(true);
  const [isLastName, setIsLastName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isConfirmEmail, setIsConfirmEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errormessage, setErrormessage] = useState(
    "Unable to signup,please try again!."
  );

  const [loader, setLoader] = useState(false);

  const validateFirstName = () => {
    return !!firstName;
  };

  const validateLastName = () => {
    return !!lastName;
  };

  const validateEmail = () => {
    //  const emailPattern = /^[A-Za-z0-9._%+-]+@(gmail\.com|.*\.(com|io|in))$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
  };

  const validateConfirmEmail = () => {
    return email && email === confirmEmail;
  };

  const validatePassword = () => {
    if (password?.length < 12) {
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      return false;
    }

    if (!/[a-z]/.test(password)) {
      return false;
    }

    if (!/\d/.test(password)) {
      return false;
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      return false;
    }

    return true;
  };

  const handleFirstNameChange = (event) => {
    const trimmedfirstname = event.target.value.trim();
    setFirstName(trimmedfirstname);
    setIsFirstName(true);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setIsLastName(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmail(true);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
    setIsConfirmEmail(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPassword(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError(false);
    setSuccess(false);
    if (!firstName) {
      setIsFirstName(false);
    }
    if (!lastName) {
      setIsLastName(false);
    }
    if (!email) {
      setIsEmail(false);
    }
    if (!confirmEmail) {
      setIsConfirmEmail(false);
    }
    if (!password) {
      setIsPassword(false);
    }
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isConfirmEmailValid = validateConfirmEmail();
    const isPasswordValid = validatePassword();

    setIsFirstName(isFirstNameValid);
    setIsLastName(isLastNameValid);
    setIsEmail(isEmailValid);
    setIsConfirmEmail(isConfirmEmailValid);
    setIsPassword(isPasswordValid);

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isConfirmEmailValid &&
      isPasswordValid
    ) {
      updateUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      setLoader(true);
      await Services.SendOtp(email, firstName)
        .then((res) => {
          setLoader(true);
          setTimeout(() => {
            setSuccess(true);
            setLoader(false);
            updateOtp(res.data);
          }, 3000);
          setTimeout(() => {
            navigate("/otpverify");
          }, 6000);
        })
        .catch((err) => {
          setLoader(true);
          setTimeout(() => {
            console.log(err);
            setError(true);
            setLoader(false);
            setErrormessage(err.response.data);
          }, 3000);
          setTimeout(() => {
            navigate("/signin");
          }, 5000);
        });
    } else {
      console.log("Signup failed");

      setError(true);
    }
  };
  return (
    <>
      <main>
        <section className="max-w-full font-productsansr lg:h-[100vh]  xl:min-h-[100vh] ">
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
                  <p className="text-brightgreen">Please verify your email!</p>
                </div>
                <button className="text-xl" onClick={() => setSuccess(false)}>
                  <AiOutlineClose className="text-brightgreen" />
                </button>
              </div>
            </>
          )}
          <div className="xl:w-[100%] z-[2] lg:bg-white  lg:flex-col xl:flex xl:justify-between min-h-screen xl:bg-lightwhite">
            <div className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em] lg:h-[15em] xl:p-16 lg:p-8 lg:gap-10 ">
              <figure
                onClick={() => navigate("/home")}
                className="w-6 xl:mb-12 lg:mt-8 ">
                <img src={logo} alt="" />
              </figure>
              <div className="lg:mt-5 xl:mt-3 flex flex-col xl:gap-8  lg:gap-5">
                <div>
                  <h1 className="text-md text-darkgray">Welcome to FundPlus</h1>
                </div>
                <div>
                  <h2 className="text-[#333333] leading-[50px] lg:text-2xl xl:text-4xl">
                    Create an Account
                  </h2>
                </div>
              </div>
            </div>
            <div className=" rounded-tl-[5em] bg-white lg:w-[100%]   xl:w-[55em] shadow-xl">
              <p className="text-darkgray xl:text-end lg:text-start  tracking-wide  xl:p-12 lg:p-0 lg:px-8">
                Already have an account?
                <span
                  className="underline cursor-pointer hover:no-underline"
                  onClick={() => navigate("/signin")}>
                  Sign in
                </span>
              </p>
              <form onSubmit={handleSubmit}>
                <div
                  className="xl:px-32 xl:mt-12 xl:py-16 lg:px-8 lg:py-8 xl:max-h-[23em] xl:overflow-y-scroll bg-white  "
                  action="">
                  <div className="flex flex-col   gap-6 w-[37rem] lg:w-[100%]">
                    <h1 className="text-xl  tracking-wide text-darkgray">
                      Your account details
                    </h1>
                    <div className="xl:flex   lg:flex-col lg:flex lg:gap-5 justify-between">
                      <div className="flex flex-col">
                        <input
                          placeholder="First Name"
                          type="text"
                          name="firstName"
                          id="firstName"
                          onChange={handleFirstNameChange}
                          className={`p-4 xl:w-[18em] hover:bg-lightwhite focus:outline-0 focus:border-brightgreen   lg:w-[100%] border ${
                            isFirstName
                              ? "border-lightgray1"
                              : "border-borderred"
                          } rounded-xl`}
                        />
                        {!isFirstName && (
                          <div className="flex gap-3 items-center text-borderred p-2">
                            <span>
                              <TbAlertHexagon />
                            </span>

                            <p className="text-borderred text-sm">
                              Please enter your firstname.
                            </p>
                          </div>
                        )}
                      </div>
                      <div>
                        <input
                          placeholder="Last Name"
                          className={`p-4 xl:w-[18em] focus:outline-0 focus:border-brightgreen  hover:bg-lightwhite  lg:w-[100%] border ${
                            isLastName
                              ? "border-lightgray1"
                              : "border-borderred"
                          } rounded-xl`}
                          name="lastName"
                          id="lastName"
                          onChange={handleLastNameChange}
                          type="text"
                        />
                        {!isLastName && (
                          <div className="flex gap-3 items-center text-borderred p-2">
                            <span>
                              <TbAlertHexagon />
                            </span>

                            <p className="text-borderred text-sm">
                              Please enter your lastname.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <input
                        placeholder="Email Address"
                        onChange={handleEmailChange}
                        className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen  hover:bg-lightwhite lg:w-[100%] border ${
                          isEmail ? "border-lightgray1" : "border-borderred"
                        } rounded-xl`}
                        type="text"
                        name="email"
                        id="email"
                      />
                      {!isEmail && (
                        <div className="flex gap-3 items-center text-borderred p-2">
                          <span>
                            <TbAlertHexagon />
                          </span>

                          <p className="text-borderred text-sm">
                            Please enter your email address.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col ">
                      <input
                        placeholder="Confirm Email Address"
                        className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen   hover:bg-lightwhite  lg:w-[100%] border ${
                          isConfirmEmail
                            ? "border-lightgray1"
                            : "border-borderred"
                        } rounded-xl`}
                        onChange={handleConfirmEmailChange}
                        type="text"
                        name="confirmEmail"
                        id="confirmEmail"
                      />
                      {!isConfirmEmail && (
                        <div className="flex gap-3 items-center text-borderred p-2">
                          <span>
                            <TbAlertHexagon />
                          </span>

                          <p className="text-borderred text-sm">
                            Please confirm email address.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <input
                        placeholder="Password"
                        className={`p-4 xl:w-[37em] focus:outline-0 focus:border-brightgreen   hover:bg-lightwhite  lg:w-[100%] border ${
                          isPassword ? "border-lightgray1" : "border-borderred"
                        } rounded-xl`}
                        type="password"
                        id="password"
                        name="password"
                        onChange={handlePasswordChange}
                      />
                      {!isPassword && (
                        <div className="flex gap-3 items-center text-borderred p-2">
                          <span>
                            <TbAlertHexagon />
                          </span>

                          <p className="text-borderred text-sm">
                            Please enter a valid password.
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="text-darkgray2 bg-lightblue rounded-xl p-5">
                      <p>Your password must have:</p>
                      <ul className="text-sm">
                        <li className="flex items-center gap-3">
                          <span
                            className={`text-xl ${
                              password.length >= 12
                                ? "text-brightgreen"
                                : "text-black"
                            }`}>
                            {password.length >= 12 ? (
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
                              /[A-Z]/.test(password)
                                ? "text-brightgreen"
                                : "text-black"
                            }`}>
                            {/[A-Z]/.test(password) ? (
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
                              /[a-z]/.test(password)
                                ? "text-brightgreen"
                                : "text-black"
                            }`}>
                            {/[a-z]/.test(password) ? (
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
                              /[0-9]/.test(password)
                                ? "text-brightgreen"
                                : "text-black"
                            }`}>
                            {/[0-9]/.test(password) ? (
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
                              /[!@#$%^&*]/.test(password)
                                ? "text-brightgreen"
                                : "text-black"
                            }`}>
                            {/[!@#$%^&*]/.test(password) ? (
                              <PiCheckLight />
                            ) : (
                              <FaRegCircleDot className="text-sm" />
                            )}
                          </span>
                          <p>1 symbol</p>
                        </li>
                      </ul>
                    </div>
                    <div className="flex text-darkgray2 lg:items-center xl:items-start gap-7">
                      <span className="hover:bg-lightgreen px-2  py-2 rounded-xl">
                        <input
                          className="  focus:outline-none  form-checkbox text-brightgreen  border-lightgray2 p-2.5 rounded-[3px]"
                          type="checkbox"
                        />
                      </span>
                      <p>
                        Receive tips to help you make the most of your
                        fundraiser, and updates about important causes.
                        Unsubscribe anytime.
                      </p>
                    </div>
                  </div>
                </div>
                <footer className="lg:relative xl:px-32 xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px] xl:border-lightgray1 fixed ">
                  <div className="flex lg:flex-col  lg:gap-10 lg:items-center xl:items-center ">
                    <div className="text-[#838383]">
                      <p className="tracking-wide ">
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
                    <div>
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
                          Sign up
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

export default Signup;
