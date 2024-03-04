// HomePage.js
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchSeriesMovies,
  findMovie
} from "../services/movieApi";
import Hero from "./Hero";
import Skeleton from "./SkeletonLoader";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [seriesMovies, setSeriesMovies] = useState([]);
  const [term, setTerm] = useState("");
  const [searched, setSearched]= useState([])
  const updateTerm = (newTerm) => {
    setTerm(newTerm);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularMoviesData = await fetchPopularMovies(1);
        setPopularMovies(popularMoviesData.results.slice(0, 6));

        const trendingMoviesData = await fetchTrendingMovies("day");
        setTrendingMovies(trendingMoviesData.results.slice(0, 6));

        const seriesMoviesData = await fetchSeriesMovies(3);
        setSeriesMovies(seriesMoviesData.results.slice(0, 6));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
    
  }, []);
  useEffect(() => {
    if(term.length >= 1){
      const fetchData = async (query, page) => {
        try {
          const movieData = await findMovie(query, page);
          if(movieData.results.length >= 1){
            
          setSearched(movieData.results);
          } else {
            setSearched([]);
          }
          if(movieData.results === undefined){
            setSearched([])
          }
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
  
      fetchData(term, 1);
    }
  }, [term])
  
  return (
    <div  style={{backgroundColor: "#111111"}}>
 <div className=" text-white" style={{background: term.length >= 1 ?"url('/assets/images/flix3.jpg')" : "", height:'100%'}}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        
      <Hero term={term} setTerm={updateTerm} />
      </div>
      {term.length < 1? <div style={{ marginTop: "-160px", position: 'relative', zIndex: 20, }} className="categories">
        <div className="container fw-bold mb-2 section-title ">
          Trending Movies{" "}
          <span
            className="section-subtitle gradient-text  pointer"
            style={{ fontSize: 11 }}
          >
            <Link to={'/trending'}> Explore all{" "}
            </Link>
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              fill="currentColor"
              className=" bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </span>
        </div>
        {trendingMovies.length >= 1 ? (
          <MovieList movies={trendingMovies} />
        ) : (
          <div className="container"><Skeleton /></div>
        )}
        <div className="container fw-bold mb-2 section-title">
          Popular Movies{" "}
          <span
            className="section-subtitle gradient-text  pointer"
            style={{ fontSize: 11 }}
          >
            <Link to={'/popularmovies'}> Explore all{" "}
            </Link>
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              fill="currentColor"
              className=" bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </span>
        </div>
        
        {popularMovies.length >= 1? <MovieList movies={popularMovies} />: <div className="container"><Skeleton /></div>}
        

        <div className="container fw-bold mb-2 section-title">
          Popular Series{" "}
          <span
            className="section-subtitle gradient-text  pointer"
            style={{ fontSize: 11 }}
          >
            <Link to={'/popularseries'}> Explore all{" "}
            </Link>
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="10"
              fill="currentColor"
              className=" bi bi-chevron-double-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </span>
        </div>
        {seriesMovies.length >= 1 ?<MovieList movies={seriesMovies} />
        : <div className="container"><Skeleton /></div>
        }
      </div>: <div className="pt-5" style={{height:'600px', overflowY: 'scroll'}}>
        
      {searched.length >= 1 ? <div className="pt-5" ><MovieList movies={searched} /></div>
        : <div className="text-white pt-5 container">No result found for keyword: <span className="gradient-text1 semibold">{term}</span></div>
        }
        </div>}
      
    </div>
    </div>
   
  );
};

export default HomePage;
