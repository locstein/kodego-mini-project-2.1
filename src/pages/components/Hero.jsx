import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="padding grid grid-cols-1 md:grid-cols-6 md:grid-rows-3 gap-8">
        <div className="row-span-6 md:col-span-4 md:row-span-3 bg-black rounded-lg shadow-xl">
          <div className="h-24"></div>
        </div>
        <div className="md:col-span-2 bg-teal-300 rounded-lg shadow-xl">
          <div className="h-24"></div>
        </div>
        <div className="md:col-span-2 bg-yellow-300 rounded-lg shadow-xl">
          <div className="h-24"></div>
        </div>
        <div className="md:col-span-2 bg-slate-300 rounded-lg shadow-xl">
          <div className="h-24"></div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
