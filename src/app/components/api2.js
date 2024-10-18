"use client";

import { useEffect, useState } from 'react';

const Api2 = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener la URL de usuarios aleatorios
  const getRandomUserUrl = () => {
    return `https://randomuser.me/api/`;
  };

  const fetchUserData = async () => {
    try {
      const urls = [
        getRandomUserUrl(),
        getRandomUserUrl(),
        getRandomUserUrl(),
      ];

      // Realizar múltiples peticiones para obtener varios usuarios
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));

      // Extraer la información relevante de cada respuesta
      setUserData(data.map(user => user.results[0]));
    } catch (error) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="flex flex-wrap justify-around">
      {userData.length > 0 ? (
        userData.map((user, index) => (
        <div className="flex flex-col items-center justify-center text-center max-w-xs m-10" key={index}>
            <img src={user.picture.large} alt={`Imagen de ${user.name.first}`} className="justify-center mb-3" />
            <h3 className="font-extrabold text-yellow-300 text-lg">{user.name.first} {user.name.last}</h3>
            <p className="font-bold">Género:</p>
            <p>{user.gender}</p>
            <p className="font-bold">País:</p>
            <p>{user.location.country}</p>
            <p className="font-bold">Email:</p>
            <p>{user.email}</p>
        </div>
        
        
        ))
      ) : (
        <p>No hay datos de usuarios disponibles</p>
      )}
    </div>
  );
};

export default Api2;
