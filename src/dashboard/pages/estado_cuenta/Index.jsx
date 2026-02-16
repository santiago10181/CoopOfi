import React from 'react';
import { Download, Eye, TrendingUp, TrendingDown, Wallet, CreditCard, AlertCircle } from 'lucide-react';

const EstadoDeCuentaView = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      
      {/* --- HEADER SUPERIOR --- */}
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Estado de Cuenta Unificado</h1>
          <p className="text-gray-500 text-sm">Corte al: 30 de Septiembre, 2024</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
            {/* Botón visual de privacidad */}
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Eye size={18} />
            <span className="hidden sm:inline">Ocultar Saldos</span>
          </button>
          {/* Botón de acción principal */}
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors shadow-sm">
            <Download size={18} />
            <span>Descargar PDF</span>
          </button>
        </div>
      </header>

      {/* --- TARJETAS DE RESUMEN (DASHBOARD) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1: Lo que tengo (Activos) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
              <TrendingUp size={20} />
            </div>
            <span className="text-gray-500 font-medium text-sm">Total Haberes (Ahorros + Aportes)</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">$ 15,450,000</p>
          <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
             + $250,000 este mes
          </p>
        </div>

        {/* Card 2: Lo que debo (Pasivos) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-rose-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-rose-100 rounded-full text-rose-600">
              <TrendingDown size={20} />
            </div>
            <span className="text-gray-500 font-medium text-sm">Total Deuda (Créditos)</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">$ 4,200,000</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
            <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">Has usado el 25% de tu capacidad</p>
        </div>

        {/* Card 3: Cupo Disponible (Valor Agregado) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-full text-blue-600">
              <Wallet size={20} />
            </div>
            <span className="text-gray-500 font-medium text-sm">Cupo Pre-aprobado</span>
          </div>
          <p className="text-3xl font-bold text-gray-800">$ 8,000,000</p>
          <button className="text-xs text-blue-600 font-semibold mt-2 hover:underline">
             Solicitar Crédito &rarr;
          </button>
        </div>
      </div>

      {/* --- SECCIÓN DETALLADA (GRILLA 2 COLUMNAS) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* --- COLUMNA IZQUIERDA: AHORROS Y APORTES --- */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <div className="h-6 w-1 bg-emerald-500 rounded-full"></div>
            Mis Ahorros y Aportes
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-semibold">
                <tr>
                  <th className="p-4">Concepto</th>
                  <th className="p-4 text-right">Saldo</th>
                  <th className="p-4 text-right hidden sm:table-cell">Rendimiento</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-700">Aportes Sociales</td>
                  <td className="p-4 text-right font-bold text-gray-800">$ 10,000,000</td>
                  <td className="p-4 text-right text-gray-500 hidden sm:table-cell">--</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-700">
                    Ahorro Permanente
                    <span className="block text-xs text-gray-400 font-normal">Deducción nómina: $100k/mes</span>
                  </td>
                  <td className="p-4 text-right font-bold text-gray-800">$ 2,450,000</td>
                  <td className="p-4 text-right text-emerald-600 hidden sm:table-cell">+4.5% E.A.</td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-700">
                    CDAT #998811
                    <span className="block text-xs text-orange-400 font-normal">Vence: 15 Dic 2024</span>
                  </td>
                  <td className="p-4 text-right font-bold text-gray-800">$ 3,000,000</td>
                  <td className="p-4 text-right text-emerald-600 hidden sm:table-cell">+11% E.A.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- COLUMNA DERECHA: CRÉDITOS --- */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
             <div className="h-6 w-1 bg-rose-500 rounded-full"></div>
             Mis Créditos Activos
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            {/* Aviso de mora (Ejemplo visual) */}
            <div className="bg-yellow-50 border-b border-yellow-100 p-3 flex items-start gap-2 text-yellow-800 text-sm">
              <AlertCircle size={16} className="mt-0.5" />
              <p>Tu crédito de Vivienda tiene un vencimiento próximo (5 de Oct).</p>
            </div>

            <div className="divide-y divide-gray-100">
              
              {/* Item de Crédito 1 */}
              <div className="p-4 hover:bg-gray-50 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-700 flex items-center gap-2">
                      <CreditCard size={16} className="text-gray-400"/>
                      Libre Inversión
                    </h3>
                    <p className="text-xs text-gray-400">Línea: Consumo | Plazo: 24/36</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Al día</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-xs text-gray-500">Saldo Capital</p>
                    <p className="font-bold text-gray-800">$ 1,200,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Valor Cuota</p>
                    <p className="font-bold text-gray-800">$ 150,000</p>
                  </div>
                </div>
              </div>

               {/* Item de Crédito 2 */}
               <div className="p-4 hover:bg-gray-50 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-700 flex items-center gap-2">
                      <CreditCard size={16} className="text-gray-400"/>
                      Credi-Vivienda
                    </h3>
                    <p className="text-xs text-gray-400">Línea: Hipotecario | Plazo: 10/120</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Al día</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-xs text-gray-500">Saldo Capital</p>
                    <p className="font-bold text-gray-800">$ 3,000,000</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Valor Cuota</p>
                    <p className="font-bold text-gray-800">$ 320,000</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EstadoDeCuentaView;