import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/movieApi";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
export default function MovieDetails() {
  let { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchMovieDetail = async (movId) => {
      try {
        const movies = await fetchMovieDetails(movId);
        setMovie(movies);
        console.log(movies);
      } catch (error) {
        console.log("error fetching popular movies", error);
      }
    };
    fetchMovieDetail(id);
  }, [id]);
  function convertToHoursAndMinutes(totalMinutes) {
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    return `${hours}h  ${minutes < 10 ? "0" : ""} ${minutes}min`
  }

  return (
    <>
      {movie !== undefined ? (
        <>
          <div className="overlay-container">
            <div className="overlay"></div>
            <div
              className="background-image"
              style={{
                background: `url(${`https://image.tmdb.org/t/p/original${movie.backdrop_path}`})`,
                height: "100%",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="text-container container">
            <div className="text container py-5">
              <div className="text-white d-flex container w-100">
                <div className="container">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    <div className="container">
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
              </div>
              <div
                className="py-5  container d-lg-flex  justify-content-between align-items-center "
                style={{ height: 550, width: "90%" }}
              >
                <div className="py-5  hero-section">
                  <p
                    className="text-white gothic fade-in"
                    style={{ fontSize: "2.5rem" }}
                  >
                    {movie.title}
                  </p>
                  <p
                    className="text-success semibold fade-in "
                    style={{ fontSize: 11 }}
                  >
                    <span className="gradient-background1 rounded-pill p-2">
                      {movie.status}
                    </span>
                    <span className="text-white ms-2 border rounded-2 py-1 px-2">
                      HD
                    </span>
                    <span className="text-white ms-2 gradient-background rounded-2 py-1 px-2">
                      {convertToHoursAndMinutes(movie.runtime)}
                    </span>
                  </p>
                  <p className="text-white fade-in" style={{ fontSize: 15 }}>
                    {movie.overview}
                  </p>
                  <p className="star-rating">
                    <StarRating
                      rating={(movie.vote_average / 2).toFixed(1)}
                      totalStars={5}
                    />
                  </p>{" "}
                  <p>
                    <span className="gradient-text1 fw-bold">Genres:</span>
                    {movie.genres !== undefined &&
                      movie.genres.map((item, index) => (
                        <span key={item.id}>
                          &nbsp;{item.name}{" "}
                          <span
                            className={`${
                              index === movie.genres.length - 1 ? "d-none" : ""
                            }`}
                          >
                            ,
                          </span>
                        </span>
                      ))}
                  </p>
                  <p>
                    <span className="gradient-text1 fw-bold">Released</span>:{" "}
                    {movie.release_date}
                  </p>{" "}
                  <p className="">
                    <span className="gradient-text1 fw-bold">Tagline: </span>
                    {movie.tagline}
                  </p>
                </div>

                <div className="">
                  <img
                  className="detail-img fade-in"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    style={{ height: 400 }}
                    alt=""
                  />
                </div>
                {/* <div className="d-flex "><StarRating rating={3.5} totalStars={5}  /></div> */}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
