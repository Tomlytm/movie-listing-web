import axios from 'axios';

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2Q4ZWYyNWUwOTVhMDVlMjdlOTgxM2FkOWE5ZWVjNCIsInN1YiI6IjY1ZTFmMGIwMmQ1MzFhMDE2MmMwNTdiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qS6ZNhZ7VTYimgtR6dqBaSVER2Vi1wZ-YfMHP0CTObc";

export const fetchPopularMovies = async (page) => {
  try {
    const response = await movieApi.get('/movie/popular', {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching popular movies:', error);
    throw error;
  }
};


export const fetchTrendingMovies = async (time) => {
  try {
    const response = await movieApi.get(`/trending/movie/${time}`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        time

      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchSeriesMovies = async (page) => {
  try {
    const response = await movieApi.get('/tv/popular', {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching series movies:', error);
    throw error;
  }
};
export const fetchMovieDetails = async (id) => {
  try {
    const response = await movieApi.get(`/movie/${id}`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching series movies:', error);
    throw error;
  }
};
export const findMovie = async (query, page) => {
  try {
    const response = await movieApi.get(`/search/movie`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        query,
        page
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
        accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching series movies:', error);
    throw error;
  }
};
