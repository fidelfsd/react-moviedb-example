import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import movieService from "../../_services/movieService";
import MovieCard from "../../components/movie-card/MovieCard";
import PageLoader from "../../components/spinners/PageLoader";
import Pagination from "../../components/pagination/Pagination";
import { useSearchParams } from "react-router-dom";

export default function PopularMovies() {
   // hooks
   const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [count, setCount] = useState(0);
   const [searchParams, setSearchParams] = useSearchParams();

   console.log(searchParams.get("page"));
   // update the url without causing a navigation/reload
   // window.history.replaceState(null, "New Page Title", "/pathname/goes/here")

   useEffect(() => {
      getPopular();
      console.log("page", page);
   }, [page]);

   // hanldles
   const handleOnChange = (event, value) => {
      console.log("value", value);
      setPage(value);
   };

   // functions
   const getPopular = async () => {
      setIsLoading(true);
      try {
         const data = await movieService.getPopular(page);
         setMovies(data.results);
         setCount(500);
         // console.log(data.results);
      } catch (error) {
         console.log(error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <>
         {!isLoading ? (
            <Container sx={{ pt: 5, pb: 5 }}>
               <Typography
                  variant="h1"
                  fontSize={40}
                  align="center"
                  gutterBottom
               >
                  Popular movies
               </Typography>

               <Box sx={{ mt: 2, mb: 2 }}>
                  <Pagination
                     page={page}
                     count={count}
                     onChange={handleOnChange}
                  />
               </Box>

               <div className="movie-list-wrapper">
                  {movies.map((mov) => (
                     <MovieCard key={mov.id} movie={mov} />
                  ))}
               </div>

               <Box sx={{ mt: 2, mb: 2 }}>
                  <Pagination
                     page={page}
                     count={count}
                     onChange={handleOnChange}
                  />
               </Box>
            </Container>
         ) : (
            <>
               <PageLoader />
            </>
         )}
      </>
   );
}
