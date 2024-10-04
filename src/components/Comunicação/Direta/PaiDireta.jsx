import { useState } from "react"
import { FilhoDireta } from "./FilhoDireta"

export function PaiDireta() {

    const [nome, setNome] = useState("Filho direta")

    return (
        <div className={`
                w-full flex flex-col items-center p-7 rounded-md bg-zinc-700 text-white g-4
                `}>

            <div className="flex gap-3">
                <button className="botao" onClick={() => setNome("João")}>João</button>
                <button className="botao" onClick={() => setNome("Maria")}>Maria</button>
                <button className="botao" onClick={() => setNome("Nati")}>Nati</button>
            </div>
            {/* <span className="mt-4">{nome}</span> */}
            <FilhoDireta texto={nome}/>
        </div>
    )
}