import HeroCard from "./HeroCard";
import HeroCard2 from "./HeroCard2";
import HeroCard3 from "./HeroCard3";
import React, { useEffect, useState } from "react";
import requests from "../../../../http/requests";
import customFetch from "../../../../http/fetch";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovies() {
      const data = await customFetch(requests.fetchTopRated);
      setMovies(data);

      const movie = Math.floor(Math.random() * data.length);
      setMovie(data[movie]);
    }
    fetchMovies();
    return () => {};
  }, []);
  console.log(movie);

  const truncateString = (str, n) => {
    if (str?.length > n) {
      return str.slice(0, n) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <header className="md:padding grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 md:gap-8">
        <div className="row-span-6 md:col-span-4 md:row-span-3 md:rounded-lg shadow-lg relative">
          <div className="h-[19rem] md:h-[30rem]">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie?.title}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
          <div className="absolute w-full top-[30%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {movie?.title}
            </h1>
            <div className="my-4">
              <button className="border rounded bg-gray-300 text-black border-gray py-2 px-5 duration-75 hover:scale-110">
                Play
              </button>
              <button className="border rounded text-white border-gray py-2 px-5 ml-4 duration-75 hover:scale-110">
                Watch Later
              </button>
            </div>
            <p className="w-full md:max-w-[60%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 hidden md:flex">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>

        <div className="md:col-span-2 md:rounded-lg shadow-xl relative">
          <HeroCard />
        </div>
        <div className="md:col-span-2 md:rounded-lg shadow-xl relative">
          <HeroCard2 />
        </div>
        <div className="md:col-span-2 md:rounded-lg shadow-xl relative">
          <HeroCard3 />
        </div>
      </header>
    </div>
  );
};

export default Hero;
