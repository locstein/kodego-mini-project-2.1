const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODlhYjBjYjU0MmY5YzI0NDcyNzZjNzMxODMyNjFlZiIsInN1YiI6IjY1MTFkYWU5ZTFmYWVkMDEwMGU5ZmUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FxYzstJSM_SDz9J8yKmi0t1bWPTA95dyRDu5AA9ytVw",
  },
};

const api = "https://api.themoviedb.org/3";

async function customFetch(endpoint) {
  const response = await fetch(`${api}${endpoint}`, options);
  const data = await response.json();
  return data.results;
}

export default customFetch;
