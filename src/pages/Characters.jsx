import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";

export default function Characters() {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (store.characters.length === 0) {
      fetch("https://thesimpsonsapi.com/api/characters?page=1")
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "setCharacters", payload: data.results || [] });
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [store.characters.length, dispatch]);

  if (loading) return <div className="container mt-5 text-center"><h2>Cargando...</h2></div>;

  return (
  <div className="container-fluid mt-4 px-4">
    <h1 className="text-center mb-5 text-warning">👪 Simpsons Characters</h1>
    
    <div 
      className="d-flex flex-nowrap overflow-x-auto gap-3 p-3 bg-light rounded scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {store.characters.map((character, index) => (
        <CharacterCard key={character._id || index} character={character} />
      ))}
    </div>
  </div>
);

}
