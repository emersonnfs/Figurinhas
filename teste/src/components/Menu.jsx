import React from "react";
import { Link } from "react-router-dom";
import {BiLogOutCircle as Logout} from "react-icons/bi";
import {ButtonLogout,HeaderMenu,DivButtons,ButtonMenu,DivButtonsDireita,SpanNomeUsuario} from "../style/styled";

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };

  const usuario = sessionStorage.getItem("usuario-validado");

  return (
    <HeaderMenu>
        <DivButtons>
            <Link to="/home"><ButtonMenu>HOME</ButtonMenu></Link>
            <Link to="/figurinhas-nacionais"><ButtonMenu>FIGURINHAS NACIONAIS</ButtonMenu></Link>
            <Link to="/figurinhas-internacionais"><ButtonMenu>FIGURINHAS INTERNACIONAIS</ButtonMenu></Link> 
        </DivButtons>
        <DivButtonsDireita>
            <div>
                <Link to="/" style={{ display: usuario == null ? "inline" : "none"}}><ButtonMenu>LOGIN</ButtonMenu></Link>
                <SpanNomeUsuario style={{ display: usuario != null ? "inline" : "none" }}>Bem vindo {usuario}</SpanNomeUsuario>
            </div>
            <div><ButtonLogout style={{ display: usuario != null ? "inline" : "none" }} onClick={logout}><Logout/></ButtonLogout></div>
        </DivButtonsDireita>
    </HeaderMenu>
  );
}