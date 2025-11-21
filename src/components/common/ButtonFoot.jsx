const ButtonFoot = ({ text1, text2,url, alt }) => {
    return(
        <button className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:opacity-80 transition-opacity w-40 border border-white/10">
            <img src={url} alt={alt} className="w-6 h-6" />
            <div className="text-left leading-tight">
                <div className="text-[10px] font-medium">{text1}</div>
                <div className="text-sm font-bold">{text2}</div>
            </div>
        </button>
    )
}
export default ButtonFoot;