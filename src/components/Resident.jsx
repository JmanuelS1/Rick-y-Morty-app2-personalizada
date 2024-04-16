import React, { useState, useEffect } from 'react';

function Resident({ url }) {
  const [resident, setResident] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Residente no encontrado.');
        }
        const data = await response.json();
        setResident(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchResident();

    return () => {
      setResident(null);
    };
  }, [url]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {resident && (
        <div className="resident">
          <h4>{resident.name}</h4>
          <img src={resident.image} alt={resident.name} />                 
          <p>Status : {resident.status} {resident.status === 'Alive' && '❤️'}
            {resident.status === 'Dead' && '💀'}
            {resident.status === 'unknown' && '❓'}</p>
          <div className='resident__origen'>
            <p>Origin :</p>
            <p>{resident.origin.name}</p>
          </div>
          <p>Episodes where appear : {resident.episode.length}</p>
        </div>
      )}
    </div>
  );
}

export default Resident;







