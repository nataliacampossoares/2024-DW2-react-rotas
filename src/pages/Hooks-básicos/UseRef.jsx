import { useRef, useState } from "react"
import { Pagina } from "../../components/Pagina"

export function UseRef() {

    const [estado, setEstado] = useState(0) //precisa de funcao
    const referencia = useRef(0) //nao precisa de funcao

    function incrementaEstado() {
        setEstado(estado + 1) 
    }

    function incrementaRef() {
        referencia.current = referencia.current + 1
        console.log(referencia.current) //dá pra ver ele mudando
    }

    return (
        <Pagina  titulo="UseRef" subtitulo="Hooks Básicos">
            <div className="flex flex-col">
                <div className="mb-2">
                    {`REFERÊNCIA: ${referencia.current} || ESTADO: ${estado}`}
                </div>
                <div>
                    <button className="bg-red-800 px-3 py-2 rounded-md mr-2"
                    onClick={incrementaRef}
                    >Ref +</button>
                    <button className="bg-blue-800 px-3 py-2 rounded-md"
                    onClick={incrementaEstado}
                    >Estado +</button>
                </div>
            </div>
        </Pagina>
    )
}