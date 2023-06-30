import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PopularMovies from "./pages/movie-list/PopularMovies";
import About from "./pages/about/About";
import NotFound from "./pages/not-found/NotFound";
import NowPlayingMovies from "./pages/now-playing/NowPlayingMovies";
import Header from "./components/header/Header";
import MovieDetail from "./pages/movie-detail/MovieDetail";

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<PopularMovies />} />
               <Route path="/now-playing" element={<NowPlayingMovies />} />
               <Route path="/movie/:id" element={<MovieDetail />} />
               <Route path="/about" element={<About />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
            {/* footer */}
         </BrowserRouter>
      </>
   );
}

export default App;
