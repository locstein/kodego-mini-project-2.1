import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useState, useEffect } from "react";
import customFetch from "../../../http/fetch";
import TvSlider from "./TvSlider";

const TvShows = ({ title, fetchURL }) => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    async function fetchTvShows() {
      const data = await customFetch(fetchURL);
      setTvShows(data);
    }
    fetchTvShows();
    return () => {};
  }, [fetchURL]);
  // console.log(tvShows);

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
      <h2 className="text-black dark:text-gray-200 font-bold md:text-xl p-4">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block duration-100 left-0 text-2xl md:text-[2.5rem]"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {tvShows.map((item, id) => (
            <TvSlider key={id} item={item} />
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

export default TvShows;
