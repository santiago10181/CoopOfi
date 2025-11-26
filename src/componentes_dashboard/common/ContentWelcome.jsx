const ContentWelcome = () => {
    return (
        <div className="text-center mb-12">
            {/* Ícono de estrellas */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                  <span className="text-6xl">✨</span>
                  <span className="absolute -top-2 -right-2 text-3xl animate-pulse">✨</span>
                </div>
            </div>
              
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Hola, Juan. ¿Cómo puedo ayudarte hoy?
            </h1>
            <p className="text-gray-600 text-lg">
                Puedes preguntarme sobre tus ahorros, préstamos, auxilios y más.
            </p>
        </div>
    )
}
export default ContentWelcome