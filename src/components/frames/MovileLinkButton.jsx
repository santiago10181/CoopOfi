import { Menu, X } from 'lucide-react';
const MovileLinkButton = ({setOpen,isOpen}) => {
    return(
        <div className="lg:hidden flex items-center">
            <button onClick={setOpen} className="p-2">
               {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
        </div>
    )
}
export default MovileLinkButton;