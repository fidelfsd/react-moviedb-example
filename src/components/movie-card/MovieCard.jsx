import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { global } from "../../_config/global";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";

export default function MovieCard({ movie }) {
   // hooks
   const navigate = useNavigate();

   // handle
   const handleClick = () => {
      navigate(`/movie/${movie.id}`);
   };
   return (
      <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
            <CardMedia
               component="img"
               image={`${global.BASE_IMAGES_URL}/w185${movie.poster_path}`}
               alt="green iguana"
            />
            <CardContent>
               <Typography
                  gutterBottom
                  variant="h5"
                  fontSize={18}
                  fontWeight={600}
                  component="div"
               >
                  {movie.title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {movie.release_date}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
}
