import Homes from "./pages/components/home/Homes";
import Movies from "./pages/views/Movies";
import TvShows from "./pages/views/TvShows";
import Profile from "./pages/views/Profile";

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
