import React from 'react'
import { useEffect,useState } from "react";
import Courtois from "../imgs/ImagensFigurinhasInternacionais/Courtois.webp"
import AlexanderArnold from "../imgs/ImagensFigurinhasInternacionais/Alexander-Arnold.webp"
import VanDijk from "../imgs/ImagensFigurinhasInternacionais/vanDijk.webp"
import RubenDias from "../imgs/ImagensFigurinhasInternacionais/RubenDias.webp"
import Davies from "../imgs/ImagensFigurinhasInternacionais/Davies.webp"
import Kimmich from "../imgs/ImagensFigurinhasInternacionais/Kimmich.webp"
import DeBruyne from "../imgs/ImagensFigurinhasInternacionais/DeBruyne.webp"
import Modric from "../imgs/ImagensFigurinhasInternacionais/Modric.webp"
import Messi from "../imgs/ImagensFigurinhasInternacionais/Messi.webp"
import CristianoRonaldo from "../imgs/ImagensFigurinhasInternacionais/CristianoRonaldo.webp"
import Benzema from "../imgs/ImagensFigurinhasInternacionais/Benzema.webp"


const usuario = sessionStorage.getItem("usuario-validado");

export default function FigurinhasInternacionais() {
    useEffect(() => {
        if (usuario == null) {
          window.location = "/";
        }
      }, []);

    const [figurinhas, setFigurinhas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/Figurinhas/rest/figurinhas-internacionais")
        .then(response => response.json())
        .then(data => {
            setFigurinhas(data);
        })
        .catch(err => console.error(err));
    }, []);

    const fotos = [Courtois, AlexanderArnold, VanDijk, RubenDias, Davies, Kimmich, DeBruyne, Modric, Messi, CristianoRonaldo, Benzema];
    

    return (
    <div>
        <h1>
            FIGURINHAS INTERNACIONAIS
        </h1>
        <div>
            {figurinhas.map(figurinha => (
                <div key={figurinha.id}>
                    <img src={fotos[figurinha.id-1]} alt={figurinha.nome} />
                    <h3>{figurinha.nome}</h3>
                    <h3>{figurinha.posicao}</h3>
                    <h3>{figurinha.time}</h3>
                    <h3>{figurinha.pais}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}
