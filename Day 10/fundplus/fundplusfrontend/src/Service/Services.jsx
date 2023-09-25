import { otpApi, usersignup } from "./axios";

export default new (class Services {
  SendOtp(email, name) {
    const requestData = new FormData();
    requestData.append("email", email);
    requestData.append("name", name);
    return otpApi.post("/signup/sendotp", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  sendVerifyOtp(email) {
    const requestData = new FormData();
    requestData.append("email", email);
    return otpApi.post("/verifyemail/sendotp", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  UserSignup(user) {
    return usersignup.post("/signup", user);
  }

  UserLogin(email, password) {
    return usersignup.post("/login", { email: email, password: password });
  }

  userUpdatePassword(email, password) {
    return usersignup.put("/updatepassword", {
      email: email,
      password: password,
    });
  }
  userUpdateImage(email, userImage) {
    const requestData = new FormData();
    requestData.append("email", email);
    requestData.append("userImage", userImage);
    return usersignup.put("/uploaduserimage", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
})();
