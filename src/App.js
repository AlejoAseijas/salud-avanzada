import React from "react";
import Home from "./views/Home/Index";
import DashBoard from "./views/dashboard/Index";
import LogIn from "./Components/Auth/Index";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
