import Slider from "./Slider";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useState, useEffect } from "react";
import customFetch from "../../../http/fetch";

const Movies = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await customFetch(fetchURL);
      setMovies(data);
    }
    fetchMovies();
    return () => {};
  }, [fetchURL]);
  // console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-black font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block duration-100 left-0 text-2xl md:text-[2.5rem]"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Slider key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block duration-100 right-0 text-2xl md:text-[2.5rem]"
        />
      </div>
    </>
  );
};

export default Movies;
