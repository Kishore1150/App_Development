import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Forgotpassword from "../Pages/ForgotPassword/Forgotpassword";
import Forgotpasswordotpverify from "../Pages/Forgotpasswordotpverify/Forgotpasswordotpverify";
import Home from "../Pages/Home/Home";
import Otpverify from "../Pages/OtpVerify/Otpverify";
import SignIn from "../Pages/Signin/SignIn";
import Signup from "../Pages/Signup/Signup";
import Verifyface from "../Pages/VerifyFace/Verifyface";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { Usereditprofile } from "../Pages/Users/Editprofile/Usereditprofile";
import Usercampaigndonated from "../Pages/Users/Userdashboard/Usercampaigndonated";
import { Userdonations } from "../Pages/Users/Userdashboard/Userdonations";
import { Usereditpassword } from "../Pages/Users/Editprofile/Usereditpassword";
import { Userdeleteprofile } from "../Pages/Users/Editprofile/Userdeleteprofile";
import About from "../Pages/About/About";
import { Privacypolicy } from "../Pages/Privacypolicy/Privacypolicy";
import Termsandservice from "../Pages/Termsandservice/Termsandservice";
import Contact from "../Pages/Contact/Contact";
import { Faq } from "../Pages/Faq/Faq";
import Usercardpaymentdetails from "../Components/Usercomponents/Userprofilesidebar/Usercardpaymentdetails";
import { Usereditcard } from "../Pages/Users/Editprofile/Usereditcard";
import { Startcampaign } from "../Pages/Campaign/Startcampaign";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/otpverify" element={<Otpverify />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/forgotpasswordotpverification"
            element={<Forgotpasswordotpverify />}
          />
          <Route path="/verifyface" element={<Verifyface />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/usercampaigndonated"
            element={<Usercampaigndonated />}
          />
          <Route path="/usereditprofile" element={<Usereditprofile />} />
          <Route path="/userdonations" element={<Userdonations />} />
          <Route path="/usereditpassword" element={<Usereditpassword />} />
          <Route path="/userdeleteprofile" element={<Userdeleteprofile />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsandconditions" element={<Termsandservice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/usercardpaymentdetails" element={<Usereditcard />} />
          <Route path="/createcampaign" element={<Startcampaign />} />



        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
