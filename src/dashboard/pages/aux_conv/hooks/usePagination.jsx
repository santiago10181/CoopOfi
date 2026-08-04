import { useEffect, useMemo, useState } from 'react';

export const usePagination = (data, itemsPerPage = 5) => {
  const [page, setPage] = useState(1);

  const safeData = Array.isArray(data) ? data : [];

  const sortedData = useMemo(() => {
    return [...safeData].sort((a, b) => {
      const dateA = new Date(a.fechacreacion ?? a.fechaCreacion ?? 0);
      const dateB = new Date(b.fechacreacion ?? b.fechaCreacion ?? 0);

      return dateB - dateA;
    });
  }, [safeData]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedData.length / itemsPerPage)
  );

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const startIndex = (page - 1) * itemsPerPage;
  const currentData = sortedData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    setPage((currentPage) => Math.max(1, currentPage - 1));
  };

  const handleNext = () => {
    setPage((currentPage) => Math.min(totalPages, currentPage + 1));
  };

  return {
    page,
    totalPages,
    currentData,
    handlePrev,
    handleNext,
  };
};