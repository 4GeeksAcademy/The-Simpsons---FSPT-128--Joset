export const CharacterCard = ({ character, isFavorite, onToggleFavorite }) => {
    
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 mb-3">
      <div className="card h-100" style={{ transform: 'scale(0.)', transformOrigin: 'top center' }}>
        <img 
          src={"https://cdn.thesimpsonsapi.com/500/character/" + character.id + ".webp"}
          className="card-img-top hover-zoom"
          alt={character.name}
          style={{ height: "auto", width: "100%" }}
        />
        <div className="card-body py-1">
          <h6 className="card-title small fw-bold mb-1">{character.name}</h6>
          <p className="card-text xsmall mb-1">{character.occupation}</p>
          <p className="card-text xsmall mb-1">{character.age} años</p>
          <button 
            className={"btn btn-sm " + (isFavorite ? "btn-warning" : "btn-outline-warning")}
            onClick={() => onToggleFavorite(character.id)}
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

