import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export const generateRecipe = (ingredients) =>
  axios.post(`${API_BASE}/generate-recipe`, { ingredients });
