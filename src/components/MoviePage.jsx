// MoviePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieId = match.params.id;
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY`);
      setMovie(response.data);
    };

    fetchMovie();
  }, [match.params.id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-page">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <p>Runtime: {movie.runtime} minutes</p>
    </div>
  );
};

export default MoviePage;
