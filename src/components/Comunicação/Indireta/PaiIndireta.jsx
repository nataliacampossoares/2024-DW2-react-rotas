import { useState } from "react"
import { FilhoIndireta } from "./FilhoIndireta"

export function PaiIndireta() {

    const [nome, setNome] = useState("Filho indireta");

    function alterarNome(novoNome) {
        setNome(novoNome)
    }

    return (
        <div className={`w-full flex flex-col items-center p-7 rounded-md bg-zinc-700 text-white g-4`}>
            <span className="mt-4">{nome}</span>
            <FilhoIndireta alterar={alterarNome}/>
        </div>
    )
}