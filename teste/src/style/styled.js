import styled from 'styled-components'

export const DivFigurinha = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: fit-content;
    border: 1px solid black;
    margin: 15px;
    padding: 15px;
    background-color: tan;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`
export const ImgFigurinha = styled.img`
    width: 285px;
    height: 360px;
    border-radius: 5px;
`
export const DivPaginaFigurinhas = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: fit-content;
    height: 100%;
    margin: 20px;
    padding: 20px;
    background-color: #f5f5f5;
`
export const DivCamposFigurinha = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: fit-content;
    border-radius: 5px;
    background-color: #79d1ff;
    margin: 2px;
    padding: 2px;
`
export const PFigurinha = styled.p`
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    margin: 1px;
    padding: 1px;
`
export const ImgBandeira = styled.img`
    width: 13px;
    height: 13px;
    margin: 1px;
    padding: 1px;
    border-radius: 50%;
` 
export const DivNomeP= styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 30px;
    border-radius: 5px;
    background-color: #d7f1ff;
`
export const DivPagina= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: white;
` 
export const H1Titulo = styled.h1`
    font-size: 40px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    margin: 1px;
    padding: 1px;
`
export const ButtonLogout = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: #ff0000;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin: 1px;
    padding: 1px;
    cursor: pointer;
`
export const HeaderMenu = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: #fffea5;
`
export const DivButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 400px;
    height: 45px;
    margin-right: 5px;
    margin-left: 5px;   
    padding: 2px;
`
export const ButtonMenu = styled.button`
    width: fit-content;
    height: 30px;
    border-radius: 5px;
    background-color: #007889;
    color: #000;
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin: 1px;
    padding: 1px;
    cursor: pointer;
`
export const DivButtonsDireita = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 45px;
    margin-right: 5px;
    margin-left: 5px;
    padding: 2px;
`
export const SpanNomeUsuario = styled.span`
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    margin: 1px;
    padding: 1px;
`
export const LabelLogin = styled.label`
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    margin: 1px;
    padding: 1px;
`   
export const DivInputLogin = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 40px;
    border-radius: 5px;
    margin: 2px;
    padding: 2px;
`   
export const DivEntrar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
`
export const ButtonEntrar = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: #007889;
    color: #000;
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin: 1px;
    padding: 1px;
    cursor: pointer;
`    
export const FieldsetLogin = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: fit-content;
    border-radius: 20%;
    background-color: #fffea5;
    margin: 2px;
    padding: 2px;
`
export const H4Login = styled.h4`
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
    margin: 1px;
    padding: 1px;
` 
export const FooterDesign = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #fffea5;
`