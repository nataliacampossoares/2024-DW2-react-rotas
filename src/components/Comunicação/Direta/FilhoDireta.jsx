export function FilhoDireta(props) {

    return (
        <div className={`w-full flex flex-col items-center p-7 rounded-md bg-red-800 text-white mt-4`}>
            <span className="mt-4">{props.texto}</span>
        </div>
    )
}