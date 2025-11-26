import Button from "../common/Button"
import { User} from 'lucide-react';

const ButtonLog = () => {
    return(
        <>    
              <button className="w-11 h-11 rounded-full bg-[#F3F4F6] hover:bg-[#e5e7eb] flex items-center justify-center transition-colors">
                <User className="w-5 h-5 text-gray-700" />
                
              </button>
              <Button text="Log In" 
                      className={`bg-[#1a1a1a] hover:opacity-90 text-[#FFD500] font-bold text-[15px]
                                py-3 px-7 rounded-full flex items-center transition-all group `}/>  
        </>
    )
}
export default ButtonLog;