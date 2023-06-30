import React, { useEffect, useState } from "react";

import movieService from "../../_services/movieService";
import MovieCard from "../../components/movie-card/MovieCard";
import { Container, Row, Col } from "react-bootstrap";

export default function PopularMovies() {
   // hooks
   const [movies, setMovies] = useState([]);

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
      <div>
         <Container>
            <h1 className="text-center">Popular movies</h1>

            {/* pagination */}

            <Row className="row-cols-4">
               {movies.map((mov) => (
                  <Col key={mov.id}>
                     <MovieCard movie={mov} />
                  </Col>
               ))}
            </Row>
         </Container>
      </div>
   );
}
