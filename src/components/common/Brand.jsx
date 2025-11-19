
const Brand = () => {
    return (
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              {/* SVG del Pájaro (Recreado simple) */}
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M16 7h.01"/>
                <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/>
              </svg>
              <div className="flex flex-col justify-center leading-none">
                <span className="text-xl font-bold text-black">Canary</span>
                <span className="text-xl font-bold text-black">Care</span>
              </div>
            </div>
    )
};
export default Brand;