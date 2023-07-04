import React, { useEffect, useState } from "react";

import movieService from "../../_services/movieService";
import MovieCard from "../../components/movie-card/MovieCard";
import { Box, Container, Pagination, Typography } from "@mui/material";

export default function NowPlayingMovies() {
   const initialMovies = [];
   // hooks
   const [movies, setMovies] = useState(initialMovies);
   const [page, setPage] = useState(1);
   const [count, setCount] = useState(0);

   useEffect(() => {
      getNowPlaying();
   }, [page]);

   //handlers
   const handleChange = (event, value) => {
      setPage(value);
   };

   // functions
   const getNowPlaying = async () => {
      try {
         const data = await movieService.getNowPlaying(page);
         setMovies(data.results);
         setCount(data.total_pages);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <Container sx={{ pt: 5, pb: 5 }}>
            <Typography variant="h1" fontSize={40} align="center" gutterBottom>
               Now playing movies
            </Typography>

            <Box
               sx={{ mt: 3, mb: 3, display: "flex", justifyContent: "center" }}
            >
               <Pagination page={page} count={count} onChange={handleChange} />
            </Box>

            <Box className="movie-list-wrapper">
               {movies.map((mov) => (
                  <MovieCard key={mov.id} movie={mov} />
               ))}
            </Box>

            <Box
               sx={{ mt: 3, mb: 3, display: "flex", justifyContent: "center" }}
            >
               <Pagination page={page} count={count} onChange={handleChange} />
            </Box>
         </Container>
      </>
   );
}
