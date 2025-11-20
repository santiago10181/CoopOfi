const ImageBan = () => {
    return (          
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto flex items-end justify-center lg:justify-end overflow-hidden">
            
            {/* El Fondo Amarillo Abstracto (Blob) */}
            {/* Usamos un div rotado y posicionado absolutamente para crear la diagonal amarilla */}
            <div className="absolute top-0 right-0 bottom-0 left-0 lg:left-[-20%]">
                <div className="absolute bottom-[-20%] right-[-10%] w-[150%] h-[100%] bg-[#FFD500] rounded-[100%] transform rotate-[-15deg] origin-bottom-right"></div>
            </div>

            {/* Imagen del Dispositivo (Simulada con CSS o Imagen real) */}
            {/* Si tienes la imagen real, usa la etiqueta <img />. Aquí simulo el dispositivo blanco 3D */}
            <div className="relative z-10 mr-0 lg:mr-16 mb-[-40px] lg:mb-[-60px] transform translate-y-10 lg:translate-y-0">
                {/* Esto es un placeholder visual del dispositivo si no tienes el PNG */}
                 <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                     {/* Sombra suave debajo */}
                     <div className="absolute bottom-10 left-10 right-10 h-20 bg-black/20 blur-2xl rounded-full"></div>
                     
                     {/* Imagen real (Reemplaza src con tu imagen local o URL) */}
                     <img 
                        src="https://cdn-icons-png.flaticon.com/512/11643/11643283.png" 
                        alt="Canary Care Hub" 
                        className="w-full h-full object-contain drop-shadow-2xl grayscale-[100%] brightness-200 contrast-[0.8]" 
                        // Nota: Los filtros grayscale y brightness son un truco para hacer que un icono genérico parezca una caja blanca limpia. 
                        // Quítalos si usas la foto real del producto.
                     />
                 </div>
            </div>
          </div>
    );
}

export default ImageBan;