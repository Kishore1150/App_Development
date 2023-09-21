import axios from "axios";

const otpApi = axios.create({
  baseURL: process.env.REACT_APP_OTP_BASE_URL,
});


const usersignup = axios.create({
  baseURL: process.env.REACT_APP_USER_BASE_URL,
});

export{otpApi,usersignup};