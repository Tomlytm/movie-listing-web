import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App"
import TrendingMovies from "./components/TrendingMovies";
import PopularMovies from "./components/PopularMovies";
import PopularSeries from "./components/PopularSeries";
import MovieDetails from "./components/MovieDetails";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trending",
    element: <TrendingMovies />,
  },
  {
    path: "/popularmovies",
    element: <PopularMovies />,
  },
  {
    path: "/popularseries",
    element: <PopularSeries />,
  },
  {
    path: "/details/:id",
    element: <MovieDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);