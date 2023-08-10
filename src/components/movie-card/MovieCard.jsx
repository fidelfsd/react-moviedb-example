import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { global } from "../../_config/global";
import { useNavigate } from "react-router-dom";
import VoteAverage from "../vote-average/VoteAverage";
import getYear from "date-fns/getYear";

export default function MovieCard({ movie }) {
   // hooks
   const navigate = useNavigate();

   // functions
   const handleClick = () => {
      navigate(`/movie/${movie.id}`);
   };

   return (
      <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
         <CardActionArea>
            <CardMedia
               component="img"
               image={
                  movie.poster_path
                     ? `${global.BASE_IMAGES_URL}/w185${movie.poster_path}`
                     : "images/w185/null.jpg"
               }
               alt={movie.title}
            />
            <CardContent sx={{ position: "relative", pt: 4 }}>
               <VoteAverage
                  size={45}
                  value={movie.vote_average * 10}
                  style={{
                     position: "absolute",
                     top: "-30px",
                  }}
               />
               <Typography
                  gutterBottom
                  variant="h5"
                  fontSize={16}
                  component="div"
                  fontWeight={600}
               >
                  {movie.title}
               </Typography>
               {movie?.release_date && (
                  <Typography variant="body2" color="text.secondary">
                     {getYear(new Date(movie.release_date))}
                  </Typography>
               )}
            </CardContent>
         </CardActionArea>
      </Card>
   );
}
