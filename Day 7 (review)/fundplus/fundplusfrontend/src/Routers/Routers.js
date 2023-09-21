import React from "react";
import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
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
          <Route
            path="/usereditprofile"
            element={<Usereditprofile />}
          />
          <Route path="/userdonations" element={<Userdonations/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
