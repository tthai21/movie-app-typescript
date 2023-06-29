import { Fragment } from "react";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="header flex">
        <div className="text-white body-left w-[240px] bg-user h-screen sticky top-0">
          Watch!!!
        </div>
        <div className="body-main  w-[70%]">
          <div className="flex gap-x-5 py-6 text-white page-container text-xl">
            <span className="text-primary">Home</span>
            <span>Movies</span>
          </div>
          <section className="banner page-container h-[300px] mb-20 ">
            <div className="w-full h-full bg-white rounded-lg relative">
              <div className="overlay absolute inset-0  bg-gradient-to-t from-black to-gray-200 opacity-20 rounded-lg"></div>
              <img
                className="object-cover w-full h-full rounded-lg "
                src="https://helios-i.mashable.com/imagery/articles/033kBmLCuB3k8dcc8kpMftI/hero-image.fill.size_1248x702.v1623370357.jpg"
                alt=""
              />
              <div className="absolute left-10 bottom-5 w-full text-white">
                <h2 className="font-bold text-3xl mb-5">The Adventure</h2>
                <div className="flex items-center gap-x-3 mb-5">
                  <span className="border border-white px-4 py-2 rounded-lg font-bold text-sm ">
                    Adventure
                  </span>
                  <span className="border border-white px-4 py-2 rounded-lg font-bold text-sm">
                    Hero
                  </span>
                  <span className="border border-white px-4 py-2 rounded-lg font-bold text-sm">
                    Movie
                  </span>
                </div>
                <div>
                  <button className="bg-primary text-base font-bold px-4 py-2 rounded-lg">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </section>
          <MovieList></MovieList>
          <MovieList></MovieList>
          <MovieList></MovieList>

          {/* right menus */}
        </div>
        <div className="sticky text-white top-0 body-right w-[420px] bg-user h-screen ">
          Search bar
        </div>
      </header>
    </Fragment>
  );
}

export default App;
