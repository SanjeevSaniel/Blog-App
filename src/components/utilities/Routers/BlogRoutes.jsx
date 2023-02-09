import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./../../utilities/Navbar/Navbar";

import Home from "./../../pages/Home";
import Bollywood from "./../../pages/Bollywood";
import Technology from "./../../pages/Technology";
import Hollywood from "./../../pages/Hollywood";
import Fitness from "./../../pages/Fitness";
import Food from "./../../pages/Food";
import Error from "./../../pages/Error";

import Information1 from "./../Information/Information1/Information1";
import Information2 from "./../Information/Information2/Information2";
import Information3 from "./../Information/Information3/Information3";
import LoginForm from "./../Form/LoginForm";
import RegisterForm from "./../Form/RegisterForm";

const BlogRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="/Bollywood" element={<Bollywood />}></Route>
          <Route path="/Technology" element={<Technology />}></Route>
          <Route path="/Hollywood" element={<Hollywood />}></Route>
          <Route path="/Fitness" element={<Fitness />}></Route>
          <Route path="/Food" element={<Food />}></Route>
          <Route path="/Login" element={<LoginForm />}></Route>
          <Route path="/Register" element={<RegisterForm />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
        <Route path="/Information1" element={<Information1 />}></Route>
        <Route path="/Information2" element={<Information2 />}></Route>
        <Route path="/Information3" element={<Information3 />}></Route>
      </Routes>
    </div>
  );
};

export default BlogRoutes;
