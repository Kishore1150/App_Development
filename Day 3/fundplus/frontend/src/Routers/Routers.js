import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Forgotpassword from '../Pages/Forgotpassword';
import Home from '../Pages/Home';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Forgotpassword/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers