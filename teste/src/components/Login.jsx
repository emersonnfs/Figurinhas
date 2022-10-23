import React from "react";
import { useState } from "react";
import {H1Titulo,DivPagina,LabelLogin,DivInputLogin,DivEntrar,ButtonEntrar,FieldsetLogin,H4Login} from "../style/styled";

export default function Login() {
  const [usuario, setUsuario] = useState({
    login: "",
    senha: "",
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const logar = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    };

    const response = await fetch(
      "http://localhost:8080/Figurinhas/rest/login",
      requestOptions
    );

    const data = await response.json();

    if (data.login) {
      sessionStorage.setItem("usuario-validado", data.login);
      window.location = "/home";
    } else {
      window.location = "/";
    }
  };

  return (
    <DivPagina>
      <H1Titulo>LOGIN DE USUÁRIOS</H1Titulo>
      <div>
        <form onSubmit={logar}>
          <FieldsetLogin>
            <H4Login>LOGIN</H4Login>
            <DivInputLogin>
              <LabelLogin htmlFor="idLogin">Usuário</LabelLogin>
              <input
                type="text"
                name="login"
                id="idLogin"
                placeholder="Login"
                value={usuario.login}
                onChange={handleChange}
              />
            </DivInputLogin>
            <DivInputLogin>
              <LabelLogin htmlFor="idSenha">Senha</LabelLogin>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Senha"
                value={usuario.senha}
                onChange={handleChange}
              />
            </DivInputLogin>
            <DivEntrar>
              <ButtonEntrar>Entrar</ButtonEntrar>
            </DivEntrar>
          </FieldsetLogin>
        </form>
      </div>
    </DivPagina>
  );
}