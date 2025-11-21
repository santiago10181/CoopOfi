
import {Plans, LowText, Title, Description} from '../../data_info/DataPricing.jsx';
import TitlesSection from '../frames/TitlesSection.jsx';
import CardsPricing from '../frames/CardsPricing.jsx';
import ListPricing from '../common/ListPricing.jsx';
import Button from '../common/Button.jsx';

const className = {
  classNameMicro:"text-[#1a1a1a] font-bold text-xs tracking-[0.15em] uppercase block mb-4",
  classNameTitle:"text-[#1a1a1a] text-4xl md:text-[52px] font-bold leading-tight mb-6",
  classNameDesc:"text-gray-600 text-lg",}

const PricingSection = () => {
  
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TitlesSection 
            LowText={LowText}
            Title0={Title[0]} Title1={Title[1]} Title2={Title[2]}                 
            Description={Description}
            className={className}
          />
        </div>

        {/* Grid de 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {Plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${plan.bgColor} rounded-[2.5rem] p-8 lg:p-12 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300`}
            >

              <CardsPricing 
                LowText={plan.label}
                PlanName={plan.name}
                Description={plan.description}
              />

              {/* Lista de características (Opcional, para que parezca pricing) */}
              <ul className="mb-10 space-y-3 w-full text-left">
                {plan.features.map((feature, i) => (
                  <ListPricing Description={feature} key={i}/>
                ))}
              </ul>

              {/* Botón (Empujado al fondo con mt-auto) */}
              <div className="mt-auto">
                <Button 
                  text={`Choose ${plan.name}`}
                  className={`${plan.buttonColor} font-bold text-[15px] py-3.5 px-8 rounded-full flex items-center gap-2 transition-opacity hover:opacity-80`}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PricingSection;