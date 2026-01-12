import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";  // ← .jsx NO .js

export const Navbar = () => {
  const { store: { favorites }, dispatch } = useGlobalReducer();
  
  const toggleFavorite = (character) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: character });
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">The Simpsons</span>
        
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle ml-auto" type="button" 
                  data-bs-toggle="dropdown" aria-expanded="false">
            ⭐ Favoritos ({favorites.length})
          </button>
          
          <ul className="dropdown-menu dropdown-menu-end">
            {favorites.length === 0 ? (
              <li><span className="dropdown-item text-center">Sin favoritos</span></li>
            ) : (
              favorites.map((char) => (
                <li key={char._id || char.id}>
                  <div className="dropdown-item d-flex justify-content-between align-items-center">
                    <span>{char.name}</span>
                    <button className="btn btn-sm btn-outline-danger ms-2" 
                            onClick={() => toggleFavorite(char)}>
                      Quitar
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
