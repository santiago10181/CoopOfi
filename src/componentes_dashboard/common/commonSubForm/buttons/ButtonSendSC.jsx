import InputValidData from "../elementsSubForm/InputValidData"
const ButtonSendCS = ({onClick}) => {
    return(
        <div className="flex justify-between mt-6 items-center">
            <InputValidData  />
            <button
                type="submit"
                className="px-6 py-2 bg-yellow-300 text-white rounded-md hover:bg-yellow-700 transition-colors"
                onClick={onClick}
            >
                Guardar Solicitud Completa
            </button>
        </div>

    )
}
export default ButtonSendCS;
       
        