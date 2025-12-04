import OverLay from "../common/OverLay"
import Contenedor from "./Contenedor"

const Modal = ({onClick}) => {
    return (
        <OverLay>
            <button 
                onClick={onClick}
                className="bg-white p-6 rounded-lg shadow-lg">
                    Close Modal
            </button>
            <Contenedor />
        </OverLay>
    )
};

export default Modal;