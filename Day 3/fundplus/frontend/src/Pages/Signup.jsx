import React, { useState } from "react";
import logo from "../Assets/images/logo.svg";
import "../font.css";
import { useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { TbInfoHexagonFilled } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
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

  const validateFirstName = () => {
    return !!firstName;
  };

  const validateLastName = () => {
    return !!lastName;
  };

  const validateEmail = () => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/;

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
    const trimmedfirstname=event.target.value.trim();
    setFirstName(trimmedfirstname);
    setIsFirstName(true);
    console.log(trimmedfirstname);
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

  const handleSubmit = (event) => {
    event.preventDefault();
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
    console.log("signup clicked");
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
      console.log("Signup successful");
      toast.success("Welcome " + firstName);
    } else {
      toast.error("Signup failed");
    }
  };
  return (
    <>
      <main>
        <section className="max-w-full font-productsansr lg:h-[100vh]  xl:h-[100vh] ">
          <div className="xl:w-[100%] lg:bg-white  lg:flex-col xl:flex xl:justify-between h-[100vh] xl:bg-lightwhite">
            <div className="font-productsansr relative  flex flex-col xl:gap-10 items-left xl:h-[25em] lg:h-[15em] xl:p-16 lg:p-8 lg:gap-10 ">
              <figure className="w-6 xl:mb-12 ">
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
                  onClick={() => navigate("/")}>
                  Sign in
                </span>
              </p>
              <form onSubmit={handleSubmit}>
                <div
                  className="xl:px-32 xl:mt-12 xl:py-16 lg:px-8 lg:py-8 max-h-[23em] overflow-y-scroll bg-white  "
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
                          onChange={handleFirstNameChange}
                          className={`p-4 xl:w-[18em] lg:w-[100%] border ${
                            isFirstName ? "border-lightgray1" : "border-red"
                          } rounded-xl`}
                        />
                        {!isFirstName && (
                          <div className="flex gap-3 items-center text-red p-2">
                            <span>
                              <TbInfoHexagonFilled />
                            </span>

                            <p className="text-red text-sm">
                              Please enter your firstname.
                            </p>
                          </div>
                        )}
                      </div>
                      <div>
                        <input
                          placeholder="Last Name"
                          className={`p-4 xl:w-[18em] lg:w-[100%] border ${
                            isLastName ? "border-lightgray1" : "border-red"
                          } rounded-xl`}
                          onChange={handleLastNameChange}
                          type="text"
                        />
                        {!isLastName && (
                          <div className="flex gap-3 items-center text-red p-2">
                            <span>
                              <TbInfoHexagonFilled />
                            </span>

                            <p className="text-red text-sm">
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
                        className={`p-4 xl:w-[37em] lg:w-[100%] border ${
                          isEmail ? "border-lightgray1" : "border-red"
                        } rounded-xl`}
                        type="text"
                      />
                      {!isEmail && (
                        <div className="flex gap-3 items-center text-red p-2">
                          <span>
                            <TbInfoHexagonFilled />
                          </span>

                          <p className="text-red text-sm">
                            Please enter your email address.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col ">
                      <input
                        placeholder="Confirm Email Address"
                        className={`p-4 xl:w-[37em] lg:w-[100%] border ${
                          isConfirmEmail ? "border-lightgray1" : "border-red"
                        } rounded-xl`}
                        onChange={handleConfirmEmailChange}
                        type="text"
                      />
                      {!isConfirmEmail && (
                        <div className="flex gap-3 items-center text-red p-2">
                          <span>
                            <TbInfoHexagonFilled />
                          </span>

                          <p className="text-red text-sm">
                            Please confirm email address.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <input
                        placeholder="Password"
                        className={`p-4 xl:w-[37em] lg:w-[100%] border ${
                          isPassword ? "border-lightgray1" : "border-red"
                        } rounded-xl`}
                        type="password"
                        onChange={handlePasswordChange}
                      />
                      {!isPassword && (
                        <div className="flex gap-3 items-center text-red p-2">
                          <span>
                            <TbInfoHexagonFilled />
                          </span>

                          <p className="text-red text-sm">
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
                              <i class="fa-solid fa-check"></i>
                            ) : (
                              <BsDot />
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
                              <i class="fa-solid fa-check"></i>
                            ) : (
                              <BsDot />
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
                              <i class="fa-solid fa-check"></i>
                            ) : (
                              <BsDot />
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
                              <i class="fa-solid fa-check"></i>
                            ) : (
                              <BsDot />
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
                              <i class="fa-solid  fa-check"></i>
                            ) : (
                              <BsDot />
                            )}
                          </span>
                          <p>1 symbol</p>
                        </li>
                      </ul>
                    </div>
                    <div className="flex text-darkgray2 lg:items-center xl:items-start gap-7">
                      <span className="hover:bg-lightgreen px-2 py-1.5 rounded-xl">
                        <input
                          className=" border-2  border-lightgray2 p-2 rounded-[3px]"
                          type="checkbox"
                          required
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
                <footer className="lg:relative xl:px-32 xl:py-8 lg:px-8 lg:py-12 xl:border-t-[1px] xl:border-lightgray1  xl:fixed">
                  <div className="flex lg:flex-col lg:gap-10 lg:items-center xl:items-center ">
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
                      <button className="bg-brown xl:w-[9.5em] lg:min-w-[90vw] hover:bg-lightgray hover:duration-100 p-3.5 rounded-xl shadow-md text-white  font-bold relative xl:left-12">
                        Sign Up
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

export default Signup;
