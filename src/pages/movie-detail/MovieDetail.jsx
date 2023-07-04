import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieService from "../../_services/movieService";
import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

import { global } from "../../_config/global";

import getYear from "date-fns/getYear";
import format from "date-fns/format";

import "./MovieDetail.scss";
import VoteAverage from "../../components/vote-average/VoteAverage";
import PageLoader from "../../components/loaders/PageLoader";

export default function MovieDetail() {
   // hooks
   const { id } = useParams();
   const [movie, setMovie] = useState({});
   const [isLoading, setisLoading] = useState(true);

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
         setisLoading(false);
      }
   };

   const renderGenres = (genres) => {
      return (
         <Stack direction="row" spacing={1}>
            {genres.map((g) => (
               <Chip
                  key={g.id}
                  label={g.name}
                  variant="outlined"
                  size="small"
                  sx={{ color: "white", opacity: 0.8 }}
               />
            ))}
         </Stack>
      );
   };

   return (
      <>
         {!isLoading ? (
            <div className="MovieDetail">
               <section className="backdrop-container">
                  <div
                     className="backdrop-background"
                     style={{
                        backgroundImage: `url(${global.BASE_IMAGES_URL}/w1280${movie.backdrop_path})`,
                     }}
                  ></div>

                  <Container sx={{ pt: 5, pb: 5 }}>
                     <Grid container spacing={2}>
                        <Grid item="true" sm={4}>
                           <Box>
                              <img
                                 className="poster-path"
                                 src={`${global.BASE_IMAGES_URL}/w342${movie.poster_path}`}
                                 alt={movie.title}
                              />
                           </Box>
                        </Grid>
                        <Grid item="true" sm={8}>
                           <Box>
                              <Typography
                                 variant="h1"
                                 fontSize={40}
                                 fontWeight={500}
                              >
                                 {movie.title}

                                 <Typography
                                    sx={{ ml: 1, opacity: 0.6 }}
                                    variant="caption"
                                    fontSize={40}
                                    fontWeight={100}
                                 >
                                    ({getYear(new Date(movie.release_date))})
                                 </Typography>
                              </Typography>

                              <Stack direction="row" spacing={2}>
                                 <Chip
                                    sx={{
                                       border: "none",
                                       color: "white",
                                       fontSize: "1.05em",
                                    }}
                                    icon={
                                       <CalendarMonthIcon
                                          sx={{ "&&": { color: "white" } }}
                                       />
                                    }
                                    color="primary"
                                    label={format(
                                       new Date(movie.release_date),
                                       "dd/LL/yyyy"
                                    )}
                                    variant="outlined"
                                 />
                                 <Chip
                                    sx={{
                                       border: "none",
                                       color: "white",
                                       fontSize: "1.05em",
                                    }}
                                    icon={
                                       <QueryBuilderIcon
                                          sx={{ "&&": { color: "white" } }}
                                       />
                                    }
                                    color="primary"
                                    label={movie.runtime + " min"}
                                    variant="outlined"
                                 />
                              </Stack>
                           </Box>

                           <Box sx={{ mt: 3 }}>
                              {renderGenres(movie.genres)}
                           </Box>

                           <Box sx={{ mt: 3 }}>
                              <VoteAverage
                                 value={movie.vote_average * 10}
                                 size={60}
                              />
                           </Box>

                           <Box sx={{ mt: 3 }}>
                              <Typography
                                 variant="h3"
                                 fontSize={24}
                                 gutterBottom
                              >
                                 Overview
                              </Typography>

                              <Typography paragraph gutterBottom>
                                 {movie.overview}
                              </Typography>
                           </Box>
                        </Grid>
                     </Grid>
                  </Container>
               </section>
            </div>
         ) : (
            <PageLoader />
         )}
      </>
   );
}
