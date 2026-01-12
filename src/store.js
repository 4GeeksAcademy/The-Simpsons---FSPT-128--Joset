export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
     // NUEVO: Para Simpsons
    characters: [],
    favorites: (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('simpsonsFavorites')) || [] : []),
    currentCharacter: null
  }
}
    
export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    
    // NUEVOS CASES PARA SIMPSONS
    case 'setCharacters':
      return { ...store, characters: action.payload };
    case 'toggleFavorite':
      return { ...store, favorites: action.payload };
    case 'setCurrentCharacter':
      return { ...store, currentCharacter: action.payload };
    
    default:
      throw Error('Unknown action.');
  }    
}

// export const actions = {
//   // Mantén actions existentes si hay...
//   setCharacters: (characters) => ({ type: 'setCharacters', payload: characters }),
//   toggleFavorite: (characterId) => {
//     const favorites = store.favorites.includes(characterId)
//       ? store.favorites.filter(id => id !== characterId)
//       : [...store.favorites, characterId];
//     localStorage.setItem('simpsonsFavorites', JSON.stringify(favorites));
//     return { type: 'toggleFavorite', payload: favorites };
//   },
//   setCurrentCharacter: (character) => ({ type: 'setCurrentCharacter', payload: character })
// };
console.log('Store inicial:', window.store || 'No accesible aún');

