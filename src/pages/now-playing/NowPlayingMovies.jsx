import React, { useEffect, useState } from "react";

import movieService from "../../_services/movieService";
import MovieCard from "../../components/movie-card/MovieCard";
import { Box, Container, Typography } from "@mui/material";

export default function NowPlayingMovies() {
   const initialMovies = [];
   // hooks
   const [movies, setMovies] = useState(initialMovies);

   useEffect(() => {
      getNowPlaying();
   }, []);

   // functions
   const getNowPlaying = async () => {
      try {
         const data = await movieService.getNowPlaying();
         setMovies(data.results);
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

            <Box className="movie-list-wrapper">
               {movies.map((mov) => (
                  <MovieCard key={mov.id} movie={mov} />
               ))}
            </Box>
         </Container>
      </>
   );
}
