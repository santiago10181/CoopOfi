import TitleFormSol from "../common/TitleFormSol";
import CardSubForm from "./CardSubForm";


const Contenedor = ({onclick}) => {
    return (
    <div className="  flex flex-col z-50 w-full mx-auto max-w-6xl max-h-[98vh] bg-white
        rounded-lg shadow-lg overflow-y-auto overscroll-contain p-[20px]">
        <TitleFormSol TitleForm={"Solicitud de credito"} />
        <CardSubForm onClick={onclick}   />
        
    </div>
);
};

export default Contenedor;