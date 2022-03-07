import React from "react";
import Home from "./views/Home/Index";
import DashBoard from "./views/dashboard/Index";
import LogIn from "./Components/Auth/Index";
import GalenoCotizador from "./views/galeno-cotizador/Index";
import DoctoredCotizador from "./views/doctored-cotizador/Index";
import PremedicCotizador from "./views/premedic-cotizador/Index";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import audio from "./assets/backgroundSound.mp3";
import Download from "./views/download/Index";
import Users from "./views/Users/Index";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/galeno" element={<GalenoCotizador />} />
          <Route path="/dashboard/doctored" element={<DoctoredCotizador />} />
          <Route path="/dashboard/premedic" element={<PremedicCotizador />} />
          <Route path="/dashboard/download" element={<Download />} />
          <Route path="/dashboard/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
