import { Pagina } from "../../components/Pagina"

export function UseEffect() {

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resposta => resposta.json()) //devolve o conteudo da funcao json
    .then(objeto => console.log(objeto.message)) //conteudo que o json devolve

    return (
        <Pagina titulo="UseEffect" subtitulo="Hooks Básicos">
            <img src="https://images.dog.ceo/breeds/saluki/n02091831_6323.jpg" alt="" />
        </Pagina>
    )
}