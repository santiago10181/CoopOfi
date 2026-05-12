import React, { useState } from 'react';
import { Download, Eye, EyeOff } from 'lucide-react';
import { mockEstadoCuenta } from './mock';
import ResumenCard from './components/ResumenCard';
import TablaHaberes from './components/TablaHaberes';
import ListaCreditos from './components/ListaCreditos';
import { formatCOP, formatFecha } from './components/utilidades/formatos';

const EstadoDeCuentaView = () => {
  const [mostrarSaldos, setMostrarSaldos] = useState(true);
  const { socio, haberes, creditos, beneficios } = mockEstadoCuenta;

  // Totales calculados desde los datos reales
  const totalHaberes = haberes.reduce((acc, h) => acc + h.saldo, 0);
  const totalDeuda   = creditos.reduce((acc, c) => acc + c.saldo, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Estado de Cuenta</h1>
          <p className="text-sm text-gray-500">
            {socio.nombre} · Corte: {formatFecha(socio.fechaCorte)}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setMostrarSaldos(p => !p)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            {mostrarSaldos ? <EyeOff size={16} /> : <Eye size={16} />}
            {mostrarSaldos ? 'Ocultar' : 'Mostrar'} saldos
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition-colors">
            <Download size={16} />
            Descargar PDF
          </button>
        </div>
      </header>

      {/* RESUMEN */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <ResumenCard
          titulo="Total Aportes"
          valor={mostrarSaldos ? formatCOP(totalHaberes) : '••••••'}
          subtexto={`${haberes.length} productos activos`}
          acento="verde"
        />
        <ResumenCard
          titulo="Total Deuda"
          valor={mostrarSaldos ? formatCOP(totalDeuda) : '••••••'}
          subtexto={`${creditos.length} créditos activos`}
          acento="rojo"
        />
        <ResumenCard
          titulo="Beneficios Activos"
          valor={mostrarSaldos ? formatCOP(beneficios.reduce((a, b) => a + b.saldo, 0)) : '••••••'}
          subtexto={`${beneficios.length} programas`}
          acento="azul"
        />
      </div>

      {/* DETALLE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TablaHaberes haberes={haberes} mostrarSaldos={mostrarSaldos} />
        <ListaCreditos creditos={creditos} mostrarSaldos={mostrarSaldos} />
      </div>

    </div>
  );
};

export default EstadoDeCuentaView;