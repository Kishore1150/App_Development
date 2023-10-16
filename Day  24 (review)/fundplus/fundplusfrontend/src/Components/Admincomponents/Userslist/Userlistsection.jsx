import React, { useState, useEffect, useRef } from "react";
import Services from "../../../Service/Services";
import empty from "../../../Assets/Images/Dashboard/empty.svg";
import message from "../../../Assets/Images/Admin/message.png";
import toast, { Toaster } from "react-hot-toast";
import profile from "../../../Assets/Images/Dashboard/h2.jpg";
export const Userlistsection = () => {
  const [userslist, setUserslist] = useState([]);
  const [showpopup, setShowpopup] = useState(false);
  const [showmultimailpopup, setShowmultimailpopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showemailpopup, setShowemailpopup] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const fileInputRef = useRef(null);

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [Campaigns, setCampaigns] = useState([]);

  const handlePopup = (user) => {
    setSelectedUser(user);
    setShowpopup(true);
    console.log(user);
  };

  const handleFileChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    console.log("button clicked");
    e.preventDefault();
    const requestData = new FormData();
    requestData.append("to", to);
    requestData.append("subject", subject);
    requestData.append("body", body);
    requestData.append("attachment", attachment);
    await Services.sendMailToUser(requestData)
      .then((res) => {
        console.log(res.data);
        toast.success("Email sent successfully");
        setShowemailpopup(false);
      })
      .catch((err) => {
        console.log(err.data);
        toast.error("Unable to send email");
        setShowemailpopup(false);
      });
  };

  const handleEmailPopup = (user) => {
    setSelectedUser(user);
    setTo(user.email);
    setSubject("");
    setBody("");
    setAttachment("");
    setShowemailpopup(true);
  };

  const handleMutiEmailSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    const emailData = new FormData();
    emailData.append("subject", subject);
    emailData.append("body", body);
    emailData.append("attachment", attachment);
    await Services.sendMailToMultipleUsers(emailData)
      .then((res) => {
        console.log(res.data);
        toast.success("Email sent successfully");
        setShowmultimailpopup(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Unable to send email");
        setShowmultimailpopup(false);
      });
  };

  const handleMultiEmailPopup = () => {
    setSubject("");
    setBody("");
    setAttachment("");
    setShowmultimailpopup(true);
  };

  useEffect(() => {
    const handleChange = async () => {
      await Services.getAllUsers()
        .then((res) => {
          setUserslist(res.data);
          console.log(userslist);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    handleChange();
  }, []);
  return (
    <>
      <div>
        <main>
          {userslist ? (
            <section className="grid bg-backgroundwhite ">
              <div className="xl:w-[64em]  xl:top-[7em] lg:top-[5em]  p-8 flex flex-col gap-12  items-start xl:left-[18em] relative bg-white shadow-lg rounded-xl ">
                <div className="flex items-center w-full  justify-between">
                  <p className="  font-bold  text-2xl">Users list</p>
                  <span
                    onClick={handleMultiEmailPopup}
                    className="bg-hoverteal flex mr-3 hover:bg-lightteal hover:text-white hover:duration-500 hover:transition-all  items-center gap-3  py-1.5 px-3 rounded-md">
                    <i className="text-lightteal text-xl hover:text-white  fa-regular fa-envelope"></i>
                  </span>
                </div>
                <div className="flex w-full flex-col lg:gap-20 gap-5">
                  <section className=" ">
                    <div className="grid xl:grid-cols-3 overflow-y-scroll  xl:h-[25em] gap-5 xl:w-[60em]">
                      {userslist.map((user, index) => (
                        <div key={index} className="items-center">
                          <div
                            // style={{
                            //   boxShadow:
                            //     "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            // }}
                            className="flex flex-col p-8 rounded-xl border  border-gray shadow-xl bg-white items-center gap-5">
                            {user.profileImage ? (
                              <img
                                width="50"
                                height="50"
                                className=" w-32 h-32 rounded-full"
                                src={user.profileImage}
                                alt={user.fullname}
                              />
                            ) : (
                              <img
                                width="50"
                                height="50"
                                className="h-32 w-32 rounded-full"
                                src={profile}
                              />
                            )}

                            <div className="flex  justify-center items-center gap-2 ">
                              <button className=" flex  items-center w-[9rem] justify-center  gap-2 bg-hoverteal py-1.5 px-5 rounded-md">
                                <p
                                  onClick={() => handlePopup(user)}
                                  className="text-lightteal font-bold">
                                  view detail
                                </p>
                              </button>
                              <span
                                onClick={() => handleEmailPopup(user)}
                                className="bg-hoverteal  py-1.5 px-3 rounded-md">
                                <i className="text-lightteal fa-regular fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </section>
          ) : (
            <section className="grid bg-backgroundwhite place-content-center h-screen">
              <div className="xl:w-[60em]  p-8 flex flex-col items-center xl:ml-52 mt-20  bg-white shadow-xl rounded-xl ">
                <p className="w-full  font-bold  px-6 text-2xl">My Campaigns</p>
                <figure>
                  <img width={398.36} height={398.36} src={empty} alt="" />
                </figure>
                <p className="font-bold font-productsansb text-2xl text-teal">
                  No campaigns found.
                </p>
                <p className="text-textgray text-sm">
                  We're sorry, but no campaigns have been started yet.
                </p>
              </div>
            </section>
          )}
        </main>
        {selectedUser && showpopup && (
          <div className="">
            <div
              className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
              id="modal-id">
              <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
              <div className="w-full max-w-3xl  p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <div className="">
                  <div className="text-center p-5 flex-auto justify-center">
                    <div className=" border-[1px] font-poppins  border-lightgray1 h-[500px]  rounded-xl dark:bg-darkgray1 dark:border-none ">
                      <div className="border-b-[1px] flex justify-between items-center border-lightgray1 rounded-t-lg p-6 ">
                        <h1 className="font-bold text-3xl  dark:text-white">
                          Personal Information
                        </h1>
                      </div>

                      <div className="flex flex-col gap-5">
                        <div className="flex lg:flex-col xl:items-center  mt-5 ml-6 justify-between">
                          <div
                            key={selectedUser.id}
                            className="w-24 text-bordergray flex items-center gap-5">
                            <label className="font-poppins">Profile:</label>
                            {selectedUser.profileImage ? (
                              <img
                                width="50"
                                height="50"
                                className="h-24 w-24 rounded-full"
                                src={selectedUser.profileImage}
                                alt={selectedUser.firstName}
                              />
                            ) : (
                              <img
                                width="50"
                                height="50"
                                className="h-24 w-24 rounded-full"
                                src={profile}
                                alt={selectedUser.firstName}
                              />
                            )}
                          </div>
                          <div className="items-center mr-14  flex">
                            <p className="font-bold text-lightteal text-2xl">
                              Created campaigns:
                            </p>
                            <span className="dark:text-white text-3xl font-extrabold font-poppins">
                              {selectedUser.usercampaigns.length}
                            </span>
                          </div>
                          
                        </div>
                        {/* <div className="flex flex-col  gap-3 mt-5  items-left "> */}
                        <div className="flex ml-7 items-center  gap-3">
                          <label className="text-bordergray">Full name:</label>
                          <p className="rounded-md dark:bg-bluegray dark:text-white ">
                            {selectedUser.firstName}
                          </p>
                        </div>
                        <div className="flex  ml-7   gap-3  ">
                          <label className="text-bordergray">
                            Email address:
                          </label>
                          <p className="rounded-md dark:bg-bluegray dark:text-white border-bordergray">
                            {selectedUser.email}
                          </p>
                        </div>
                        {/* </div> */}
                        <div className="flex ml-5 mt-5 max-md:flex-col  gap-3 items-center ">
                          <div className="flex  gap-3 ml-2  items-left">
                            <label className="text-bordergray">
                              Mobile number:
                            </label>
                            <p className="rounded-md dark:bg-bluegray dark:text-white">
                              {selectedUser.mobileNumber}
                            </p>
                          </div>
                          <div className="flex  gap-3  ml-2 ">
                            <label className="text-bordergray">Country:</label>
                            <p className="rounded-md dark:bg-bluegray dark:text-white">
                              {selectedUser.country}
                            </p>
                          </div>
                        </div>
                        <div className="flex ml-5 max-md:flex-col  gap-3 mt-3 items-center ">
                          <div className="flex  gap-3 ml-2   items-left">
                            <label className="text-bordergray">
                              Date of Birth:
                            </label>
                            <p className="rounded-md dark:bg-bluegray dark:text-white">
                              {selectedUser.date}
                            </p>
                          </div>
                          <div className="flex  gap-3 ml-2 ">
                            <label className="text-bordergray">Gender:</label>
                            <p className="rounded-md  dark:bg-bluegray dark:text-white">
                              {selectedUser.gender}
                            </p>
                          </div>
                        </div>

                        <div className="flex   ml-7  mt-4 gap-3">
                          <label className=" max-md:ml-5 text-bordergray">
                            Address:
                          </label>
                          <p className=" rounded-md dark:bg-bluegray dark:text-white  max-md:ml-5">
                            {selectedUser.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3   text-center space-x-4 md:block">
                    <button
                      onClick={() => setShowpopup(false)}
                      className="mb-2 md:mb-0 bg-black text-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedUser && showemailpopup && (
          <div className="">
            <div
              className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
              id="modal-id">
              <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
              <div className="  xl:w-[50rem] p-5 relative xl:mx-auto xl:my-auto rounded-xl shadow-lg  bg-white ">
                <div className="flex xl:items-center lg:justify-between  xl:justify-center">
                  <h3 className="font-extrabold xl:mt-2  lg:text-xl xl:text-3xl ">
                    Send Email
                  </h3>
                  <button
                    onClick={() => setShowemailpopup(false)}
                    className="hover:text-red relative xl:left-[17rem] text-black xl:text-3xl lg:text-xl">
                    <i class="fa-solid fa-xmark"></i>{" "}
                  </button>
                </div>
                <form
                  className="flex   xl:p-8  items-center "
                  onSubmit={handleSubmit}>
                  <div>
                    <img className="xl:w-[500px] " src={message} alt="" />
                  </div>
                  <div className="flex flex-col mt-10 gap-2 ">
                    <div className="">
                      <input
                        type="email"
                        id="to"
                        className=" xl:w-[20rem] border px-3 py-2 border-bordergray rounded-md focus:outline-none"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        required
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        id="subject"
                        className="xl:w-[20rem] border px-3 py-2  border-bordergray rounded-md focus:outline-none"
                        // value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        placeholder="Write Subject"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        id="body"
                        rows="4"
                        className="xl:w-[20rem] border lg:w-full resize-none px-3 py-2 border-bordergray rounded-md focus:outline-none"
                        // value={body}
                        placeholder="Write Message"
                        onChange={(e) => setBody(e.target.value)}
                        required></textarea>
                      <button
                        title=""
                        className="text-black text-sm py-2 px-2 font-semibold rounded-md ">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          ref={fileInputRef}
                          className="fileInput hidden "
                          name="myfile"
                        />
                        <label
                          className=" inline-block py-[0.5rem] px-3  bg-hoverteal    text-teal rounded-md w-cursor-pointer hover:bg-teal hover:text-white transition-all duration-700 delay-150 ease-in-out"
                          for="fileInput"
                          id="fileInputLabel"
                          onClick={() => fileInputRef.current.click()}>
                          Choose File
                        </label>
                        {attachment?.name}
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {showmultimailpopup && (
          <div className="">
            <div
              className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
              id="modal-id">
              <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
              <div className="  xl:w-[50rem] p-5 relative xl:mx-auto xl:my-auto rounded-xl shadow-lg  bg-white ">
                <div className="flex xl:items-center lg:justify-between  xl:justify-center">
                  <h3 className="font-extrabold xl:mt-2  lg:text-xl xl:text-3xl ">
                    Send Email
                  </h3>
                  <button
                    onClick={() => setShowmultimailpopup(false)}
                    className="hover:text-red relative xl:left-[17rem] text-black xl:text-3xl lg:text-xl">
                    <i class="fa-solid fa-xmark"></i>{" "}
                  </button>
                </div>
                <form
                  className="flex   xl:p-8  items-center "
                  onSubmit={handleMutiEmailSubmit}>
                  <div>
                    <img className="xl:w-[500px] " src={message} alt="" />
                  </div>
                  <div className="flex flex-col mt-10 gap-2 ">
                    <div className="">
                      <input
                        type="text"
                        id="subject"
                        className="xl:w-[20rem] border px-3 py-2  border-bordergray rounded-md focus:outline-none"
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        placeholder="Write Subject"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        id="body"
                        rows="4"
                        className="xl:w-[20rem] border lg:w-full resize-none px-3 py-2 border-bordergray rounded-md focus:outline-none"
                        // value={body}
                        placeholder="Write Message"
                        onChange={(e) => setBody(e.target.value)}
                        required></textarea>
                      <button
                        title=""
                        className="text-black text-sm py-2 px-2 font-semibold rounded-md ">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          ref={fileInputRef}
                          className="fileInput hidden "
                          name="myfile"
                        />
                        <label
                          className=" inline-block py-[0.5rem] px-3  bg-hoverteal    text-teal rounded-md w-cursor-pointer hover:bg-teal hover:text-white transition-all duration-700 delay-150 ease-in-out"
                          for="fileInput"
                          id="fileInputLabel"
                          onClick={() => fileInputRef.current.click()}>
                          Choose File
                        </label>
                        {attachment?.name}
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};
