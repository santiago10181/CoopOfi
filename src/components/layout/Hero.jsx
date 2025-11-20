import TitlesSection from '../frames/TitlesSection';
import ImageBack from '../common/ImageBack';
import Button from '../common/Button';
import {LowText, Title, Description} from '../../data_info/DataHero';  

const Hero = () => {
  const className = {
  classNameMicro:"text-white text-[11px] md:text-[13px] font-bold tracking-[0.15em] uppercase mb-6 font-sans",
  classNameTitle:"text-white text-4xl sm:text-5xl md:text-[68px] font-bold leading-[1.1] mb-6 font-sans",
  classNameDesc:"text-gray-100 text-lg md:text-[20px] leading-relaxed max-w-3xl mb-10 font-medium drop-shadow-md",
  }


  return (
    <section className="w-full px-4 py-6 md:px-8 lg:py-8 bg-white">
      {/* Contenedor tipo "Tarjeta" con bordes redondeados */}
      <div className="relative max-w-[1400px] mx-auto h-[600px] md:h-[700px] rounded-[2rem] overflow-hidden shadow-xl group">       
        {/* 1. IMAGEN DE FONDO */}
        <ImageBack />
        {/* 2. CONTENIDO CENTRAL */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-10">
          
          {/* Title/desc */}
          <TitlesSection LowText={LowText} Title0={Title[0]} Title1={Title[1]} Title2={Title[2]} 
                          Description={Description}
                          className={className}
                          />
          {/* Botón de Acción (CTA) */}
          <Button text="Get in touch"
                  className={`bg-[#FFD500] hover:bg-[#e6c000] text-[#1a1a1a] text-lg 
                    font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all 
                    transform hover:-translate-y-1 shadow-lg hover:shadow-xl`}
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;