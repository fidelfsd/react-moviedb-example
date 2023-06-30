import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { global } from "../../_config/global";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
   // hooks
   const navigate = useNavigate();

   // handle
   const handleClick = () => {
      navigate(`/movie/${movie.id}`);
   };
   return (
      <>
         <Card style={{ width: "16rem" }} onClick={handleClick}>
            <Card.Img
               variant="top"
               src={global.BASE_IMAGES_URL + "/w185" + movie.poster_path}
            />
            <Card.Body>
               <Card.Title>{movie.title}</Card.Title>
               <Card.Text>{movie.release_date}</Card.Text>
            </Card.Body>
         </Card>
      </>
   );
}
