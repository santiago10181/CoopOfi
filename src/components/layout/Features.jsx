
import { LowText, Title, Description, Features } from '../../data_info/DataFeat'
import TitlesSection from '../frames/TitlesSection';

  const className = {
    classNameMicro:"text-[#1a1a1a] font-bold text-xs tracking-[0.15em] uppercase block mb-4 font-sans",
    classNameTitle:"text-[#1a1a1a] text-4xl md:text-[52px] font-bold leading-tight mb-6 tracking-tight font-sans",
    classNameDesc:"text-gray-600 text-lg md:text-[20px] leading-relaxed max-w-3xl mx-auto font-normal",
  }
  const FeaturesClass = {
    classNameIconBg:"w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6",
    classNameBg:"flex flex-col items-center group cursor-default",
    classNameLabel:"text-[#1a1a1a] text-lg md:text-xl font-medium text-center",
  }

const MonitoringSection = () => {

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <TitlesSection 
            LowText={LowText} Title0={Title[0]} Title1={Title[1]} Title2={Title[2]} 
            Description={Description}
            className={className}
          />
        </div>

        {/* --- ICONS GRID --- */}
        {/* Usamos Grid para hacerlo responsive: 2 columnas en móvil, 3 en tablet, 6 en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 justify-items-center">
          
          {Features.map((item, index) => (
            <div key={index} className={FeaturesClass.classNameBg}>
              {/* Círculo del Icono */}
              <div 
                className={`${item.bgColor} ${FeaturesClass.classNameIconBg}`}
              >
                {item.icon}
              </div>
              
              {/* Texto Label */}
              <h3 className={FeaturesClass.classNameLabel}>
                {item.label}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;