import React, { useEffect, useState } from "react";
import { fetchSeriesMovies } from "../services/movieApi";
import MovieList from "./MovieList";
import Skeleton from "./SkeletonLoader2";
import { Link } from "react-router-dom";
import GlobalPaginate from "./GlobalPagination";
export default function PopularSeries() {
  const [page, setPage] = useState(1);
  const [seriesMovies, setSeriesMovies] = useState([]);
  useEffect(() => {
    const fetchSeries = async (page) => {
      try {
        const movies = await fetchSeriesMovies(page);
        setSeriesMovies(movies.results);
      } catch (error) {
        console.log("error fetching popular movies", error);
      }
    };
    fetchSeries(page);
  }, [page]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage + 1);
  };

  return (
    <div
      className="gradient-background py-2 border border-2 border-danger"
      style={{ minHeight: "100vh" }}
    >
      <div className="  px-5 pt-4  container">
        <div>
          <div className="text-white">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>{" "}
                &nbsp;<span>Back</span>
              </div>
            </Link>
          </div>
          <div className="d-flex justify-content-end gap-5 container pt-5">
            <div className="hot-picks-header gothic-medium text-white">
              For Binge-Worthy Series: Watch{" "}
              <span className="gradient-text"> Now!</span>{" "}
            </div>
          </div>
        </div>
        {seriesMovies.length >= 1 ? (
          <>
            {" "}
            <MovieList movies={seriesMovies} />
            <div className="pagination-container text-white w-100">
              {" "}
              <GlobalPaginate
                onPageChange={({ selected }) => handlePageChange(selected)}
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
