import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieService from "../../_services/movieService";
import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { global } from "../../_config/global";
import "./MovieDetail.scss";

import getYear from "date-fns/getYear";
import format from "date-fns/format";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import VoteAverage from "../../components/vote-average/VoteAverage";
import PageLoader from "../../components/spinners/PageLoader";

export default function MovieDetail() {
   // hooks
   const { id } = useParams();
   const [movie, setMovie] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      getMovie();
   }, []);

   // functions
   const getMovie = async () => {
      try {
         const data = await movieService.getById(id);
         setMovie(data);
         console.log(data);
      } catch (error) {
         console.log(error);
      } finally {
         setIsLoading(false);
      }
   };

   const renderGenres = (genres) => {
      return (
         <Stack direction="row" spacing={1}>
            {genres.map((g) => (
               <Chip
                  key={g.id}
                  label={g.name}
                  sx={{ color: "rgba(255, 255, 255, 0.75)" }}
                  size="small"
                  variant="outlined"
               />
            ))}
         </Stack>
      );
   };
   return (
      <div className="MovieDetail">
         {!isLoading ? (
            <section className="backdrop-container">
               <div
                  className="backdrop-background"
                  style={{
                     backgroundImage: `url(${global.BASE_IMAGES_URL}/w1280${movie.backdrop_path})`,
                  }}
               ></div>
               <Container sx={{ pt: 5, pb: 5 }}>
                  <Grid container spacing={2}>
                     <Grid
                        item
                        sm={4}
                        sx={{ textAlign: { xs: "center", sm: "left" } }}
                     >
                        <Box>
                           <img
                              className="poster-path"
                              style={{
                                 borderRadius: "10px",
                              }}
                              src={
                                 movie.poster_path
                                    ? `${global.BASE_IMAGES_URL}/w342${movie.poster_path}`
                                    : "/images/w342/null.jpg"
                              }
                              alt={movie.title}
                           />
                        </Box>
                     </Grid>
                     <Grid item sm={8}>
                        <Box>
                           <Typography
                              variant="h1"
                              fontSize={40}
                              fontWeight={500}
                           >
                              {movie.title}

                              {movie.release_date && (
                                 <Typography
                                    sx={{
                                       ml: 1,
                                       color: "rgba(255, 255, 255, 0.75)",
                                    }}
                                    variant="caption"
                                    fontSize={40}
                                    fontWeight={300}
                                 >
                                    ({getYear(new Date(movie.release_date))})
                                 </Typography>
                              )}
                           </Typography>

                           <Stack direction="row" spacing={1}>
                              {movie?.release_date && (
                                 <Chip
                                    sx={{
                                       color: "white",
                                       border: "none",
                                       fontSize: "1.05em",
                                    }}
                                    color="primary"
                                    variant="outlined"
                                    icon={
                                       <CalendarMonthIcon
                                          sx={{ "&&": { color: "white" } }}
                                       />
                                    }
                                    label={format(
                                       new Date(movie.release_date),
                                       "dd/LL/yyyy"
                                    )}
                                 />
                              )}

                              <Chip
                                 sx={{
                                    color: "white",
                                    border: "none",
                                    fontSize: "1.05em",
                                 }}
                                 color="primary"
                                 variant="outlined"
                                 icon={
                                    <AccessTimeRoundedIcon
                                       sx={{ "&&": { color: "white" } }}
                                    />
                                 }
                                 label={movie.runtime + " min"}
                              />
                           </Stack>
                        </Box>
                        <Box sx={{ mt: 3 }}>{renderGenres(movie.genres)}</Box>
                        <Box sx={{ mt: 3 }}>
                           <VoteAverage
                              size={60}
                              value={movie.vote_average * 10}
                           />
                        </Box>

                        <Box sx={{ mt: 3 }}>
                           <Typography variant="h3" fontSize={24} gutterBottom>
                              Overview
                           </Typography>
                           <Typography
                              sx={{ color: "rgba(255, 255, 255, 0.75)" }}
                              paragraph
                              gutterBottom
                           >
                              {movie.overview}
                           </Typography>
                        </Box>
                     </Grid>
                  </Grid>
               </Container>
            </section>
         ) : (
            <>
               <PageLoader />
            </>
         )}
      </div>
   );
}
