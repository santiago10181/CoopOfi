const TitleSubForm = ({Value}) => {
    return (
        // La clase 'col-span-full' le dice al Grid: "ocupa todas las columnas de esta fila"
        <div className="bg-yellow-300 px-4 flex items-center justify-center rounded-lg col-span-full mb-4 border-b border-slate-200 pb-2">
            <h5 className="text-xl font-semibold text-slate-800">
                {Value}
            </h5>
        </div>
    )
}

export default TitleSubForm;
