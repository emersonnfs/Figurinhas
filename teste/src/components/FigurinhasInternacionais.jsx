import React from 'react'
import { useEffect } from "react";

const usuario = sessionStorage.getItem("usuario-validado");

export default function FigurinhasInternacionais() {
    useEffect(() => {
        if (usuario == null) {
          window.location = "/";
        }
      }, []);
  
    return (
    <div>
        <h1>
            FIGURINHAS INTERNACIONAIS
        </h1>
    </div>
  )
}
