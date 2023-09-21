import Homes from "./pages/components/Homes";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Profile from "./pages/Profile";

const routes = [
  {
    path: "/",
    element: <Homes />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tv-shows",
    element: <TvShows />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default routes;
