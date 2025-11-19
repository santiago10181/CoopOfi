import { useState } from 'react';
import Brand from '../common/Brand';
import UnionLinks from '../frames/UnionLinks';
import ButtonLog from '../frames/ButtonLog';
import MovileLinkButton from '../frames/MovileLinkButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* 2. NAVBAR PRINCIPAL */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[88px]">          
            {/* LOGO */}
            <Brand />
            {/* LINKS CENTRALES (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              <UnionLinks />
            </div>
            
            {/* BOTONES DERECHA */}
            <div className="hidden lg:flex items-center gap-4"> 
              <ButtonLog />
            </div>
            {/* MENÚ MÓVIL (Hamburguesa) */}
            <div className="lg:hidden flex items-center">
              <MovileLinkButton setOpen={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
            </div>
          </div>
        </div>

        {/* CONTENIDO MÓVIL */}
        {isOpen && (
          <div className="lg:hidden bg-white absolute w-full border-b border-gray-100 shadow-lg">
            <div className="px-5 py-6 space-y-4 flex flex-col">
              <UnionLinks />
              <hr className="border-gray-100 my-2"/>
              <ButtonLog />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;