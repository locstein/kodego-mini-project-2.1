import Movies from "../movie/Movies";
import TvShows from "./TvShows";
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

      <section className="md:padding">
        <Movies title="Movies" fetchURL={requests.fetchPopular} />
      </section>

      <section className="padding">
        <TvShows title="Tv Shows" fetchURL={requests.fetchTvShows} />
      </section>
    </>
  );
};

export default Homes;
