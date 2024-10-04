export function FilhoIndireta(props) {

    return (
        <div className={`w-full flex flex-col items-center p-7 rounded-md bg-red-800 text-white mt-4`}>
            <div className="flex gap-3">
                <button className="botao" onClick={() => props.alterar("João")}>João</button>
                <button className="botao" onClick={() => props.alterar("Maria")}>Maria</button>
                <button className="botao" onClick={() => props.alterar("Nati")}>Nati</button>
            </div>
        </div>
    )
}