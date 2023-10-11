import axios from "axios";

const otpApi = axios.create({
  baseURL: process.env.REACT_APP_OTP_BASE_URL,
});


// const jwtToken=localStorage.getItem("token");
const UserApi = axios.create({
  baseURL: process.env.REACT_APP_USER_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

const AdminApi = axios.create({
  baseURL: process.env.REACT_APP_ADMIN_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});




const User = axios.create({
baseURL: process.env.REACT_APP_USER_BASE_URL,
});

// const uploadcampaignimage = axios.create({
//   baseURL: process.env.REACT_APP_CLOUDINARY_BASE_URL,
// });
export {
  otpApi,
  User,
  UserApi,
  AdminApi
};