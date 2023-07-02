export {};
declare global {
  interface movieType {
    adult: boolean = false;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: false;
    vote_average: number;
    vote_count: number;
    // isMovie: boolean = true;
    name: string;
    first_air_date: string;
  }
  // interface tvType {
  //   backdrop_path: string;
  //   first_air_date: string;
  //   genre_ids: number[];
  //   id: number;
  //   name: string;
  //   origin_country: string[];
  //   original_language: string;
  //   original_name: string;
  //   overview: string;
  //   popularity: number;
  //   poster_path: string;
  //   vote_average: number;
  //   vote_count: number;
  //   isMovie: boolean = false;
  //   original_title: string;
  //   release_date: string;
  // }
}
