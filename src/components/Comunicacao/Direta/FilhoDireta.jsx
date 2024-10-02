export function FilhoDireta(props) {

    return (
        <div className={`
        w-full flex flex-col items-center p-7 rounded-md bg-red-500 text-white mt-4
        `}>
            Filho Direta
            <span className="mt-4">{props.texto}</span>
        </div>
    )
}