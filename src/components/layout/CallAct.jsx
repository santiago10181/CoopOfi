
import ImageBan from "../frames/ImageBan";
import {LowText, Title, Description} from '../../data_info/DataCall.js';
import TitlesSection from '../frames/TitlesSection';
import Button from '../common/Button.jsx';

  const ClassName = {
  classNameMicro:"text-[#1a1a1a] font-bold text-xs tracking-[0.15em] uppercase mb-5",
  classNameTitle:"text-[#1a1a1a] text-4xl md:text-[52px] font-bold leading-[1.1] mb-6",
  classNameDesc:"text-gray-600 text-lg md:text-[20px] leading-relaxed mb-10",
  }

const PromiseSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 1. COLUMNA IZQUIERDA (Texto) */}
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            
            <TitlesSection 
              LowText={LowText} 
              Title0={Title[0]} Title1={Title[1]} Title2={Title[2]}              
              Description={Description} 
              className={ClassName}
            />

            {/* Botón CTA */}
            <Button
              text="Our values"
              className={`mt-6 bg-[#40E0D0] hover:bg-[#35cec0] text-[#1a1a1a] font-bold text-[15px] py-3.5 px-8 rounded-full flex items-center gap-2 transition-colors shadow-sm`}
            />

          </div>

          {/* 2. COLUMNA DERECHA (Imagen) */}
          <ImageBan />

        </div>
      </div>
    </section>
  );
};

export default PromiseSection;