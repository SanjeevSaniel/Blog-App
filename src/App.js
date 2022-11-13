import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Bollywood from "./components/pages/Bollywood";
import Technology from "./components/pages/Technology";
import Hollywood from "./components/pages/Hollywood";
import Fitness from "./components/pages/Fitness";
import Food from "./components/pages/Food";
import Error from "./components/pages/Error";
import "./App.css";
import Information1 from "./components/Information/Information1/Information1";
import Information2 from "./components/Information/Information2/Information2";
import Information3 from "./components/Information/Information3/Information3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path="/Bollywood" element={<Bollywood />}></Route>
            <Route path="/Technology" element={<Technology />}></Route>
            <Route path="/Hollywood" element={<Hollywood />}></Route>
            <Route path="/Fitness" element={<Fitness />}></Route>
            <Route path="/Food" element={<Food />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
          <Route path="/Information1" element={<Information1 />}></Route>
          <Route path="/Information2" element={<Information2 />}></Route>
          <Route path="/Information3" element={<Information3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
