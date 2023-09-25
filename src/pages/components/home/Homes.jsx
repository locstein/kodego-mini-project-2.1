import Movies from "./Movies";
import TvShows from "./TvShows";
import Hero from "./Hero";
import Navbar from "./Navbar";

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

      <section className="padding">
        <Movies />
      </section>

      <section className="padding">
        <TvShows />
      </section>
    </>
  );
};

export default Homes;
