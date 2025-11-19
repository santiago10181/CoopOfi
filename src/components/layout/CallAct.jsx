import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromiseSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 1. COLUMNA IZQUIERDA (Texto) */}
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            
            {/* Eyebrow (Texto pequeño superior) */}
            <span className="text-[#1a1a1a] font-bold text-xs tracking-[0.15em] uppercase mb-5">
              Why choose us?
            </span>

            {/* Título */}
            <h2 className="text-[#1a1a1a] text-4xl md:text-[52px] font-bold leading-[1.1] mb-6">
              Our promise to you
            </h2>

            {/* Párrafo */}
            <p className="text-gray-600 text-lg md:text-[20px] leading-relaxed mb-10">
              Our number one goal is to keep our most vulnerable safe and give peace 
              of mind to those who care for them. Explore the team behind this 
              mission, and the key values behind every piece of smart care technology.
            </p>

            {/* Botón CTA */}
            <button className="bg-[#40E0D0] hover:bg-[#35cec0] text-[#1a1a1a] font-bold text-[15px] py-3.5 px-8 rounded-full flex items-center gap-2 transition-colors shadow-sm">
              Our values
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* 2. COLUMNA DERECHA (Imagen) */}
          <div className="w-full lg:w-7/12">
            {/* Contenedor de imagen con bordes redondeados */}
            <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-lg">
              {/* Imagen de fondo */}
              {/* Usamos una imagen de Unsplash de escaleras para simular la original */}
              <img 
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop" 
                alt="Senior person walking up stairs with safety sensor" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay opcional sutil si la imagen es muy brillante */}
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromiseSection;