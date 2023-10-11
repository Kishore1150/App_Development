import React, { createContext, useContext, useState } from "react";

const otpContext = createContext();

const userContext = createContext();

const verifyemailContext = createContext();

const admincampaignContext = createContext();

export function useUser() {
  return useContext(userContext);
}

export function useOtp() {
  return useContext(otpContext);
}

export function useVerifyEmail() {
  return useContext(verifyemailContext);
}

export function useAdminCampaign() {
  return useContext(admincampaignContext);
}

export function UseStates({ children }) {
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({});
  const [verifyemail, setVerifyemail] = useState("");
  const [admincampaign, setAdmincampaign] = useState({});

  function updateOtp(newotp) {
    setOtp(newotp);
  }
  function updateCampaign(newcampaign) {
    setAdmincampaign(newcampaign);
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

  const admincampainContextValue = {
    admincampaign,
    updateCampaign,
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
          <admincampaignContext.Provider value={admincampainContextValue}>
            {children}
          </admincampaignContext.Provider>
        </verifyemailContext.Provider>
      </userContext.Provider>
    </otpContext.Provider>
  );
}
