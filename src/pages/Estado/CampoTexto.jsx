import { useState } from "react"
import { Pagina } from "../../components/Pagina"

export function CampoTexto() {

    const [texto, setTexto] = useState("")

    const handleChange = (event) => {
        setTexto(event.target.value);
    };

    function limpar(){
        setTexto("")
    }

    return (
        <Pagina titulo="Campo de Texto" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4">
            <input type="text" className="bg-zinc-500" value={texto} onChange={handleChange}/> 
            <button onClick={limpar} className="bg-red-800 p-2 rounded-md">Limpar</button>
            <span>{texto}</span>
        </div>
    </Pagina>
    )
}
