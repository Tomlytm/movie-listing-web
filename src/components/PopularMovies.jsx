import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { fetchPopularMovies } from "../services/movieApi";
import MovieList from "./MovieList";
import Skeleton from "./SkeletonLoader2";
import { Link } from "react-router-dom";
import GlobalPaginate from "./GlobalPagination"
export default function PopularMovies() {
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPopMovies = async (page) => {
      try {
        const movies = await fetchPopularMovies(page);
        setPopularMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (error) {
        console.log("error fetching popular movies", error);
      }
    };
    fetchPopMovies(page);
  }, [page]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage + 1);
  };

  return (
    <div className="gradient-background py-2 border border-2 border-danger" style={{minHeight:'100vh'}}>
      <div className="px-5 pt-4 container">
        <div>
          <div className="text-white ">
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">
              <div>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg> &nbsp;<span >Back</span>
              </div>
            
            </Link>
          </div>
          <div className="d-flex justify-content-center gap-5 container mb-3 pt-5">
            <div className="hot-picks-header gothic-medium text-white">
              Check out what's causing a<span className="gradient-text"> buzz!</span>{" "}
            </div>
          </div>
        </div>
        {popularMovies.length >= 1 ? (
          <>   <MovieList movies={popularMovies} />  <div className="pagination-container text-white w-100">
          <GlobalPaginate  onPageChange={({ selected }) => handlePageChange(selected)}
           pageCount={100}
          />
        </div>
          
          </>
     
        ) : (
          <div className="container">
            <Skeleton />
          </div>
        )}
       
      </div>
    </div>
  );
}
