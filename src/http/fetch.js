const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmM0YTBkNjYyYjBmODlhOWIyMDE5MWY1ZjQxMDdjMCIsInN1YiI6IjY1MDg2NzE3MTA5ZGVjMDE0ZjQxZWQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWQntQRu88Dn0fSUGrFEFa4qixmfLkKieZoWoT5y908",
  },
};

const api = "https://api.themoviedb.org/3";

async function customFetch(endpoint) {
  const response = await fetch(`${api}${endpoint}`, options);
  const data = await response.json();
  return data.results;
}

export default customFetch;
