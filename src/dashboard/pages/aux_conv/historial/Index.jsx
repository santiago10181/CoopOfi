import React from 'react';
import { usePagination } from '../hooks/usePagination'; 
import { getStatusStyles } from './components/SwtichStyle';
import { Header } from './components/Header';
import { TableHeaderRow } from './components/TableHeaderRow';
import { TableBodyContent } from './components/TableBodyContent';
import { solicitudesMock } from './DataEjemplo';
import { FootTable } from './components/FootTable';

// Instancia única del formateador
const currencyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

const AuxConvsHistory = () => {
    // Llamamos al hook. Se recalcula automáticamente si el padre renderiza.
    const { page, totalPages, currentData, handlePrev, handleNext } = usePagination(solicitudesMock, 5);

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <Header />

            <div className="bg-white rounded-[20px] shadow-xl border border-gray-100 overflow-hidden flex flex-col mt-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <TableHeaderRow />
                        <tbody key={page} className="bg-white divide-y divide-gray-100">
                            {currentData.length > 0 ? (
                                currentData.map((solicitud) => {
                                    const statusStyle = getStatusStyles(solicitud.estado);
                                    return (
                                        <TableBodyContent 
                                            key={solicitud.id}
                                            Id={solicitud.id}
                                            Fecha={solicitud.fecha}
                                            Tipo={solicitud.tipo}
                                            Valor={currencyFormatter.format(solicitud.monto)}
                                            Plazo={solicitud.plazo}
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
                                    <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                                        No hay registros disponibles.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer Modularizado */}
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

export default AuxConvsHistory;