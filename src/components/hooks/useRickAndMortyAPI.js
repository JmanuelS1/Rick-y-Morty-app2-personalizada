import { useState } from 'react';

const useRickAndMortyAPI = () => {
  const [location, setLocation] = useState({});
  const [residents, setResidents] = useState([]);
  const [error, setError] = useState(null);

  const fetchLocationById = async (locationId) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
      if (!response.ok) {
        throw new Error('Ubicación no encontrada. Ingrese un ID válido (1-126).');
      }
      const data = await response.json();
      setLocation(data);
      setResidents(data.residents);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchLocationByName = async (name) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location/?name=${name}`);
      if (!response.ok) {
        throw new Error('No se pudieron cargar las ubicaciones.');
      }
      const data = await response.json();
      return data.results; 
    } catch (error) {
      setError(error.message);
      return [];
    }
  };

  return { location, residents, error, fetchLocationById, fetchLocationByName };
};

export default useRickAndMortyAPI;
