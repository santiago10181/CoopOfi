const Metricas = ( { titulo, valor, mostrarSaldos, formatCOP  } ) => {
    return(
        <div>
            <p className="text-gray-400 mb-0.5">{titulo}</p>
            <p className="font-bold text-gray-800">
                {mostrarSaldos ? formatCOP(valor) : '••••'}
            </p>
        </div>
    )
}

export default Metricas;