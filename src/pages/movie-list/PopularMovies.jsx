import React, { useEffect, useState } from "react";

import movieService from "../../_services/movieService";
import MovieCard from "../../components/movie-card/MovieCard";
import { Box, Container, Typography } from "@mui/material";

export default function PopularMovies() {
   const initialMovies = [];
   // hooks
   const [movies, setMovies] = useState(initialMovies);

   useEffect(() => {
      getPopular();
   }, []);

   // functions
   const getPopular = async () => {
      try {
         const data = await movieService.getPopular();
         setMovies(data.results);
         console.log(data.results);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <Container sx={{ pt: 5, pb: 5 }}>
            <Typography variant="h1" fontSize={40} align="center" gutterBottom>
               Popular movies
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
