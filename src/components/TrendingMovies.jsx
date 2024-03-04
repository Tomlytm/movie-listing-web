import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/movieApi";
import MovieList from "./MovieList";
import Skeleton from "./SkeletonLoader2";
import { Link } from "react-router-dom";
export default function TrendingMovies() {
  const [time, setTime] = useState("day");
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async (time) => {
      try {
        const movies = await fetchTrendingMovies(time);
        setTrendingMovies(movies.results);
      } catch (error) {
        console.log("error fetching popular movies", error);
      }
    };
    fetchMovies(time);
  }, [trendingMovies, time]);

  return (
    <div className="gradient-background py-2 border border-2 border-danger">
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
          <div className="d-sm-flex justify-content-end gap-5 container mt-5">
            <div className="hot-picks-header gothic-medium text-white">
              Hot Picks: <span className="gradient-text">Trending Now!</span>{" "}
            </div>
            <div className=" text-white  ">
              <select
                onChange={(e) => setTime(e.target.value)}
                className="p-2 pointer hp"
              >
                <option value="day" style={{ width: "30%" }} className="">
                  Today
                </option>
                <option value="week">This week</option>
              </select>
            </div>
          </div>
        </div>
        {trendingMovies.length >= 1 ? (
          <MovieList movies={trendingMovies} />
        ) : (
          <div className="container">
            <Skeleton />
          </div>
        )}
      </div>
    </div>
  );
}
