import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function ComEstado() {

const [numero, setNumero] = useState(0) //vetor que devolve dois valores. o 0 é o valor inicial. tm mostra com q tipo de dado está sendo usado

function incrementar(){
  setNumero(numero+1) //só usa pra mudar o valor. é uma convenção utilizar o set qnd usa-se numeros
}

  return (
    <Pagina titulo="Com Estado" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4">
          <span className="text-2xl">{numero}</span>
          <button className="bg-purple-400 rounded-md p-2" onClick={incrementar}
            >Incrementar
          </button>
      </div>
    </Pagina>
  );
}

