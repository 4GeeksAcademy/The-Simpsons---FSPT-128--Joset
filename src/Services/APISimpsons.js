const API_URL = 'https://thesimpsonsapi.com/api';

export const getCharacters = async (page = 1) => {
  const response = await fetch(`${API_URL}/characters?page=${page}`);
  const data = await response.json();
  return data.results || data;  // API devuelve {results: [...]}
};

export const getCharacterDetail = async (id) => {
  const response = await fetch(`${API_URL}/characters/${id}`);
  return await response.json();
};
