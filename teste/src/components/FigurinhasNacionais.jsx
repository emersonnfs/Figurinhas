import React from 'react'
import { useEffect, useState } from "react";
import Alisson from "../imgs/ImagensFigurinhasNacionais/Alisson.webp"
import Danilo from "../imgs/ImagensFigurinhasNacionais/Danilo.webp"
import ThiagoSilva from "../imgs/ImagensFigurinhasNacionais/ThiagoSilva.webp"
import Marquinhos from "../imgs/ImagensFigurinhasNacionais/Marquinhos.webp"
import AlexSandro from "../imgs/ImagensFigurinhasNacionais/Alex Sandro.webp"
import Casemiro from "../imgs/ImagensFigurinhasNacionais/Casemiro.webp"
import LucasPaqueta from "../imgs/ImagensFigurinhasNacionais/LucasPaqueta.webp"
import Neymar from "../imgs/ImagensFigurinhasNacionais/Neymar.webp"
import Raphinha from "../imgs/ImagensFigurinhasNacionais/Raphinha.webp"
import ViniciusJr from "../imgs/ImagensFigurinhasNacionais/ViniciusJr.webp"
import Richarlison from "../imgs/ImagensFigurinhasNacionais/Richarlison.webp"

const usuario = sessionStorage.getItem("usuario-validado");

export default function FigurinhasNacionais() {
    useEffect (() => {
        if (usuario == null) {
          window.location = "/";
        }
      }, []);

    const [figurinhas, setFigurinhas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/Figurinhas/rest/figurinhas-nacionais")
        .then(response => response.json())
        .then(data => {
            setFigurinhas(data);
        })
        .catch(err => console.error(err));
    }, []);
    const fotos = [Alisson, Danilo, ThiagoSilva, Marquinhos, AlexSandro, Casemiro, LucasPaqueta, Neymar, Raphinha, ViniciusJr, Richarlison];
  
    return (
    <div>
        <h1>
            FIGURINHAS NACIONAIS
        </h1>
        <div>
            {figurinhas.map(figurinha => (
                <div key={figurinha.id}>
                    <img src={fotos[figurinha.id-1]} alt={figurinha.nome} />
                    <h3>{figurinha.nome}</h3>
                    <h3>{figurinha.posicao}</h3>
                    <h3>{figurinha.time}</h3>
                </div>
            ))}
        </div>
    </div>
    );
}
