import MicroTitle from "../common/MicroTitle";
import ParaText from "../common/ParaText";
import ValuePricing from "../common/ValuePricing";

const CardsPricing = ({LowText, PlanName, Description}) => {
    return (
        <>
            <MicroTitle 
                LowText={LowText}
                classNameMicro="text-[#1a1a1a]/60 font-bold text-[11px] tracking-[0.2em] uppercase mb-6"/>
            <h3 className="text-[#1a1a1a] text-3xl font-bold mb-2">
                {PlanName}
            </h3>
            <ValuePricing  />
            <ParaText 
                Description={Description}
                classNameDesc="text-[#1a1a1a] text-lg leading-relaxed mb-8 min-h-[80px]" />
            
        </>
    )
}
export default CardsPricing;