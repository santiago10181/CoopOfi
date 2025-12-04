import React from 'react';
import Sidebar from '../common/Sidebar';
import { Outlet } from 'react-router-dom';

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
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ContentDashboard;
