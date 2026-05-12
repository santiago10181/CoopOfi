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

const dateFormatter = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-CO', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric',
        timeZone: 'UTC' 
    }).format(date).replace('.', ',');
};

// 👇 1. Recibimos los props desde el padre
const AuxConvsHistory = ({ data, loading, error }) => {
    console.log("Datos recibidos en AuxConvsHistory:", data); // Debug: Verificar datos recibidos
    // 2. Le pasamos 'data' (que viene del padre) al hook de paginación
    const { page, totalPages, currentData, handlePrev, handleNext } = usePagination(data, 5);

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <Header />

            <div className="bg-white rounded-[20px] shadow-xl border border-gray-100 overflow-hidden flex flex-col mt-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <TableHeaderRow />
                        <tbody key={page} className="bg-white divide-y divide-gray-100">
                            
                            {/* ESTADO 1: Cargando */}
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-10 text-center">
                                        <div className="flex justify-center items-center gap-2 text-gray-500">
                                            <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Cargando auxilios...
                                        </div>
                                    </td>
                                </tr>
                            ) : 
                            
                            /* ESTADO 2: Error */
                            error ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-10 text-center text-red-500 font-medium">
                                        {error}
                                    </td>
                                </tr>
                            ) : 
                            
                            /* ESTADO 3: Datos cargados correctamente */
                            currentData.length > 0 ? (
                                currentData.map((solicitud) => {
                                    const statusStyle = getStatusStyles(solicitud.estado);
                                    return (
                                        <TableBodyContent 
                                            key={solicitud.id}
                                            Id={solicitud.radicado} 
                                            Fecha={dateFormatter(solicitud.fecha_solicitud)}
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
                            ) : 
                            
                            /* ESTADO 4: No hay datos */
                            (
                                <tr>
                                    <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                                        No hay solicitudes de auxilio registradas.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer Modularizado condicionado */}
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