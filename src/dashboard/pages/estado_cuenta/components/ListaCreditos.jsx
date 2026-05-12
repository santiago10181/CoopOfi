import React from 'react';
import { AlertTriangle } from 'lucide-react';
import CreditoItem from './CreditoItem';
import { Titulos } from './MiniComponents/Titulos';
import { formatCOP } from './utilidades/formatos';

const ListaCreditos = ({ creditos, mostrarSaldos }) => {
  const totalDeuda   = creditos.reduce((acc, c) => acc + c.saldo, 0);
  const creditosMora = creditos.filter((c) => c.diasMora > 0);
  const tieneMora    = creditosMora.length > 0;

  return (
    <section>
      {/* Título de sección */}
      <Titulos titulo="Créditos Activos" />

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

        {/* Banner de mora — solo se muestra si hay créditos en mora */}
        {tieneMora && (
          <div className="flex items-start gap-2 px-4 py-3 bg-yellow-50 border-b border-yellow-100 text-yellow-800 text-xs">
            <AlertTriangle size={14} className="mt-0.5 shrink-0" />
            <p>
              Tienes {creditosMora.length} crédito(s) con días de mora:{' '}
              {creditosMora.map((c) => c.nombre).join(', ')}.
            </p>
          </div>
        )}

        {/* Lista de créditos — cada uno es su propio componente */}
        <div className="divide-y divide-gray-100">
          {creditos.map((credito) => (
            <CreditoItem
              key={credito.id}
              credito={credito}
              mostrarSaldos={mostrarSaldos}
            />
          ))}
        </div>

        {/* Total deuda */}
        <div className="border-t border-gray-200 bg-rose-50 px-4 py-3 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-700">Total Deuda</span>
          <span className="font-bold text-rose-700">
            {mostrarSaldos ? formatCOP(totalDeuda) : '••••••'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ListaCreditos;