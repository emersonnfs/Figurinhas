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
import { DivFigurinha,ImgFigurinha,DivPaginaFigurinhas,DivCamposFigurinha,PFigurinha,ImgBandeira,DivNomeP,DivPagina,H1Titulo} from '../style/styled';
import Belgica from "../imgs/ImagensBandeiras/bandeiraBelgica.webp"
import Inglaterra from "../imgs/ImagensBandeiras/bandeiraInglaterra.png"
import Alemanha from "../imgs/ImagensBandeiras/bandeiraAlemanha.png"
import Argentina from "../imgs/ImagensBandeiras/bandeiraArgentina.jpg"
import Canada from "../imgs/ImagensBandeiras/bandeiraCanada.webp"
import Croacia from "../imgs/ImagensBandeiras/bandeiraCroacia.webp"
import Franca from "../imgs/ImagensBandeiras/bandeiraFranca.png"
import Holanda from "../imgs/ImagensBandeiras/bandeiraHolanda.png"
import Portugal from "../imgs/ImagensBandeiras/bandeiraPortugal.jpg"

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

    const fotos = [Courtois, AlexanderArnold, VanDijk, RubenDias, Davies, Kimmich, DeBruyne, Modric, Messi,      CristianoRonaldo, Benzema];
    const bandeiras=[Belgica,Inglaterra,      Holanda, Portugal,  Canada, Alemanha,Belgica,  Croacia ,Argentina, Portugal,         Franca];
    return (
    <DivPagina>
        <H1Titulo>
            FIGURINHAS INTERNACIONAIS
        </H1Titulo>
        <DivPaginaFigurinhas>
            {figurinhas.map(figurinha => (
                    <div key={figurinha.id}>
                        <DivFigurinha>
                            <DivCamposFigurinha>
                                <PFigurinha>{figurinha.pais}</PFigurinha>
                                <ImgBandeira src={bandeiras[figurinha.id-1]} alt={figurinha.pais} />
                            </DivCamposFigurinha>
                            <ImgFigurinha src={fotos[figurinha.id-1]} alt={figurinha.nome} />
                            <DivCamposFigurinha>
                                <DivNomeP>
                                    <PFigurinha>Nome:</PFigurinha>
                                    <PFigurinha>{figurinha.nome}</PFigurinha>
                                </DivNomeP>
                                <DivNomeP>
                                    <PFigurinha>Pos: {figurinha.posicao}</PFigurinha>
                                    <PFigurinha>Time: {figurinha.time}</PFigurinha>    
                                </DivNomeP>
                            </DivCamposFigurinha>
                        </DivFigurinha>
                    </div>
            ))}
        </DivPaginaFigurinhas>
    </DivPagina>
  )
}
