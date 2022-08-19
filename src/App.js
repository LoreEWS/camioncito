import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Vehiculos from "./components/Vehiculos";
import Clientes from "./components/Clientes";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camioncito/vehiculos" element={<Vehiculos />} />
          <Route path="/camioncito/clientes" element={<Clientes />} />
      </Routes>
      <Footer />
    </div>
  )
  
  
}

export default App;
