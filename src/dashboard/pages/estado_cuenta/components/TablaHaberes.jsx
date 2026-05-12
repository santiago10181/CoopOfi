import React from 'react';
import { PiggyBank } from 'lucide-react';
import { formatCOP, formatFecha } from './utilidades/formatos';

const TablaHaberes = ({ haberes, mostrarSaldos }) => {
  const totalSaldo = haberes.reduce((acc, h) => acc + h.saldo, 0);

  return (
    <section>
      {/* Título de sección */}
      <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4 flex items-center gap-2">
        <PiggyBank size={16} className="text-emerald-600" />
        Ahorros y Aportes
      </h2>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Concepto
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide text-right">
                Mes
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide text-right">
                Saldo
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            {haberes.map((haber) => (
              <tr key={haber.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-800">{haber.nombre}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Vence: {formatFecha(haber.vencimiento)}
                    {haber.tasa > 0 && ` · ${haber.tasa}% E.A.`}
                  </p>
                </td>
                <td className="px-4 py-3 text-right text-gray-600">
                  {mostrarSaldos ? formatCOP(haber.abonoMes) : '••••'}
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-bold text-gray-900">
                    {mostrarSaldos ? formatCOP(haber.saldo) : '••••••'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

          {/* Fila de total */}
          <tfoot>
            <tr className="border-t border-gray-200 bg-emerald-50">
              <td className="px-4 py-3 text-sm font-bold text-gray-700" colSpan={2}>
                Total Aportes
              </td>
              <td className="px-4 py-3 text-right font-bold text-emerald-700">
                {mostrarSaldos ? formatCOP(totalSaldo) : '••••••'}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default TablaHaberes;