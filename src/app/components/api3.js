"use client";
import { useEffect, useState } from 'react';
const Api3 = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getRandomJokeUrl = () => {
    return `https://api.chucknorris.io/jokes/random?lang=es`;
  };
  const fetchJokes = async () => {
    try {
      const urls = [
        getRandomJokeUrl(),
        getRandomJokeUrl(),
        getRandomJokeUrl(),
      ];
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));
      setJokes(data);
    } catch (error) {
      setError('Error fetching jokes');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJokes();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="error-message">{error}</p>;
  return (
    <div className="flex flex-wrap justify-around">
      {jokes.length > 0 ? (
        jokes.map((joke, index) => (
          <div className="flex flex-col items-center justify-center text-center max-w-xs m-10" key={index}>
            <h3 className="font-extrabold text-yellow-300 text-lg">Chiste #{index + 1}</h3>
            <p className="font-bold">Chiste:</p>
            <p>{joke.value}</p>
          </div>
        ))
      ) : (
        <p>No hay chistes disponibles</p>
      )}
    </div>
  );
};
export default Api3;
