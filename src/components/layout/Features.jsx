import React from 'react';
import { 
  Move, 
  DoorClosed, 
  Snowflake, 
  ShowerHead, 
  Lightbulb, 
  Pill 
} from 'lucide-react';

const MonitoringSection = () => {
  
  // Definimos los datos de los iconos para no repetir código HTML
  const features = [
    {
      label: "Movement",
      icon: <Move className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#FFD500]", // Amarillo
    },
    {
      label: "Door activity",
      icon: <DoorClosed className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#40E0D0]", // Turquesa / Cyan
    },
    {
      label: "Temperature",
      icon: <Snowflake className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#F3F4F6]", // Gris muy claro
    },
    {
      label: "Bathroom visits",
      icon: <ShowerHead className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#FFD500]", // Amarillo
    },
    {
      label: "Light levels",
      icon: <Lightbulb className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#40E0D0]", // Turquesa / Cyan
    },
    {
      label: "Medication",
      icon: <Pill className="w-10 h-10 text-black stroke-[1.5]" />,
      bgColor: "bg-[#F3F4F6]", // Gris muy claro
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#1a1a1a] font-bold text-xs tracking-[0.15em] uppercase block mb-4 font-sans">
            Real-time monitoring
          </span>
          <h2 className="text-[#1a1a1a] text-4xl md:text-[52px] font-bold leading-tight mb-6 tracking-tight font-sans">
            Insight with dignity, always
          </h2>
          <p className="text-gray-600 text-lg md:text-[20px] leading-relaxed max-w-3xl mx-auto font-normal">
            No cameras, no microphones, but all the benefits of around the clock visibility. 
            Our innovative, non-intrusive technology-enabled care system will help you look 
            after loved ones even when you’re not there.
          </p>
        </div>

        {/* --- ICONS GRID --- */}
        {/* Usamos Grid para hacerlo responsive: 2 columnas en móvil, 3 en tablet, 6 en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 justify-items-center">
          
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              {/* Círculo del Icono */}
              <div 
                className={`${item.bgColor} w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </div>
              
              {/* Texto Label */}
              <h3 className="text-[#1a1a1a] text-lg md:text-xl font-medium text-center">
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