const ImageBack = () => {
    return (
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop')" 
            }}
            >
            {/* Overlay oscuro (gradiente) para legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
        </div>
    )
}
export default ImageBack