import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieService from "../../_services/movieService";

export default function MovieDetail() {
   // hooks
   const { id } = useParams();
   const [movie, setMovie] = useState({});

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
      }
   };
   return (
      <div>
         <h1>Detail</h1>
         <h2>{id}</h2>
      </div>
   );
}
