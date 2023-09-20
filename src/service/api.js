import axios from 'axios';

const API_KEY = '83cb4c236fe3ce89960e899c26c6634d';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  const movies = data.results;
  //   console.log(data);
  return movies;
};

export const fetchByQuery = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: query,
    },
  });
  //   console.log(data);
  return data;
};

export const fetchById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  //   console.log(data);
  return data;
};

export const fetchCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  //   console.log(data);
  return data;
};

export const fetchReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  console.log(data);
  return data;
};

//API Read Access Token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2NiNGMyMzZmZTNjZTg5OTYwZTg5OWMyNmM2NjM0ZCIsInN1YiI6IjY1MDA3NWU2ZTBjYTdmMDEyZWI4YzQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXlqdE9D0Decv0sTrThlk6LcYGyTwiAC-bW_wb9YYT0
