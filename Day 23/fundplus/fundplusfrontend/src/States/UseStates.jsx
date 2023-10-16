import React, { createContext, useContext, useState } from "react";

const otpContext = createContext();

const userContext = createContext();

const verifyemailContext = createContext();

const editcampaignContext = createContext();

const showcampaignContext = createContext();

const usershowcampaignContext = createContext();

export function useUser() {
  return useContext(userContext);
}

export function useUserShowCampagin() {
  return useContext(usershowcampaignContext);
}
export function useShowCampaign() {
  return useContext(showcampaignContext);
}

export function useOtp() {
  return useContext(otpContext);
}

export function useVerifyEmail() {
  return useContext(verifyemailContext);
}

export function useEditCampaign() {
  return useContext(editcampaignContext);
}

export function UseStates({ children }) {
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({});
  const [verifyemail, setVerifyemail] = useState("");
  const [editcampaign, setEditcampaign] = useState({});
  const [showcampaign, setShowcampaign] = useState({});
  const [usershowcampaign, setUsershowcampaign] = useState({});

  function updateOtp(newotp) {
    setOtp(newotp);
  }
  function updateUserShowCampaign(newusershowcampaign) {
    setUsershowcampaign(newusershowcampaign);
  }
  function updateShowCampaign(newcampaign) {
    setShowcampaign(newcampaign);
  }
  function updateCampaign(newcampaign) {
    setEditcampaign(newcampaign);
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

  const usershowcampaignContextValue = {
    usershowcampaign,
    updateUserShowCampaign,
  };

  const editcampainContextValue = {
    editcampaign,
    updateCampaign,
  };

  const showcampaignContextValue = {
    showcampaign,
    updateShowCampaign,
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
          <editcampaignContext.Provider value={editcampainContextValue}>
            <showcampaignContext.Provider value={showcampaignContextValue}>
              <usershowcampaignContext.Provider
                value={usershowcampaignContextValue}>
                {children}
              </usershowcampaignContext.Provider>
            </showcampaignContext.Provider>
          </editcampaignContext.Provider>
        </verifyemailContext.Provider>
      </userContext.Provider>
    </otpContext.Provider>
  );
}
