import { useState, useMemo } from 'react';

export const usePagination = (data, itemsPerPage = 5) => {
    // 1. Solo guardamos la página actual. NADA MÁS.
    const [page, setPage] = useState(1);

    // 2. Validación defensiva (por si data llega null)
    const safeData = Array.isArray(data) ? data : [];

    // 3. Preparamos los datos (Invertir para ver lo más reciente primero)
    // useMemo evita que se recalcule si no cambian los datos originales
    const sortedData = useMemo(() => {
        return [...safeData];
    }, [safeData]);

    // 4. LÓGICA INFALIBLE:
    // Calculamos el total de páginas
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    // Calculamos índices matemáticos
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // CORTAMOS el array. 
    // .slice() devuelve una COPIA NUEVA. No guarda referencia a lo anterior.
    // Esto garantiza que currentData tenga SIEMPRE MAXIMO 10 elementos.
    const currentData = sortedData.slice(startIndex, endIndex);

    // 5. Handlers de navegación
    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    // Retornamos lo necesario
    return { page, totalPages, currentData, handlePrev, handleNext };
};