import React from 'react';
import { CreditCard } from 'lucide-react';
import Metricas from './MiniComponents/Metricas'
import { formatCOP, formatFecha } from './utilidades/formatos';

const CreditoItem = ({ credito, mostrarSaldos }) => {
  const tieneMora = credito.diasMora > 0;

  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">

      {/* Nombre + badge de estado */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-800 flex items-center gap-2 text-sm">
            <CreditCard size={14} className="text-gray-400" />
            {credito.nombre}
            {credito.referencia && (
              <span className="text-xs text-gray-400 font-normal">
                #{credito.referencia}
              </span>
            )}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Vence: {formatFecha(credito.vencimiento)} · Tasa: {credito.tasa}% E.A.
          </p>
        </div>

        <span
          className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
            tieneMora
              ? 'bg-red-100 text-red-700'
              : 'bg-emerald-100 text-emerald-700'
          }`}
        >
          {tieneMora ? `${credito.diasMora} días mora` : 'Al día'}
        </span>
      </div>

      {/* Métricas del crédito */}
      <div className="grid grid-cols-3 gap-3 text-xs">
        <Metricas titulo="Saldo capital" valor={credito.saldo} 
          mostrarSaldos={mostrarSaldos} formatCOP={formatCOP} />
        <Metricas titulo="Valor total" valor={credito.valorTotal} 
          mostrarSaldos={mostrarSaldos} formatCOP={formatCOP} />
        <Metricas titulo="Cuota mes" valor={credito.cuotaMes} 
          mostrarSaldos={mostrarSaldos} formatCOP={formatCOP} />
        <Metricas titulo="Intereses" valor={credito.intereses} 
          mostrarSaldos={mostrarSaldos} formatCOP={formatCOP} />
      </div>
    </div>
  );
};

export default CreditoItem;