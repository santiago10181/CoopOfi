
import MicroTitle from "../common/MicroTitle"
import ParaText from "../common/ParaText"
import TitleText from "../common/TitleText"

// import {LowText, Title,Description} from "../../data_info/DataHero"
const TitlesSeccion = ({LowText, Title0, Title1, Title2, Description,className}) => {
  const {classNameMicro, classNameTitle, classNameDesc} = className
 
    return(
        <>
          {/* Texto pequeño superior */} 
          <MicroTitle LowText={LowText} 
          classNameMicro={classNameMicro} 

          />
          {/* Título Principal */}
          <TitleText Title0={Title0} Title1={Title1} Title2={Title2} 
          classNameTitle={classNameTitle}
          />

          {/* Párrafo descriptivo */}
          <ParaText Description={Description}
          classNameDesc={classNameDesc}
           />
        </>
    )
}
export default TitlesSeccion