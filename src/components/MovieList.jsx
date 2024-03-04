// MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
 
  
  return (
    <div className="container moviecard fade-in">
      <div className="row moviecard-container">
        {movies.map((movie) => (
          // <MovieCard key={movie.id} movie={movie} />
          <MovieCard key={movie.id} id={movie.id} name={movie.original_title ? movie.original_title: movie.original_name} overview={movie.overview} imgPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
