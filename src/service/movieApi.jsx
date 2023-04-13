import axios from 'axios';

const KEY = 'fcfa30881c3e984af96d841d25a29426';

export const getTrendingMuvies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
  const { data } = await axios.get(`${BASE_URL}/?${KEY}`);
  return data;
};

export const getSearchMovies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const { data } = await axios.get(`${BASE_URL}/?${KEY}`);
  return data;
};

export const getDetailsMovie = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios.get(`${BASE_URL}/?${KEY}`);
  return data;
};

export const getCreditsMovie = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios.get(`${BASE_URL}/?${KEY}`);
  return data;
};

export const getReviewsMuvies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios.get(`${BASE_URL}/?${KEY}`);
  return data;
};