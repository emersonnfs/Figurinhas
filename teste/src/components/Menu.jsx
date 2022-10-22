import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };

  const usuario = sessionStorage.getItem("usuario-validado");

  return (
    <header>
        <div>
            <Link to="/home">Home</Link>
            <Link to="/figurinhas-nacionais">Figurinhas Nacionais</Link>
            <Link to="/figurinhas-internacionais">Figurinhas Internacionais</Link> 
        </div>
        <div>
            <div>
                <Link to="/">Login</Link>
                <span>{usuario}</span>
            </div>
            <div><button style={{ display: usuario != null ? "inline" : "none" }} onClick={logout}>Logout</button></div>
        </div>
    </header>
  );
}