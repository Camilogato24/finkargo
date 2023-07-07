import React from 'react';

interface PaginationProps {
  nextPage: string | null;
  prevPage: string | null;
  onPageChange: (page: string) => void;
}

const Pagination: React.FC<PaginationProps> = ({ nextPage, prevPage, onPageChange }) => {
  const handleNextPage = () => {
    if (nextPage) {
      onPageChange(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      onPageChange(prevPage);
    }
  };

  return (
    <div className='paginator'>
      {prevPage && <button onClick={handlePrevPage}>Previous</button>}
      {nextPage && <button onClick={handleNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
