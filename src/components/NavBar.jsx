import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
export default function NavBar({  term, setTerm }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="container navbar d-lg-flex d-md-flex justify-content-between align-items-center py-3">
      <div className="d-lg-flex d-md-flex gap-5 align-items-center">
        <div
          className="dancing-script gradient-text fw-bold text-shadow ms-1"
          style={{ fontSize: 40 }}
        >
          Cinemania.
        </div>
        <div
          className="navlinks pointer d-lg-flex d-none gap-3 text-white "
          style={{ fontSize: "13px", fontWeight: "500" }}
        >
          {/* <div>Home</div> */}
          <Link
            to={"/popularseries"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>Tv Series</div>
          </Link>
          <Link
            to={"/popularmovies"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div>Movies</div>
          </Link>
          <div>New & Popular</div>
          <div>My List</div>
          <div>Browse by Languages</div>
        </div>
      </div>
      <div className="d-lg-none me-2 border p-1 pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>

      <div className="d-lg-flex d-none gap-4 align-items-center">
        {!isExpanded ? (
          <div
            className="d-lg-block d-none pointer"
            onClick={() => setIsExpanded(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="text-white bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        ) : (
          <div className="slide-inn">
            <div className="bg-white py-1 px-2 rounded-3">
              <CiSearch className="text-dark fs-5" />
              <input
                type="text"
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                  // if (e.target.value.length > 0) {
                  //   setTyped(true);
                  // } else {
                  //   setTyped(false);
                  // }
                }}
                className="border-0"
              />
              <MdCancel
                className="text-dark pointer"
                onClick={() => {
                  setIsExpanded(false);
                  setTerm("");
                  // setTyped(false)
                }}
              />
            </div>
          </div>
        )}

        <div className="d-lg-block d-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="text-white bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
          </svg>
        </div>
        <div className="d-lg-block d-none">
          <img className="rounded-2" src="/assets/images/avatar.png" alt="" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="text-white bi bi-caret-down-fill ms-2"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
