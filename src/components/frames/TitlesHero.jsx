import {LowText, Title,Description} from "../../data_info/DataHero"
const TitlesHero = () => {
    return(
        <>
                      <h2 className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.15em] uppercase mb-6 font-sans">
            {LowText}
          </h2>

          {/* Título Principal */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-[68px] font-bold leading-[1.1] mb-6 font-sans">
            <br className="hidden md:block" />
            {Title[0]}
            {/* Palabra Resaltada en Amarillo */}
            <span className="relative inline-block mx-2 md:mx-3">
              <span className="absolute inset-0 bg-[#FFD500] rounded-lg transform -rotate-1 skew-x-1"></span>
              <span className="relative text-[#1a1a1a] px-2">{Title[1]}</span>
            </span> 
            {Title[2]}
          </h1>

          {/* Párrafo descriptivo */}
          <p className="text-gray-100 text-lg md:text-[20px] leading-relaxed max-w-3xl mb-10 font-medium drop-shadow-md">
            {Description}
          </p>
        </>
    )
}
export default TitlesHero