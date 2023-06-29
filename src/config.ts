export const api_key: string = "ee0dd0cc14c2393b4e8f705d7e706e61";
export const tmdb_url: string = "https://api.themoviedb.org/3/";
export const movie_db_url: string = "https://api.themoviedb.org/3/movie/";
export const tvdb_url: string = "https://api.themoviedb.org/3/tv/";
export const search_url: string = "https://api.themoviedb.org/3/search/movie?";

export const tmdb_api = {
  getMovieList: (type: string, page = 1) =>
    `${tmdb_url}/${type}?api_key=${api_key}&page=${page}`,
  photoUrl: (url: string) => `https://image.tmdb.org/t/p/original/${url}`,
  SearchUrl: (query: string, page = 1) =>
    `${search_url}api_key=${api_key}&query=${query}&page=${page}`,
};
