import { otpApi, User, UserApi, AdminApi } from "./axios";

class Services {
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

  // updateUser(user) {
  //   return User.put("/updateuserdetails", user, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  // }

  updateUserById(user) {
    const userid = localStorage.getItem("userid");
    return UserApi.put(`/updateuserdetailsbyId/${userid}`, user);
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
    return User.post("/usersignup", user);
  }

  UserLogin(email, password) {
    return User.post("/userlogin", { email: email, password: password });
  }

  getUser(id) {
    return UserApi.get(`/getuser/${id}`);
  }

  getAllUsers() {
    return UserApi.get("/getusers");
  }

  sendMailToUser(emailData) {
    return AdminApi.post("/sendemailtouser", emailData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  sendMailToMultipleUsers(emailData) {
    return AdminApi.post("/sendemailtomultipleusers", emailData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  userUpdatePassword(email, password) {
    return User.put("/updatepassword", {
      email: email,
      password: password,
    });
  }

  getCampaignById(campaignId)
  {
    return UserApi.get(`getcampaign/${campaignId}`);
  }

  userUpdateCampaign(id,campaign)
  {
      return UserApi.put(`/updatecampaign/${id}`,campaign)
  }


  adminCreateCampaign(campaign) {
    return AdminApi.post("/adminaddcampaigns", campaign);
  }

  adminDeleteCampaign(id) {
    return AdminApi.delete(`/deletecampaign/${id}`);
  }

  admingetAllCampaigns() {
    return AdminApi.get("/getallcampaigns");
  }
  adminupdateCampaign(id, campaign) {
    return AdminApi.put(`/updatecampaign/${id}`, campaign);
  }
  userUpdateUserCardDetails(usercardetails, id) {
    return UserApi.put(`/updateusercarddetails/${id}`, usercardetails);
  }
  userUpdateImage(email, userImage) {
    const requestData = new FormData();
    requestData.append("email", email);
    requestData.append("userImage", userImage);
    return User.put("/uploaduserimage", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  userUpdateProfileImage(email, userProfileImage) {
    const requestData = new FormData();
    requestData.append("email", email);
    requestData.append("userProfileImage", userProfileImage);
    return UserApi.put("/uploaduserprofileimage", requestData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  // Usercreatecampaign(campaign) {
  //   return UserApi.post("/savecampaigns", campaign);
  // }
  Usercreatecampaign(id, campaign) {
    return UserApi.put(`/updateusercampaigns/${id}`, campaign);
  }

  deleteUser(id) {
    return UserApi.delete(`/deleteuser/${id}`);
  }

  UsergetAllCampaigns() {
    return UserApi.get("/getallcampaigns");
  }
}

export default new Services();
