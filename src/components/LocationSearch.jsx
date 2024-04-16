import React, { useState } from 'react';
import useRickAndMortyAPI from '../components/hooks/useRickAndMortyAPI';
import LocationInfo from '../components/LocationInfo'



function LocationSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [page, setPage] = useState(1); 
  const { location, residents, error, fetchLocationById } = useRickAndMortyAPI();

  const handleInputChange = (event) => {
    const inputNumber = event.target.value.replace(/\D/, ''); // Remover caracteres que no sean números
    if (inputNumber === '' || (parseInt(inputNumber) > 0 && parseInt(inputNumber) <= 126)) {
      setSearchQuery(inputNumber);
    }
    setSelectedLocation(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchQuery) {
      alert('Por favor, ingrese un ID de ubicación.');
      return;
    }
    const searchNumber = parseInt(searchQuery);
    if (isNaN(searchNumber) || searchNumber < 1 || searchNumber > 126) {
      alert('Por favor, ingrese un ID de ubicación válido (1 al 126).');
      return;
    }
    await fetchLocationById(searchNumber);
    setSelectedLocation(searchNumber);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Ingrese el ID de la ubicación (1 al 126)"
          value={searchQuery}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <p>Error: {error}</p>}
      {selectedLocation && <LocationInfo location={location} residents={residents} page={page} setPage={setPage} />}
    </div>
  );
}

export default LocationSearch;
