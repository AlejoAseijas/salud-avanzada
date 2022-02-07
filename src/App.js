import React from "react";
import Home from "./Components/Home/Index";
import AboutUs from "./Components/aboutUs/Index";
import Providers from "./Components/principalProviders/Index";
import Contact from "./Components/Contact/Index";
import Footer from "./Components/Footer/Index";
import "./app.scss";
function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Providers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
