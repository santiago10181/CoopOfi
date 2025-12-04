import Brand from '../common/Brand';
import NavLinks from '../common/NavLinks';
import ImageUser from '../common/ImageUser';


const Sidebar = () => {
  return (
    <aside className="flex flex-col w-64 h-screen bg-white border-r border-gray-200 p-4">
      
      {/* Logo y nombre de la cooperativa */}
      <Brand className="my-6" />

      {/* Menú de navegación */}
      <nav className="flex flex-col gap-2 flex-1">
        
        {/* Asistente IA */}
            <NavLinks Name="Asistente IA" to="/CoopOfi/dashboard" />
            {/* Préstamos */}
            <NavLinks Name="Solicitud de credito" to="solicitud-creditos" />
            {/* Auxilios */}
            <NavLinks Name="Auxilios" to="auxilios" />
            {/* Actualización de datos */}
            <NavLinks Name="Actualización de datos" to="/CoopOfi/profile" />
      </nav>

      {/* Usuario al final */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex items-center gap-3 px-3 py-2">
          <ImageUser />
          <p>Pepito Juan</p>  
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
