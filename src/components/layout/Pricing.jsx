import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const PricingSection = () => {
  
  const plans = [
    {
      name: "Starter",
      label: "ESSENTIALS",
      price: "£15",
      period: "/mo",
      description: "Perfect for getting started with basic monitoring and peace of mind.",
      bgColor: "bg-[#F9F9F7]", // Gris cálido (como la tarjeta FAQs)
      buttonColor: "bg-[#40E0D0] text-[#1a1a1a]", // Turquesa
      features: ["Movement sensors", "Temperature check", "Mobile App access"]
    },
    {
      name: "Complete",
      label: "MOST POPULAR",
      price: "£25",
      period: "/mo",
      description: "Our comprehensive solution for total independent living support.",
      bgColor: "bg-[#FFF9E5]", // Amarillo Crema (como la tarjeta Contact)
      buttonColor: "bg-[#1a1a1a] text-[#FFD500]", // Botón Negro/Amarillo
      features: ["Everything in Starter", "Door activity", "Bathroom visits", "24/7 Alerts"]
    },
    {
      name: "Premium",
      label: "ADVANCED CARE",
      price: "£40",
      period: "/mo",
      description: "Maximum insight and granular data for complex care needs.",
      bgColor: "bg-[#F9F9F7]", // Gris cálido
      buttonColor: "bg-[#40E0D0] text-[#1a1a1a]", // Turquesa
      features: ["Everything in Complete", "Medication tracking", "Care reports", "Priority Support"]
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1a1a1a] font-bold text-xs tracking-[0.15em] uppercase block mb-4">
            Simple Pricing
          </span>
          <h2 className="text-[#1a1a1a] text-4xl md:text-[52px] font-bold leading-tight mb-6">
            Plans that fit your needs
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the right level of support for your loved ones. No hidden fees.
          </p>
        </div>

        {/* Grid de 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${plan.bgColor} rounded-[2.5rem] p-8 lg:p-12 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300`}
            >
              {/* Etiqueta Superior */}
              <span className="text-[#1a1a1a]/60 font-bold text-[11px] tracking-[0.2em] uppercase mb-6">
                {plan.label}
              </span>

              {/* Título del Plan */}
              <h3 className="text-[#1a1a1a] text-3xl font-bold mb-2">
                {plan.name}
              </h3>

              {/* Precio */}
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-5xl font-bold text-[#1a1a1a]">{plan.price}</span>
                <span className="text-lg text-gray-500 font-medium ml-1">{plan.period}</span>
              </div>

              {/* Descripción */}
              <p className="text-[#1a1a1a] text-lg leading-relaxed mb-8 min-h-[80px]">
                {plan.description}
              </p>

              {/* Lista de características (Opcional, para que parezca pricing) */}
              <ul className="mb-10 space-y-3 w-full text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center md:justify-start text-[#1a1a1a]/80 font-medium">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 opacity-50" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Botón (Empujado al fondo con mt-auto) */}
              <div className="mt-auto">
                <button className={`${plan.buttonColor} font-bold text-[15px] py-3.5 px-8 rounded-full flex items-center gap-2 transition-opacity hover:opacity-80`}>
                  Choose {plan.name}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PricingSection;