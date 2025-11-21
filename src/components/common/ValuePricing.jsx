const ValuePricing = ({price=25, period="/month"}) => {
    return (
        <div className="flex items-baseline justify-center mb-6">
            <span className="text-5xl font-bold text-[#1a1a1a]">{price}</span>
            <span className="text-lg text-gray-500 font-medium ml-1">{period}</span>
        </div>
    )
    
}
export default ValuePricing;