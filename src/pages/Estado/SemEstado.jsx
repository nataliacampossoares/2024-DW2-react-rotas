import { Pagina } from "../../components/Pagina";

export function SemEstado() {

  return (
    <Pagina titulo="Sem Estado" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4">
          <span>0</span>
          <button>Incrementar</button>
      </div>
    </Pagina>
  );
}
