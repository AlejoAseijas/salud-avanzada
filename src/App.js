import React from "react";
import Home from "./Components/Home/Index";
import AboutUs from "./Components/aboutUs/Index";
import Providers from "./Components/principalProviders/Index";
import Contact from "./Components/Contact/Index";
import Footer from "./Components/Footer/Index";
import "./app.scss";
import Swal from "sweetalert2";
import audio from "./assets/backgroundSound.mp3";

function App() {
  const playAudio = () => {
    Swal.fire({
      icon: "question",
      title: "Desea escuhar musica de fondo?",
      showDenyButton: true,
      confirmButtonText: "si",
    }).then((result) => {
      if (result.isConfirmed) {
        new Audio(audio).play();
      }
    });
  };
  playAudio();
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
