import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Redux/userSlice";
import Services from "../../../Service/Services";
import toast, { Toaster } from "react-hot-toast";

export const Admineditpasswordsection = () => {
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [condition, setCondition] = useState(0);
   const [isPassword, setIsPassword] = useState(false);
   const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [message, setMessage] = useState("Very weak");

  const user = useSelector(selectUser);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    let newCondition = 0;

    if (newPassword.length >= 12) {
      newCondition += 1;
      setMessage("Weak");
    }
    if (/(?=.*[a-z])(?=.*[A-Z]).+/.test(newPassword)) {
      newCondition += 1;
      setMessage("Weak");
    }
    if (/\d/.test(newPassword)) {
      newCondition += 1;
      setMessage("Medium");
    }
    if (/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(newPassword)) {
      newCondition += 1;
      setMessage("Strong");
    }

    setCondition(newCondition);
  };

  const handleRepeatPassword = (e) => {
    setRepeatpassword(e.target.value);
    console.log(repeatpassword);
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

   const validateConfirmPassword = () => {
     if (password && password == repeatpassword) {
       return true;
     }
     return false;
   };
  const handleUpdatePassword=async(e)=>{
    e.preventDefault();

    if (!password) {
      setIsPassword(true);
    }
    if (!repeatpassword) {
      setIsConfirmPassword(true);
    }
    const ispasswordValid = validatePassword();
    const isconfirmpasswordValid = validateConfirmPassword();
    setIsPassword(!ispasswordValid);
    setIsConfirmPassword(!isconfirmpasswordValid);

    if (ispasswordValid && isconfirmpasswordValid) {
      await Services.userUpdatePassword(user?.email, password)
        .then((res) => {
          toast.success("Password updated successfully");
          console.log(res.data);

        })
        .catch((err) => {
          toast.error("Error updating password");
          console.log(err.response.data);


        });
    }

  }

  return (
    <>
      <main className="h-full  p-5 w-full  ">
        <div className="pt-10 text-darkteal">
          <p className="text-2xl font-productsansb font-extrabold text-darkteal ">
            Change password
          </p>
        </div>

        <section className="text-darkteal xl:w-fit  lg:w-full flex flex-col gap-3 mt-5">
          <form onSubmit={handleUpdatePassword} className="">
            <div className="flex xl:items-center lg:w-full  w-fit gap-5">
              <div className="flex-col lg:w-full flex gap-2">
                <div className="flex text-sm">
                  <span className="font-bold font-productsansb">
                    New Password
                  </span>
                  <span className="text-red">*</span>
                </div>
                <input
                  type="password"
                  onChange={handlePasswordChange}
                  className=" focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 py-2.5 border-[1px] w-[41.5em] lg:w-full rounded-lg border-lightgray2"
                  placeholder="Enter your new password"
                />
              </div>
            </div>
            <div>
              <div className="flex lg:w-full flex-col py-1 gap-2">
                <div className=" h-[7px] rounded-xl bg-[#fcf9f1] lg:w-full w-[40em]">
                  {condition === 0 && (
                    <>
                      <div className="h-[7px] lg:w-3 rounded-xl bg-textgray w-6"></div>
                    </>
                  )}
                  {condition === 1 && (
                    <>
                      <div className="h-[7px] lg:w-[3em]  rounded-xl bg-red w-12"></div>
                    </>
                  )}
                  {condition === 2 && (
                    <>
                      <div className="h-[7px]  lg:w-[5em] rounded-xl bg-[#e6bb48] w-[15em]"></div>
                    </>
                  )}
                  {condition === 3 && (
                    <>
                      <div className="h-[7px] lg:w-[15em]  rounded-xl bg-[#bddd6f] w-[28em]"></div>
                    </>
                  )}
                  {condition === 4 && (
                    <>
                      <div className="h-[7px] lg:w-full rounded-xl bg-[#21ba45] w-[40em]"></div>
                    </>
                  )}
                </div>
                <div className="font-bold  text-textgray text-sm">
                  {message}
                </div>
              </div>
              <div className="text-darkteal p-1 rounded-xl ">
                <p>Your password must have:</p>
                <ul className="text-sm ">
                  <li className="flex items-center gap-2">
                    <span
                      className={`text-xl ${
                        password?.length >= 12
                          ? "text-brightgreen"
                          : "text-black"
                      }`}>
                      {password?.length >= 12 ? (
                        <i class="fa-regular text-sm fa-circle-check"></i>
                      ) : (
                        <i class="fa-regular text-sm fa-circle-dot"></i>
                      )}
                    </span>
                    <p>At least 12 characters</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className={`text-xl ${
                        /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)
                          ? "text-brightgreen"
                          : "text-black"
                      }`}>
                      {/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password) ? (
                        <i class="fa-regular text-sm fa-circle-check"></i>
                      ) : (
                        <i class="fa-regular text-sm fa-circle-dot"></i>
                      )}
                    </span>
                    <p>Lowercase & Uppercase</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className={`text-xl ${
                        /[0-9]/.test(password)
                          ? "text-brightgreen"
                          : "text-black"
                      }`}>
                      {/[0-9]/.test(password) ? (
                        <i class="fa-regular text-sm fa-circle-check"></i>
                      ) : (
                        <i class="fa-regular text-sm fa-circle-dot"></i>
                      )}
                    </span>
                    <p> Number (0-9)</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className={`text-xl ${
                        /[!@#$%^&*]/.test(password)
                          ? "text-brightgreen"
                          : "text-black"
                      }`}>
                      {/[!@#$%^&*]/.test(password) ? (
                        <i class="fa-regular text-sm fa-circle-check"></i>
                      ) : (
                        <i class="fa-regular text-sm fa-circle-dot"></i>
                      )}
                    </span>
                    <p>Special Character (!@#$%^&*)</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex text-sm">
                <span className="font-bold font-productsansb">
                  Repeat Password
                </span>
                <span className="text-red">*</span>
              </div>
              <input
                onChange={handleRepeatPassword}
                className="focus:outline-0 px-4  focus:focus:border-brightgreen  p-2.5 border-[1px]  w-[41.5em] lg:w-full rounded-lg border-lightgray2"
                placeholder="Repeat your new password"
              />
            </div>
            <div className="flex justify-end mt-2 mb-24">
              <button className="bg-lightteal rounded-md flex gap-5 text-white px-6 py-2">
                <span className="font-bold">Save Password</span>
                <span>
                  <i class="fa-solid fa-floppy-disk"></i>
                </span>
              </button>
            </div>
          </form>
        </section>
        <Toaster/>
      </main>
    </>
  );
};
