import React from "react";
import NavBar from "./NavBar";
import Carousel from "react-bootstrap/Carousel";
export default function Hero({ term, setTerm }) {
  return (
    <div className="position-relative">
      <div
        style={{ background: "transparent", zIndex: 200 }}
        className="top-0 position-absolute w-100"
      >
        <NavBar term={term} setTerm={setTerm} />
      </div>
      {term.length < 1 ? (
        <Carousel fade controls={false} style={{ height: 650 }} interval={1500}>
          <Carousel.Item
            style={{ background: "url('/assets/images/flix.jpg')" }}
          >
            <div
              className=" container d-flex align-items-center "
              style={{ height: 550 }}
            >
              <div className=" hero-section">
                <p className="text-white gothic-header">
                  <span className="gradient-text gothic-header1 ">
                    Discover
                  </span>
                  , Explore, Enjoy: Your Ultimate Movie Hub!
                </p>

                <p className="text-white">
                  Find the Latest Releases, Reviews, and Recommendations. Join
                  the Movie Buff Community Today!
                </p>
                <div className="d-flex gap-3  slide-in">
                  <div className="btn bg-white py-2">
                    {" "}
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-camera-reels-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                      </svg>
                      Browse Movies
                    </div>
                  </div>
                  <div className="btn text-white bg-secondary py-2 ">
                    {" "}
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-person-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                      </svg>
                      Join Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item
            style={{ background: "url('/assets/images/flix3.jpg')" }}
          >
            <div
              className=" container d-flex align-items-center "
              style={{ height: 550 }}
            >
              <div className=" hero-section">
                <p className="text-white gothic-header">
                  <span className="gradient-text gothic-header1">Discover</span>
                  , Explore, Enjoy: Your Ultimate Movie Hub!
                </p>

                <p className="text-white">
                  Find the Latest Releases, Reviews, and Recommendations. Join
                  the Movie Buff Community Today!
                </p>
                <div className="d-flex gap-3">
                  <div className="btn bg-white py-2">
                    {" "}
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-camera-reels-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                      </svg>
                      Browse Movies
                    </div>
                  </div>
                  <div className="btn text-white bg-secondary py-2 ">
                    {" "}
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-person-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                      </svg>
                      Join Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item
            style={{ background: "url('/assets/images/flix4.jpg')" }}
          >
            <div
              className=" container d-flex align-items-center "
              style={{ height: 550 }}
            >
              <div className=" hero-section">
                <p className="text-white gothic-header">
                  <span className="gradient-text gothic-header1">Discover</span>
                  , Explore, Enjoy: Your Ultimate Movie Hub!
                </p>

                <p className="text-white">
                  Find the Latest Releases, Reviews, and Recommendations. Join
                  the Movie Buff Community Today!
                </p>
                <div className="d-flex gap-3">
                  <div className="btn bg-white py-2">
                    {" "}
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-camera-reels-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                      </svg>
                      Browse Movies
                    </div>
                  </div>
                  <div className="btn text-white bg-secondary py-2 ">
                    {" "}
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        className="bi bi-person-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                      </svg>
                      Join Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      ) : null}
    </div>
  );
}
