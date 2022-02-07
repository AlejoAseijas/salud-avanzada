import React from "react";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
//import NavBar from "./Components/NavBar/Index";
import Home from "./Components/Home/Index";
import AboutUs from "./Components/aboutUs/Index";
import Providers from "./Components/principalProviders/Index";
import Ccontact from "./Components/Contact/Index";
function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Providers />
      <Ccontact />
    </>
  );
}

export default App;
