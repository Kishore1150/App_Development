import React from "react";
import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import Forgotpassword from "../Pages/ForgotPassword/Forgotpassword";
import Forgotpasswordotpverify from "../Pages/Forgotpasswordotpverify/Forgotpasswordotpverify";
import Home from "../Pages/Home/Home";
import Otpverify from "../Pages/OtpVerify/Otpverify";
import SignIn from "../Pages/Signin/SignIn";
import Signup from "../Pages/Signup/Signup";
import Verifyface from "../Pages/VerifyFace/Verifyface";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
