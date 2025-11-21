const ImageBan = () => {
    return (          
                 <div className="w-full lg:w-7/12">
            {/* Contenedor de imagen con bordes redondeados */}
            <div className="relative h-[400px] md:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-lg">
              {/* Imagen de fondo */}
              {/* Usamos una imagen de Unsplash de escaleras para simular la original */}
              <img 
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop" 
                alt="Senior person walking up stairs with safety sensor" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay opcional sutil si la imagen es muy brillante */}
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          </div>
    );
}

export default ImageBan;