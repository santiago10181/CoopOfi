const CuadroHistorial = () => {
    return (
         <div className="p-4 md:p-6 lg:p-8">
      {/* TAREA 2: botón + título van aquí (lo verás abajo) */}

      {/* TAREA 1: Historial de solicitudes */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-base md:text-lg font-semibold text-gray-800">
            Historial de solicitudes
          </h2>
          <span className="text-xs md:text-sm text-gray-500">
            Últimas solicitudes registradas
          </span>
        </div>

        {/* Contenedor scroll horizontal en móviles */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">Id</th>
                <th className="px-4 py-3 whitespace-nowrap">Fecha Solicitud</th>
                <th className="px-4 py-3 whitespace-nowrap">Doc. Identidad</th>
                <th className="px-4 py-3 whitespace-nowrap">Nombres del Asociado</th>
                <th className="px-4 py-3 whitespace-nowrap">Línea de Crédito</th>
                <th className="px-4 py-3 whitespace-nowrap">Vr. Solicitado</th>
                <th className="px-4 py-3 whitespace-nowrap">Plazo</th>
                <th className="px-4 py-3 whitespace-nowrap">Estado</th>
                <th className="px-4 py-3 whitespace-nowrap">Opciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Fila de ejemplo (luego la remplazas por .map de tus datos) */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">001</td>
                <td className="px-4 py-3 text-gray-700">04/12/2025</td>
                <td className="px-4 py-3 text-gray-700">1.234.567.890</td>
                <td className="px-4 py-3 text-gray-700">Juan Pérez</td>
                <td className="px-4 py-3 text-gray-700">Libre inversión</td>
                <td className="px-4 py-3 text-gray-700">$ 5.000.000</td>
                <td className="px-4 py-3 text-gray-700">24 meses</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    En estudio
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-xs text-blue-600 hover:underline mr-3">
                    Ver
                  </button>
                  <button className="text-xs text-gray-500 hover:text-red-600">
                    Cancelar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}
export default CuadroHistorial;