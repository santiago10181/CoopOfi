import React from 'react';
import Sidebar from './Sidebar';
import ContentWelcome from '../common/ContentWelcome';
import Input from '../common/Input';
import ButtonSend from '../common/ButtonSend';
import ButtonAction from '../common/ButtonAction';

const ContentDashboard = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        {/* Área de contenido */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-10 py-20">
            
            {/* Mensaje de bienvenida */}
            <ContentWelcome />

            {/* Input de búsqueda */}
            <div className="relative mb-8">
              <Input />
              <ButtonSend />
            </div>

            {/* Botones de acciones rápidas */}
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonAction action="Consultar mi saldo" />
              <ButtonAction action="Pagar mi préstamo" />
              <ButtonAction action="Actualizar mis datos" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContentDashboard;
