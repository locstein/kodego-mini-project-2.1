import React, { useEffect, useState } from "react";
import requests from "../../../http/requests";
import customFetch from "../../../http/fetch";

const HeroCard2 = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovies() {
      const data = await customFetch(requests.fetchUpcoming);
      setMovies(data);

      const movie = Math.floor(Math.random() * data.length);
      setMovie(data[movie]);
    }
    fetchMovies();
    return () => {};
  }, []);
  // console.log(movie);

  const truncateString = (str, n) => {
    if (str?.length > n) {
      return str.slice(0, n) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="hidden md:flex">
      <img
        className="h-full w-full md:h-[8.7rem] object-cover rounded"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute w-full bottom-[5%] p-4 md:p-8">
        <h1 className="text-xl font-bold text-white">{movie?.title}</h1>
        <div>
          <button className="border rounded bg-gray-300 text-black border-gray duration-75 hover:scale-110 px-4 py-1 mt-2">
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard2;
