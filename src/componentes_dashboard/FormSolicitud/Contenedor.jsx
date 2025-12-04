import TitleFormSol from "../common/TitleFormSol";


const Contenedor = () => {
    return (
    <div className="  flex flex-col z-50 w-full mx-auto max-w-6xl max-h-[80vh] bg-white
        rounded-lg shadow-lg overflow-y-auto overscroll-contain">
        <TitleFormSol TitleForm={"Solicitud de credito"} />
    </div>
);
};

export default Contenedor;