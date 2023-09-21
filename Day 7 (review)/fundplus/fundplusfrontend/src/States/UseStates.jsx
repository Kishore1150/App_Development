import React, { createContext, useContext, useState } from "react";

const otpContext = createContext();

const userContext = createContext();

const verifyemailContext = createContext();

export function useUser() {
  return useContext(userContext);
}
export function useOtp() {
  return useContext(otpContext);
}

export function useVerifyEmail() {
  return useContext(verifyemailContext);
}

export function UseStates({ children }) {
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({});
  const [verifyemail, setVerifyemail] = useState("");

  function updateOtp(newotp) {
    setOtp(newotp);
  }
  function updateUser(newuser) {
    setUser(newuser);
  }
  function updateverifyEmail(newemail) {
    setVerifyemail(newemail);
  }

  const otpContextValue = {
    otp,
    updateOtp,
  };

  const userContextValue = {
    user,
    updateUser,
  };

  const emailContextValue = {
    verifyemail,
    updateverifyEmail,
  };

  return (
    <otpContext.Provider value={otpContextValue}>
      <userContext.Provider value={userContextValue}>
        <verifyemailContext.Provider value={emailContextValue}>
          {children}
        </verifyemailContext.Provider>
      </userContext.Provider>
    </otpContext.Provider>
  );
}
