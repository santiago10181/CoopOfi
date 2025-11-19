import React from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- HEADER DE LA SECCIÓN --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#1a1a1a] font-bold text-xs md:text-sm tracking-[0.15em] uppercase block mb-4">
            Our care solutions
          </span>
          <h2 className="text-[#1a1a1a] text-4xl md:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight">
            Empowering independent<br />
            living, wherever life is lived
          </h2>
          <p className="text-gray-600 text-lg md:text-[20px] leading-relaxed max-w-3xl mx-auto">
            No matter your care needs, we’re proud to offer a home care technology 
            solution that keeps everyone happy, safe, and living independently.
          </p>
        </div>

        {/* --- TARJETA PRINCIPAL (Professional Use) --- */}
        <div className="relative w-full bg-[#FFF9E5] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row">
          
          {/* 1. CONTENIDO IZQUIERDA (Texto) */}
          <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
            <span className="text-[#1a1a1a] font-bold text-xs tracking-[0.15em] uppercase mb-5">
              Improve care at scale
            </span>
            
            <h3 className="text-[#1a1a1a] text-4xl md:text-5xl font-bold mb-8">
              Professional use
            </h3>
            
            <p className="text-[#1a1a1a]/80 text-lg md:text-[19px] leading-relaxed mb-10 max-w-md">
              Our tech will help you do more with less. Encourage and enable independent living 
              across communities, support early hospital discharge, and prevent readmission by making 
              use of our innovative technology-enabled care.
            </p>

            <div>
              <button className="bg-[#1a1a1a] hover:bg-black text-[#FFD500] font-bold text-[15px] py-3.5 px-8 rounded-full flex items-center gap-2 transition-all group">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 2. CONTENIDO DERECHA (Imagen + Fondo Amarillo) */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto flex items-end justify-center lg:justify-end overflow-hidden">
            
            {/* El Fondo Amarillo Abstracto (Blob) */}
            {/* Usamos un div rotado y posicionado absolutamente para crear la diagonal amarilla */}
            <div className="absolute top-0 right-0 bottom-0 left-0 lg:left-[-20%]">
                <div className="absolute bottom-[-20%] right-[-10%] w-[150%] h-[100%] bg-[#FFD500] rounded-[100%] transform rotate-[-15deg] origin-bottom-right"></div>
            </div>

            {/* Imagen del Dispositivo (Simulada con CSS o Imagen real) */}
            {/* Si tienes la imagen real, usa la etiqueta <img />. Aquí simulo el dispositivo blanco 3D */}
            <div className="relative z-10 mr-0 lg:mr-16 mb-[-40px] lg:mb-[-60px] transform translate-y-10 lg:translate-y-0">
                {/* Esto es un placeholder visual del dispositivo si no tienes el PNG */}
                 <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                     {/* Sombra suave debajo */}
                     <div className="absolute bottom-10 left-10 right-10 h-20 bg-black/20 blur-2xl rounded-full"></div>
                     
                     {/* Imagen real (Reemplaza src con tu imagen local o URL) */}
                     <img 
                        src="https://cdn-icons-png.flaticon.com/512/11643/11643283.png" 
                        alt="Canary Care Hub" 
                        className="w-full h-full object-contain drop-shadow-2xl grayscale-[100%] brightness-200 contrast-[0.8]" 
                        // Nota: Los filtros grayscale y brightness son un truco para hacer que un icono genérico parezca una caja blanca limpia. 
                        // Quítalos si usas la foto real del producto.
                     />
                 </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;