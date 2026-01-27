
export const FootTable = ({ page, totalPages, handlePrev, handleNext }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
            <span className="text-sm text-gray-500 font-medium">
                Página <span className="text-gray-900">{page}</span> de {totalPages}
            </span>

            <div className="flex gap-3">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className={`
                        px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200
                        ${page === 1 
                            ? 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed' 
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 shadow-sm'
                        }
                    `}
                >
                    Anterior
                </button>

                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className={`
                        px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200
                        ${page === totalPages 
                            ? 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed' 
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300 shadow-sm'
                        }
                    `}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};