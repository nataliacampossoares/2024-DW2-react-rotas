import { useEffect, useState } from "react"
import { Pagina } from "../../components/Pagina"

export function UseEffect() {
    
    const [url, setUrl] = useState("")
    
    function trocarImagem() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resposta => resposta.json()) 
        .then(objeto => setUrl(objeto.message)) 
    }

    useEffect(trocarImagem, [])

    return (
        <Pagina titulo="UseEffect" subtitulo="Hooks Básicos">
            <div className="flex flex-col">
            <img src={url} alt="" />
            <button className="bg-red-800 px-3 py-2 rounded-md mr-2"
                    onClick={trocarImagem}
            >Trocar</button>
            </div>
        </Pagina>
    )
}