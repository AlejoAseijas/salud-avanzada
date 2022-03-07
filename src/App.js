import React, { useState, useEffect } from "react";
import Home from "./views/Home/Index";
import DashBoard from "./views/dashboard/Index";
import LogIn from "./Components/Auth/Index";
import GalenoCotizador from "./views/galeno-cotizador/Index";
import DoctoredCotizador from "./views/doctored-cotizador/Index";
import PremedicCotizador from "./views/premedic-cotizador/Index";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./views/download/Index";
import Users from "./views/Users/Index";
import { isUser } from "./services/index";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const users = async () => {
      let state = await isUser();
      setIsLogin(state);
    };
    users();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logIn" element={isLogin ? <DashBoard /> : <LogIn />} />
          <Route
            path="/dashboard"
            element={isLogin ? <DashBoard /> : <LogIn />}
          />
          <Route
            path="/dashboard/galeno"
            element={isLogin ? <GalenoCotizador /> : <LogIn />}
          />
          <Route
            path="/dashboard/doctored"
            element={isLogin ? <DoctoredCotizador /> : <LogIn />}
          />
          <Route
            path="/dashboard/premedic"
            element={isLogin ? <PremedicCotizador /> : <LogIn />}
          />
          <Route
            path="/dashboard/download"
            element={isLogin ? <Download /> : <LogIn />}
          />
          <Route
            path="/dashboard/users"
            element={isLogin ? <Users /> : <LogIn />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
