import { ArrowUpRight } from 'lucide-react';

import { TableBodyData } from '../../components/TableBodyData';
import { AccionsTableData } from '../../components/AccionsTableData';

import { usePagination } from '../hooks/usePagination';
import { getStatusStyles } from './components/SwtichStyle';
import { Header } from './components/Header';
import { TableHeaderRow } from './components/TableHeaderRow';
import { FootTable } from './components/FootTable';

const dateFormatter = (dateString) => {
  if (!dateString) return 'Sin fecha';

  const date = new Date(dateString);

  return new Intl.DateTimeFormat('es-CO', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
    .format(date)
    .replace('.', ',');
};

const TableBodyContent = ({
  id,
  fecha,
  nombreConvenio,
  codigoConvenio,
  tipoConvenio,
  descripcion,
  children,
}) => {
  return (
    <tr className="hover:bg-yellow-50/30 transition-colors duration-150 group">
      {/* Columna 1: ID solicitud y fecha */}
      <TableBodyData
        main={`#${id}`}
        complement={fecha}
      />

      {/* Columna 2: Detalles */}
      <TableBodyData
        main={nombreConvenio || 'Auxilio / convenio'}
        complement={descripcion || codigoConvenio || 'Sin información adicional'}
      >
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black flex items-center justify-center text-[#FFD700]">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </TableBodyData>

      {/* Columna 3: Tipo */}
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
          {tipoConvenio || 'Otro'}
        </span>
      </td>

      {/* Columna 4: Estado */}
      <td className="px-6 py-4 whitespace-nowrap text-center">
        {children}
      </td>

      {/* Columna 5: Acciones */}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <AccionsTableData />
      </td>
    </tr>
  );
};

const AuxConvsHistory = ({ data = [], loading, error }) => {
  const { page, totalPages, currentData, handlePrev, handleNext } =
    usePagination(data, 5);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <Header />

      <div className="bg-white rounded-[20px] shadow-xl border border-gray-100 overflow-hidden flex flex-col mt-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeaderRow />

            <tbody key={page} className="bg-white divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center">
                    <div className="flex justify-center items-center gap-2 text-gray-500">
                      <svg
                        className="animate-spin h-5 w-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>

                      Cargando solicitudes...
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-red-500 font-medium"
                  >
                    {error}
                  </td>
                </tr>
              ) : currentData.length > 0 ? (
                currentData.map((solicitud) => {
                  const statusStyle = getStatusStyles(solicitud.estado);

                  return (
                    <TableBodyContent
                      key={solicitud.id}
                      id={solicitud.id}
                      fecha={dateFormatter(solicitud.fecha_creacion)}
                      nombreConvenio={solicitud.auxilioConvenio}
                      codigoConvenio={solicitud.codigo}
                      tipoConvenio={solicitud.tipo}
                      descripcion={solicitud.descripcion}
                    >
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}
                      >
                        {statusStyle.icon}
                        {statusStyle.label}
                      </span>
                    </TableBodyContent>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No hay solicitudes de auxilio registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {!loading && !error && data.length > 0 && (
          <FootTable
            page={page}
            totalPages={totalPages}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default AuxConvsHistory;