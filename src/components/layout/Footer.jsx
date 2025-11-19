import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'; // Usaremos Twitter como X por ahora o un SVG custom

const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 pb-6 md:px-8 md:pb-8 pt-0">
      <div className="max-w-[1400px] mx-auto bg-[#F9F9F7] rounded-[2.5rem] relative overflow-hidden">
        
        {/* --- CONTENIDO PRINCIPAL (Grid) --- */}
        <div className="relative z-20 p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Columna 1: Solutions */}
            <div>
              <h4 className="font-bold text-[#1a1a1a] text-lg mb-6">Solutions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">Professional</a></li>
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">Personal</a></li>
              </ul>
            </div>

            {/* Columna 2: Products */}
            <div>
              <h4 className="font-bold text-[#1a1a1a] text-lg mb-6">Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">Products</a></li>
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">Canary Care Shop</a></li>
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">About</a></li>
              </ul>
            </div>

            {/* Columna 3: Support */}
            <div>
              <h4 className="font-bold text-[#1a1a1a] text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">FAQs</a></li>
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">News</a></li>
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">Contact</a></li>
                <li><a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Columna 4: App Stores (Alineado a la derecha en desktop) */}
            <div className="flex flex-col items-start lg:items-end gap-3">
              {/* Botón App Store (Simulado o imagen real) */}
              <button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:opacity-80 transition-opacity w-40 border border-white/10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-6 h-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-medium">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>

              {/* Botón Google Play */}
              <button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:opacity-80 transition-opacity w-40 border border-white/10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-6 h-6" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-medium">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>

          </div>

          {/* --- PARTE INFERIOR (Logo y Legal) --- */}
          <div className="mt-24 md:mt-32 flex flex-col items-start relative z-20">
            
            {/* Logo Canary Care */}
            <div className="flex items-center gap-2 mb-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M16 7h.01"/>
                <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/>
              </svg>
              <div className="flex flex-col justify-center leading-none">
                <span className="text-xl font-bold text-black">Canary</span>
                <span className="text-xl font-bold text-black">Care</span>
              </div>
            </div>

            {/* Enlaces Legales */}
            <div className="flex flex-wrap gap-6 text-sm font-medium text-[#1a1a1a] mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Cookie Preferences</a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-[#1a1a1a]/70">
              © Canary Care Global Limited 2025
            </p>
          </div>
        </div>

        {/* --- FIGURA ABSTRACTA AMARILLA (Fondo derecha) --- */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none z-10">
          {/* SVG dibujado a mano para imitar la curva */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-[#FFD500]">
            <path d="M0 100 C 20 60, 50 60, 60 30 S 100 0, 100 0 V 100 H 0 Z" />
            {/* Este path es una aproximación artística de la curva */}
            <path d="M50 100 C 50 80, 80 40, 100 30 V 100 H 50 Z" fill="#FFD500" /> 
            {/* Usamos una forma más simple para asegurar que cubra la esquina */}
             <path d="M100 100 H 0 C 10 80 30 70 45 65 C 60 60 70 30 100 20 V 100 Z" />
          </svg>
        </div>

        {/* --- REDES SOCIALES (Posicionadas sobre la figura amarilla) --- */}
        <div className="absolute bottom-10 right-6 md:bottom-16 md:right-16 z-30 flex gap-4">
          {[
            { Icon: Facebook, href: '#' },
            { Icon: Twitter, href: '#' }, // Representando X
            { Icon: Linkedin, href: '#' },
            { Icon: Youtube, href: '#' }
          ].map((social, index) => (
            <a 
              key={index} 
              href={social.href}
              className="w-10 h-10 rounded-full bg-[#FFD500] text-[#1a1a1a] flex items-center justify-center hover:bg-black hover:text-[#FFD500] transition-all duration-300 shadow-sm"
            >
              {/* Si es X (Twitter), podríamos usar un SVG custom, pero aquí usamos el de la librería */}
              <social.Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;