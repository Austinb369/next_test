"use client";
import { useEffect, useState } from 'react';

const Api1 = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomPokemonUrl = () => {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    return `https://pokeapi.co/api/v2/pokemon/${randomId}`;
  };

  const fetchPokemonData = async () => {
    try {
      const randomId = Math.floor(Math.random() * 300) + 1;
      const urls = [
        getRandomPokemonUrl(),
        getRandomPokemonUrl(),
        getRandomPokemonUrl()
      ];
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));
      setPokemonData(data);
    } catch (error) {
      setError('Error fetching Pokémon data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className='flex flex-wrap justify-around'>
      {pokemonData.length > 0 ? (
        pokemonData.map(pokemon => (
          <div className="flex flex-col items-center justify-center text-center max-w-xs m-10" key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} className="justify-center" />
            <p className='font-extrabold text-yellow-300'>{pokemon.name}</p>
            <p className='font-bold'>Habilidades: </p>
            <p>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p className='font-bold'>Tipo: </p>
            <p>{pokemon.types.map(type => type.type.name).join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No hay datos de Pokémon disponibles</p>
      )}
    </div>
  );
};

export default Api1;
