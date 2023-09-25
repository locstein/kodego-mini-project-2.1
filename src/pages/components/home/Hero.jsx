import React, { useEffect, useState } from "react";
import customFetch from "../../../http/fetch";
import requests from "../../../http/requests";

const Hero = () => {
  async function fetchTopRatedMovies() {
    const data = await customFetch(requests.fetchPopular);
    console.log(data);
  }

  fetchTopRatedMovies();

  return (
    <div>
      <header className="md:padding grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 md:gap-8">
        <div className="row-span-6 md:col-span-4 md:row-span-3 bg-black md:rounded-lg shadow-lg">
          <div className="h-[19rem] md:h-[30rem]"></div>
        </div>
        <div className="md:col-span-2 bg-teal-300 md:rounded-lg shadow-xl">
          <div className="h-[14rem] md:h-24"></div>
        </div>
        <div className="md:col-span-2 bg-yellow-300 md:rounded-lg shadow-xl">
          <div className="h-[14rem] md:h-24"></div>
        </div>
        <div className="md:col-span-2 bg-slate-300 md:rounded-lg shadow-xl">
          <div className="h-[14rem] md:h-24"></div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
