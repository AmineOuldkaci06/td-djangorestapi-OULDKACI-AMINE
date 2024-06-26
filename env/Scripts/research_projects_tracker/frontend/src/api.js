

import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/'; // Assurez-vous que cette URL est correcte

export const api = axios.create({
  baseURL: API_URL,
});

export const getChercheurs = () => api.get('chercheurs/');
export const getProjets = () => api.get('projets/');
export const getPublications = () => api.get('publications/');

export const createChercheur = (data) => api.post('chercheurs/', data);
export const createProjet = (data) => api.post('projets/', data);
export const createPublication = (data) => api.post('publications/', data);

