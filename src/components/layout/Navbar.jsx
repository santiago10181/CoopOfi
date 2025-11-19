import React, { useState } from 'react';
import { User, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">

      {/* 2. NAVBAR PRINCIPAL */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[88px]">
            
            {/* LOGO */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              {/* SVG del Pájaro (Recreado simple) */}
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M16 7h.01"/>
                <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/>
              </svg>
              <div className="flex flex-col justify-center leading-none">
                <span className="text-xl font-bold text-black">Canary</span>
                <span className="text-xl font-bold text-black">Care</span>
              </div>
            </div>

            {/* LINKS CENTRALES (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {['Professional', 'Personal', 'Technology'].map((item) => (
                <a key={item} href="#" className="text-[#1a1a1a] text-[17px] font-medium hover:opacity-70 transition-opacity">
                  {item}
                </a>
              ))}
              <div className="flex items-center text-[#1a1a1a] text-[17px] font-medium cursor-pointer hover:opacity-70 transition-opacity">
                <span>Discover</span>
                <ChevronDown className="w-4 h-4 ml-1 stroke-[3]" />
              </div>
            </div>

            {/* BOTONES DERECHA */}
            <div className="hidden lg:flex items-center gap-4">
              
              {/* Icono Usuario (Círculo gris claro) */}
              <button className="w-11 h-11 rounded-full bg-[#F3F4F6] hover:bg-[#e5e7eb] flex items-center justify-center transition-colors">
                <User className="w-5 h-5 text-gray-700" />
              </button>

              {/* Botón Contact */}
              <button className="bg-[#F3F4F6] hover:bg-[#e5e7eb] text-[#1a1a1a] font-bold text-[15px] py-3 px-7 rounded-full transition-colors">
                Contact
              </button>

              {/* Botón Shop (Negro con texto Amarillo) */}
              <button className="bg-[#1a1a1a] hover:opacity-90 text-[#FFD500] font-bold text-[15px] py-3 px-7 rounded-full flex items-center transition-all group">
                Shop
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* MENÚ MÓVIL (Hamburguesa) */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* CONTENIDO MÓVIL */}
        {isOpen && (
          <div className="lg:hidden bg-white absolute w-full border-b border-gray-100 shadow-lg">
            <div className="px-5 py-6 space-y-4 flex flex-col">
              <a href="#" className="text-lg font-medium text-black">Professional</a>
              <a href="#" className="text-lg font-medium text-black">Personal</a>
              <a href="#" className="text-lg font-medium text-black">Technology</a>
              <a href="#" className="text-lg font-medium text-black">Discover</a>
              <hr className="border-gray-100 my-2"/>
              <button className="w-full bg-[#F3F4F6] text-black font-bold py-3 rounded-full">Contact</button>
              <button className="w-full bg-[#1a1a1a] text-[#FFD500] font-bold py-3 rounded-full flex justify-center items-center">
                Shop <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;