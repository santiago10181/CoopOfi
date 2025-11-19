import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full px-4 py-6 md:px-8 lg:py-8 bg-white">
      {/* Contenedor tipo "Tarjeta" con bordes redondeados */}
      <div className="relative max-w-[1400px] mx-auto h-[600px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-xl group">
        
        {/* 1. IMAGEN DE FONDO */}
        {/* Usamos una imagen de sala de estar cálida */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop')" 
          }}
        >
          {/* Overlay oscuro (gradiente) para legibilidad del texto */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
        </div>

        {/* 2. CONTENIDO CENTRAL */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-10">
          
          {/* Subtítulo pequeño */}
          <h2 className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.15em] uppercase mb-6 font-sans">
            Home is where you're safe
          </h2>

          {/* Título Principal */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-[68px] font-bold leading-[1.1] mb-6 font-sans">
            Technology-enabled care<br className="hidden md:block" />
            for 
            {/* Palabra Resaltada en Amarillo */}
            <span className="relative inline-block mx-2 md:mx-3">
              <span className="absolute inset-0 bg-[#FFD500] rounded-lg transform -rotate-1 skew-x-1"></span>
              <span className="relative text-[#1a1a1a] px-2">independent</span>
            </span> 
            living.
          </h1>

          {/* Párrafo descriptivo */}
          <p className="text-gray-100 text-lg md:text-[20px] leading-relaxed max-w-3xl mb-10 font-medium drop-shadow-md">
            Canary Care's technology-enabled care helps keeps our most vulnerable safe in their homes, 
            offering peace of mind to those who care for them. Driven by empathy, proven through data, 
            designed for everyday life.
          </p>

          {/* Botón de Acción (CTA) */}
          <button className="bg-[#FFD500] hover:bg-[#e6c000] text-[#1a1a1a] text-lg font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Get in touch
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* 3. IMAGEN DEL DISPOSITIVO (HUB) */}
        {/* Simulamos el dispositivo blanco en la esquina inferior derecha como en la foto */}
        <div className="absolute bottom-[-50px] right-[-50px] md:right-[5%] md:bottom-[-20px] opacity-90 pointer-events-none">
            {/* Usamos un div blanco redondeado para simular el hub si no tienes la imagen PNG transparente */}
            <div className="w-48 h-32 md:w-64 md:h-40 bg-gray-100 rounded-3xl shadow-2xl transform rotate-[-10deg] flex items-center justify-center border-t border-white/50 backdrop-blur-sm">
                <div className="text-gray-300 opacity-50">
                   {/* Icono de campana simulado */}
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;