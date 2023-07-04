import React, { useEffect, useState } from "react";

import movieService from "../../_services/movieService";
import MovieCard from "../../components/movie-card/MovieCard";
import { Box, Container, Typography } from "@mui/material";
import Pagination from "../../components/pagination/Pagination";

export default function PopularMovies() {
   const initialMovies = [];
   // hooks
   const [movies, setMovies] = useState(initialMovies);
   const [page, setPage] = useState(1);

   useEffect(() => {
      getPopular();
   }, [page]);

   // handlers
   const handleChange = (event, value) => {
      setPage(value);
   };
   // functions
   const getPopular = async () => {
      try {
         const data = await movieService.getPopular(page);
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

            <Box sx={{ mt: 3, mb: 3, textAlign: "center" }}>
               <Pagination page={page} count={500} onChange={handleChange} />
            </Box>

            <Box className="movie-list-wrapper">
               {movies.map((mov) => (
                  <MovieCard key={mov.id} movie={mov} />
               ))}
            </Box>
         </Container>
      </>
   );
}
