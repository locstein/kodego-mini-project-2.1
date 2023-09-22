const key = "5d3f067445d2341370ceb589fea591e7";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}language=en-US&page=1`,
  requestMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  requestTvShows: `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}language=en`,
};

export default requests;
