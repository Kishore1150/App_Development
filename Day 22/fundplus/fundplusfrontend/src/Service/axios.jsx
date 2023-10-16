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

// const AdminApi = axios.create({
//   baseURL: process.env.REACT_APP_ADMIN_API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// function makeAdminApiRequest(endpoint, method, data) {
//   const token = localStorage.getItem("token");
//   if (token) {
//     AdminApi.defaults.headers.Authorization = `Bearer ${token}`;
//   }

//   return AdminApi({
//     method: method,
//     url: endpoint,
//     data: data,
//   });
// }




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