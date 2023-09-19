import { NavLink } from "react-router-dom";

const Homes = () => {
  return (
    <>
      <div className="navbar bg-[#fbf3f0] shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-black btn-circle md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#fbf3f0] rounded-box w-52 text-black"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/tv-shows">Tv Shows</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="normal-case text-[2rem] font-semibold text-black">
            Home
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
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

      <section id="Home">
        <div className="padding">Movies</div>
      </section>
      <section id="TvShows">
        <div className="padding">Tv Shows</div>
      </section>
    </>
  );
};

export default Homes;
