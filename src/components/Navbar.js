import React from 'react'
import { Link } from "react-router-dom";
import { FiTruck } from 'react-icons/fi';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger py-2">
        <Link to="/" className="navbar-brand ms-3"><span className="me-2 fs-3"><FiTruck /></span>Camioncito S.A.</Link>
        <Link to="/camioncito/vehiculos" className="nav-link text-light ms-3">Vehiculos</Link>
        <Link to="/camioncito/clientes" className="nav-link text-light ms-3">Clientes</Link>
        
    </nav>
  )
}

export default Navbar;