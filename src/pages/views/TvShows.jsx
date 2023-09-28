import Navbar from "../components/home/Navbar";
import React, { useState, useEffect } from "react";
import customFetch from "../../http/fetch";
import requests from "../../http/requests";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await customFetch(requests.fetchTvShows);
      setMovies(data);
    }
    fetchMovies();
    return () => {};
  }, []);
  // console.log(movies);

  return (
    <div className="padding">
      <Navbar />
      <h2 className="font-bold text-4xl text-black ml-2.5 mt-16 sm:mt-15 sm:mt-3 mb-4">
        Tv Shows
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-y-5">
        {movies.map((item, id) => (
          <div
            key={id}
            className="inline-block cursor-pointer relative p-1 mx-2"
          >
            <img
              className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
