import { CreditCard } from 'lucide-react';
const CardFloat = () => {
    return (
        <div className="absolute bottom-16 left-10 right-10">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-lg mb-2">
                        <CreditCard className="w-6 h-6 text-black" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-serif text-white mb-2">Smart Management</h3>
                        <p className="text-white/90 text-sm leading-relaxed mb-6 font-medium">
                            "Streamline your cooperative's operations. Process credit requests and manage employee funds with transparency and ease."
                        </p>
                         <div className="flex items-center gap-3">
                             <div className="flex -space-x-3">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                                <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
                             </div>
                             <div className="h-8 w-px bg-white/30"></div>
                             <span className="text-xs font-semibold text-white tracking-wide">TRUSTED PARTNER</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardFloat