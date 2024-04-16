import React from 'react';
import './App.css';
import LocationSearch from './components/LocationSearch';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img src='../public\assets\Website_Category_banners_13.png'/>
      </div>
      <LocationSearch />
    </div>
  );
}

export default App;



/* en este codigo hice todo dentro de app */



// import React, { useState, useEffect } from 'react';
// import './App.css';

// const useRickAndMortyAPI = () => {
//   const [location, setLocation] = useState({});
//   const [residents, setResidents] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchLocation = async (locationId) => {
//     try {
//       const response = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
//       if (!response.ok) {
//         throw new Error('Ubicación no encontrada. Ingrese un ID válido (1-126).');
//       }
//       const data = await response.json();
//       setLocation(data);
//       setResidents(data.residents);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return { location, residents, error, fetchLocation };
// };

// function App() {
//   const [locationId, setLocationId] = useState('');
//   const { location, residents, error, fetchLocation } = useRickAndMortyAPI();
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const handleInputChange = (event) => {
//     setLocationId(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!locationId || isNaN(locationId) || locationId < 1 || locationId > 126) {
//       alert('Por favor, ingrese un ID de ubicación válido (1-126).');
//       return;
//     }
//     setPage(1);
//     fetchLocation(locationId);
//   };

//   useEffect(() => {
//     const fetchTotalPages = async () => {
//       try {
//         const response = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
//         if (!response.ok) {
//           throw new Error('Ubicación no encontrada. Ingrese un ID válido (1-126).');
//         }
//         const data = await response.json();
//         setTotalPages(Math.ceil(data.residents.length / 10));
//       } catch (error) {
//         console.error('Error fetching total pages:', error);
//       }
//     };

//     fetchTotalPages();
//   }, [locationId]);

//   const handleNextPage = () => {
//     setPage(page + 1);
//   };

//   const handlePrevPage = () => {
//     setPage(page - 1);
//   };

//   const startIndex = (page - 1) * 10;
//   const endIndex = startIndex + 10;

//   return (
//     <div className="App">
//         <div className="navbar">
//         <img src='../public/assets/frame259.png' alt="Imagen de la barra de navegación"/>
//       </div>
//       <h1>Rick And Morty API</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Ingrese el ID de la ubicación (1-126)"
//           value={locationId}
//           onChange={handleInputChange}
//           className="search-input"
//         />
//         <button type="submit" className="search-button">Search</button>
//       </form>
//       {error && <p>Error: {error}</p>}
//       {location.name && (
//         <div className="location-info">
//           <div className='location-txt'>
//             <div className='location-name'>
//           <h2>Name : {location.name}</h2>
//           </div>
//           <div className="location-txtname">
//           <p>Type: {location.type}</p>
//           <p>Dimensión: {location.dimension}</p>
//           <p>Population: {residents.length}</p>
//           </div>
//           </div>
//           <div className="residents">
//             <h3>Residents</h3>
//             <div className="resident-grid">
//               {residents.slice(startIndex, endIndex).map(residentUrl => (
//                 <Resident key={residentUrl} url={residentUrl} />
//               ))}
//             </div>
//             {totalPages > 1 && (
//               <div className="pagination">
//                 <button onClick={handlePrevPage} disabled={page === 1} className="pagination-button">Prev</button>
//                 <span> Page {page}   of  {totalPages} </span>
//                 <button onClick={handleNextPage} disabled={page === totalPages} className="pagination-button">Next</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const Resident = ({ url }) => {
//   const [resident, setResident] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchResident = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Residente no encontrado.');
//         }
//         const data = await response.json();
//         setResident(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchResident();

//     return () => {
//       setResident(null);
//     };
//   }, [url]);

//   return (
//     <div>
//       {error && <p>Error: {error}</p>}
//       {resident && (
//         <div className="resident">
//           <h4>{resident.name}</h4>
//           <img src={resident.image} alt={resident.name} />                 
//           <p>Status : {resident.status} {resident.status === 'Alive' && '❤️'}
//             {resident.status === 'Dead' && '💀'}
//             {resident.status === 'unknown' && '❓'}</p>
//             <div className='resident__origen'>
//           <p>Origin :</p>
//           <p>{resident.origin.name}</p>
//           </div>
//           <p>Eppisodes where appear : {resident.episode.length}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
