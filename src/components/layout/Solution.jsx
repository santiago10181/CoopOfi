import TitlesSeccion from '../frames/TitlesSection';
import {LowText, Title, Description,LowText2,Title2,Description2} from '../../data_info/DataSolution';
import Button from '../common/Button';
import ImageBan from '../frames/ImageBan';  

  const className = {
  classNameMicro:"text-[#1a1a1a] font-bold text-xs md:text-sm tracking-[0.15em] uppercase block mb-4",
  classNameTitle:"text-[#1a1a1a] text-4xl md:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight",
  classNameDesc:"text-gray-600 text-lg md:text-[20px] leading-relaxed max-w-3xl mx-auto",
  }

  const className2 = {
    classNameMicro:"text-[#1a1a1a] font-bold text-xs tracking-[0.15em] uppercase mb-5",
    classNameTitle:"text-[#1a1a1a] text-4xl md:text-5xl font-bold mb-8",
    classNameDesc:"text-[#1a1a1a]/80 text-lg md:text-[19px] leading-relaxed mb-10 max-w-md",
  }

const SolutionsSection = () => {

  return (
    <section className="w-full bg-white py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- HEADER DE LA SECCIÓN --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <TitlesSeccion 
            LowText={LowText}
            Title0={Title[0]}
            Title1={Title[1]}
            Title2={Title[2]}
            Description={Description}
            className={className}
          />
        </div>

        {/* --- TARJETA PRINCIPAL (Professional Use) --- */}
        <div className="relative w-full bg-[#FFF9E5] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row">
          
          {/* 1. CONTENIDO IZQUIERDA (Texto) */}
          <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
            <TitlesSeccion 
              LowText={LowText2}
              Title0={Title2[0]}
              Title1={Title2[1]}
              Title2={Title2[2]}
              Description={Description2}
              className={className2}
            />
            <div>
              <Button
                text="Explore"
                className={`Learn bg-[#1a1a1a] hover:bg-black text-[#FFD500] font-bold text-[15px] py-3.5 
                      px-8 rounded-full flex items-center gap-2 transition-all groupMore`}
              />
            </div>
          </div>

          {/* 2. CONTENIDO DERECHA (Imagen + Fondo Amarillo) */}
          <ImageBan />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;