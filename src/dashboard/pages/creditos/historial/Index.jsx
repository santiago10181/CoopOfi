// src/pages/dashboard/credits/historial/index.jsx
import React from 'react';
import { usePagination } from '../hooks/usePagination';
import { getStatusStyles } from './components/SwtichStyle';
import { Header } from './components/Header';
import { TableHeaderRow } from './components/TableHeaderRow';
import { TableBodyContent } from './components/TableBodyContent';
import { FootTable } from './components/FootTable';

const currencyFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});

const dateFormatter = new Intl.DateTimeFormat('es-CO', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

const CreditHistoryTable = ({ creditos = [] }) => {
  // ✅ CORRECCIÓN: Mapeamos exactamente los nombres que envía el Backend
  const creditosOrdenados = [...creditos]
    .map(({ id, fecha_creacion, tipo_credito_nombre, monto_solicitado, plazo_solicitado_meses, estado }) => ({
      id,
      fecha_solicitud: fecha_creacion,
      tipo_credito: tipo_credito_nombre || 'Sin línea',
      monto_solicitado: Number(monto_solicitado),
      plazo_meses: plazo_solicitado_meses,
      estado,
    }))
    .sort((a, b) => new Date(b.fecha_solicitud) - new Date(a.fecha_solicitud));

  const { page, totalPages, currentData, handlePrev, handleNext } =
    usePagination(creditosOrdenados, 5);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <Header />

      <div className="bg-white rounded-[20px] shadow-xl border border-gray-100 overflow-hidden flex flex-col mt-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeaderRow />
            <tbody key={page} className="bg-white divide-y divide-gray-100">
              {currentData.length > 0 ? (
                currentData.map((credito) => {
                  const statusStyle = getStatusStyles(credito.estado);

                  return (
                    <TableBodyContent
                      key={credito.id}
                      Id={credito.id}
                      // ✅ Agregamos un fallback por si la fecha viene null
                      Fecha={credito.fecha_solicitud ? dateFormatter.format(new Date(credito.fecha_solicitud)) : 'N/A'}
                      Tipo={credito.tipo_credito}
                      Valor={currencyFormatter.format(credito.monto_solicitado)}
                      Plazo={`${credito.plazo_meses} meses`}
                    >
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text} border border-transparent`}>
                        {statusStyle.icon}
                        {statusStyle.label}
                      </span>
                    </TableBodyContent>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                    No hay registros disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <FootTable
          page={page}
          totalPages={totalPages}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default CreditHistoryTable;