import React, { useRef } from 'react';
import Resident from './Resident';

function LocationInfo({ location, residents, page, setPage }) {
  const residentsPerPage = 10;
  const totalPages = Math.ceil(residents.length / residentsPerPage);
  const cardsRef = useRef(null);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      if (cardsRef.current) {
        cardsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      if (cardsRef.current) {
        cardsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleFirstPage = () => {
    setPage(1);
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLastPage = () => {
    setPage(totalPages);
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{location.name}</h2>
      </div>
      <div className="card-content">
        <div className="detail">
          <span>Type :</span>
          <span>{location.type}</span>
        </div>
        <div className="detail">
          <span>Dimension :</span>
          <span>{location.dimension}</span>
        </div>
        <div className="detail">
          <span>Population :</span>
          <span>{residents.length}</span>
        </div>
      </div>
      <div className="residents" ref={cardsRef}>
        <h3>Residents</h3>
        {totalPages > 1 && (
          <div className="pagination">
            <button onClick={handleFirstPage} disabled={page === 1} className="pagination-button">First</button>
            <button onClick={handlePrevPage} disabled={page === 1} className="pagination-button">Prev</button>
            <span> Page {page} of {totalPages} </span>
            <button onClick={handleNextPage} disabled={page === totalPages} className="pagination-button">Next</button>
            <button onClick={handleLastPage} disabled={page === totalPages} className="pagination-button">Last</button>
          </div>
        )}
        <div className="resident-grid">
          {residents.slice((page - 1) * residentsPerPage, page * residentsPerPage).map((residentUrl, index) => (
            <Resident key={index} url={residentUrl} />
          ))}
          {residents.length === 0 && <div>No residents found</div>}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            <button onClick={handleFirstPage} disabled={page === 1} className="pagination-button">First</button>
            <button onClick={handlePrevPage} disabled={page === 1} className="pagination-button">Prev</button>
            <span> Page {page} of {totalPages} </span>
            <button onClick={handleNextPage} disabled={page === totalPages} className="pagination-button">Next</button>
            <button onClick={handleLastPage} disabled={page === totalPages} className="pagination-button">Last</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationInfo;