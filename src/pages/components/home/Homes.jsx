import Movies from "../movie/Movies";
import TvShows from "../tvshows/TvShows";
import Hero from "./hero/Hero";
import Navbar from "./Navbar";
import requests from "../../../http/requests";

const Homes = () => {
  return (
    <>
      {/* navbar for the home page */}
      <header>
        <Navbar />
      </header>

      <section>
        <Hero />
      </section>

      <section className="padding-x">
        <Movies rowId="1" title="Movies" fetchURL={requests.fetchPopular} />
      </section>

      <section className="padding-x">
        <TvShows rowId="2" title="Tv Shows" fetchURL={requests.fetchTvShows} />
      </section>
    </>
  );
};

export default Homes;
