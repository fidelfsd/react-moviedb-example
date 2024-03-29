import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import movieService from "../../_services/movieService";
import MovieCard from "../../components/movie-card/MovieCard";
import PageLoader from "../../components/spinners/PageLoader";
import Pagination from "@mui/material/Pagination";

export default function NowPlayingMovies() {
   // hooks
   const [movies, setMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [count, setCount] = useState(0);

   useEffect(() => {
      getPopular();
   }, [page]);

   const handleChange = (event, value) => {
      setPage(value);
   };

   // functions
   const getPopular = async () => {
      setIsLoading(true);
      try {
         const data = await movieService.getNowPlaying(page);
         setMovies(data.results);
         setCount(data.total_pages);
         console.log(data.results);
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
                  Now playing movies
               </Typography>

               <Box
                  sx={{
                     mt: 3,
                     mb: 3,
                     display: "flex",
                     justifyContent: "center",
                  }}
               >
                  <Pagination
                     sx={{ m: "auto" }}
                     count={count}
                     page={page}
                     onChange={handleChange}
                  />
               </Box>

               <div className="movie-list-wrapper">
                  {movies.map((mov) => (
                     <MovieCard key={mov.id} movie={mov} />
                  ))}
               </div>

               <Box
                  sx={{
                     mt: 3,
                     mb: 3,
                     display: "flex",
                     justifyContent: "center",
                  }}
               >
                  <Pagination
                     sx={{ m: "auto" }}
                     count={count}
                     page={page}
                     onChange={handleChange}
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
